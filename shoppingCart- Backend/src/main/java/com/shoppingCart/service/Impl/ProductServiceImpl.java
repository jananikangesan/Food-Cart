package com.shoppingCart.service.Impl;

import com.shoppingCart.model.FileData;
import com.shoppingCart.model.Product;
import com.shoppingCart.repository.ProductRepository;
import com.shoppingCart.service.ProductService;
import java.util.List;
import java.util.Optional;
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

  @Override
  public Product saveProduct(Product product) {
    return productRepository.save(product);
  }
  public Optional<Product> findProduct(String id){
    return productRepository.findById(id);
  }

  @Override
  public Product updateProduct(Product product, String id) {
    Boolean productDetails=productRepository.existsById(id);

    if(productDetails){
      product.setId(id);
     return productRepository.save(product);
    }
    return null;
  }

  @Override
  public String deleteProduct(String id) {
    Boolean student=productRepository.existsById(id);
    if(student) {
      productRepository.deleteById(id);
      return "Product Details deleted successfully";
    }
    return "no record found";
  }

}
