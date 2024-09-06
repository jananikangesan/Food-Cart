package com.shoppingCart.service.Impl;

import com.shoppingCart.model.FileData;
import com.shoppingCart.repository.FileDataRepository;
import com.shoppingCart.service.StorageService;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class StorageServiceImpl implements StorageService {

  @Autowired
  private FileDataRepository fileDataRepository;

  private final String FOLDER_PATH="D:/CBC training/react practice/food-cart/shopping-cart-frontend/public/images/";

  public FileData uploadImageToFileSystem(MultipartFile file) throws IOException {
    String filePath=FOLDER_PATH+file.getOriginalFilename();
    FileData fileData=fileDataRepository.save(FileData.builder()
        .name(file.getOriginalFilename())
        .type(file.getContentType())
        .filePath(filePath)
        .build());

    file.transferTo(new File(filePath));

    if(fileData!=null){
      return fileData;
    }
    return null;
  }

  public byte[] downloadImageFromFileSystem(String fileName) throws IOException {
    Optional<FileData> dbImageData=fileDataRepository.findByName(fileName);
    String filePath= dbImageData.get().getFilePath();
    System.out.println("*****************"+filePath);
    byte[] images= Files.readAllBytes(new File(filePath).toPath());
    return images;
  }

  public List<FileData> getAllProduct() {
    return fileDataRepository.findAll();
  }
}
