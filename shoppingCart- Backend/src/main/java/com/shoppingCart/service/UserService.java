package com.shoppingCart.service;

import com.shoppingCart.model.User;
import org.springframework.http.ResponseEntity;

public interface UserService {

  public User saveUser(User user);

  public ResponseEntity<?> loginUser(User user);
}
