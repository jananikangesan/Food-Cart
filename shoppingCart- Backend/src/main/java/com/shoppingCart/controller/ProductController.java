package com.shoppingCart.controller;

import com.shoppingCart.model.Product;
import com.shoppingCart.service.ProductService;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/product")
public class ProductController {

  // Adjust this path to the location of your React project's public/images folder
  private final Path reactPublicImagesLocation = Paths.get("D:/CBC training/react practice/shopping-cart/public/images");


  @Autowired
  public ProductService productService;

  @GetMapping("/showAll")
  public List<Product> getProducts(){
    return productService.getAllProduct();
  }

  @PostMapping("/addProduct")
  public String addProducts(@RequestBody Product product){
    Product addNew= productService.saveProduct(product);
    try{
      if(addNew!=null){
        return "Product is added successfully";
      }
    } catch (Exception e) {
      throw new RuntimeException(e);
    }
    return "Something went wrong...";
  }

}
