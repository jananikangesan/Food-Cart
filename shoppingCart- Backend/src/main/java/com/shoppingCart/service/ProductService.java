package com.shoppingCart.service;

import com.shoppingCart.model.Product;
import java.util.List;
import java.util.Optional;

public interface ProductService {

  public List<Product> getAllProduct();
  public Product saveProduct(Product product);
  public String deleteProduct(String id);
  public Optional<Product> findProduct(String id);

}
