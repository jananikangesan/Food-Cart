package com.shoppingCart.model;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {

  private String message;
  private List<String> roles;


}
