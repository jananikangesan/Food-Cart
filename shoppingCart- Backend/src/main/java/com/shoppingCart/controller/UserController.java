package com.shoppingCart.controller;


import com.shoppingCart.model.User;
import com.shoppingCart.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/user")
public class UserController {

  @Autowired
  public UserService userService;

  @PostMapping("/signUp")
  public String addUser(@RequestBody User user){

    User addNew=userService.saveUser(user);

    if(addNew!=null){
      return "user is add successfully.";
    }
    return "Something went wrong...";
  }
}
