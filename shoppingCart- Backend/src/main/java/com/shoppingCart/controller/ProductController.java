package com.shoppingCart.controller;

import com.shoppingCart.model.Product;
import com.shoppingCart.service.ProductService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/product")
public class ProductController {

  @Autowired
  public ProductService productService;

  @GetMapping("/showAll")
  public List<Product> getProducts(){
    return productService.getAllProduct();
  }
}
