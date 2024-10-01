package com.shoppingCart.service.Impl;

import com.shoppingCart.model.LoginResponse;
import com.shoppingCart.model.User;
import com.shoppingCart.repository.UserRepository;
import com.shoppingCart.service.UserService;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  public UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private CustomUserDetailsService userDetailsService;

  @Override
  public User saveUser(User user) {

    String password=user.getPassword();
    String confirmPassword=user.getConfirmPassword();


    User userDetail=userRepository.findByEmail(user.getEmail());

    if(password!=null && password.equals(confirmPassword) && userDetail==null){
      user.setRole("user");
      user.setPassword(passwordEncoder.encode(user.getPassword()));
      return userRepository.save(user);
    }

    return null;
  }

  @Override
  public ResponseEntity<?> loginUser(User user) {

    UserDetails userdetails = userDetailsService.loadUserByUsername(user.getEmail());

    System.out.println(userdetails);

    if(userdetails!=null){
      System.out.println("Stored Password: " + userdetails.getPassword());
      System.out.println("Entered Password: " + user.getPassword());

      if(passwordEncoder.matches(user.getPassword(), userdetails.getPassword())){

        List<String> roles = userdetails.getAuthorities().stream()
            .map(authority -> authority.getAuthority()) // Get string representation of authority
            .collect(Collectors.toList());

        return ResponseEntity.ok(new LoginResponse("User Login successfully!", roles));
      }
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong Password");
    }
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong email address");
  }
}
