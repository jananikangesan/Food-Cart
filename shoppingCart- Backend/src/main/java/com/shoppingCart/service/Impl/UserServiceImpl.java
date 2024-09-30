package com.shoppingCart.service.Impl;

import com.shoppingCart.model.User;
import com.shoppingCart.repository.UserRepository;
import com.shoppingCart.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  public UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

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
}
