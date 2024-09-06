package com.shoppingCart.service;

import org.springframework.web.multipart.MultipartFile;

public interface StrogeService {

  public String uploadImageToFileSystem(MultipartFile file);

}
