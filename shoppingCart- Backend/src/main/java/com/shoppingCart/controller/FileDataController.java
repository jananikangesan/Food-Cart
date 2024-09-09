package com.shoppingCart.controller;

import com.shoppingCart.service.StorageService;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/image")
public class FileDataController {

  @Autowired
  private StorageService storageService;

  @GetMapping("/downloadFile/{fileName}")
  public ResponseEntity<byte[]> downloadImageFromFileSystem(@PathVariable String fileName) throws IOException {
    // Debugging: Print the file name and path
    System.out.println("Downloading file: " + fileName);

    byte[] imageData = storageService.downloadImageFromFileSystem(fileName);

    // Determine the content type based on the file extension
    String contentType = Files.probeContentType(new File(fileName).toPath());
    if (contentType == null) {
      contentType = "application/octet-stream";  // Fallback content type
    }

    return ResponseEntity.ok()
        .contentType(MediaType.parseMediaType(contentType))
        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"")
        .body(imageData);
  }

}
