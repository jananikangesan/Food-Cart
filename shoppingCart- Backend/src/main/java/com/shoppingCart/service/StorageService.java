package com.shoppingCart.service;

import com.shoppingCart.model.FileData;
import java.io.IOException;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;

public interface StorageService {

  public FileData uploadImageToFileSystem(MultipartFile file) throws IOException;

  public byte[] downloadImageFromFileSystem(String fileName) throws IOException;

  public List<FileData> getAllProduct();

  public String deleteImage(String id);

}
