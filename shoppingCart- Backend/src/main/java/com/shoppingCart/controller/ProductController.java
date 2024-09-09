package com.shoppingCart.controller;

import com.shoppingCart.model.FileData;
import com.shoppingCart.model.Product;
import com.shoppingCart.service.ProductService;
import com.shoppingCart.service.StorageService;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

  @Autowired
  public ProductService productService;

  @Autowired
  public StorageService storageService;

  @GetMapping("/showAll")
  public List<Product> getProducts(){
    return productService.getAllProduct();
  }

  @PostMapping("/addProduct")
  public String addProducts(
      @RequestParam("image") MultipartFile file,
      @RequestParam("name") String name,
      @RequestParam("amt") String amt,
      @RequestParam("shop") String shop,
      @RequestParam("ftype") String ftype,
      @RequestParam("latest") String latest
  ) throws IOException {

    FileData uploadImage = storageService.uploadImageToFileSystem(file);

    Product product = new Product();
    product.setName(name);
    product.setAmt(amt);
    product.setShop(shop);
    product.setFtype(ftype);
    product.setLatest(latest);
    product.setPic(uploadImage);

    Product addNew = productService.saveProduct(product);

    if (addNew != null && uploadImage != null) {
      return "Product is added successfully";
    }
    return "Something went wrong...";
  }

  @DeleteMapping("/deleteProduct/{id}")
  public String deleteProductDetails(@PathVariable String id){
    Optional<Product> details=productService.findProduct(id);

    if(details.isPresent()){
      productService.deleteProduct(id);
      return storageService.deleteImage(details.get().getPic().getId());
    }
   return null;
  }

}


