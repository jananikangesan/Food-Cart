package com.shoppingCart.service.Impl;

import com.shoppingCart.model.Product;
import com.shoppingCart.repository.ProductRepository;
import com.shoppingCart.service.ProductService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

  @Autowired
  public ProductRepository productRepository;

  @Override
  public List<Product> getAllProduct() {
    return productRepository.findAll();
  }
}
