package com.shoppingCart.repository;

import com.shoppingCart.model.FileData;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileDataRepository extends JpaRepository<FileData,String> {

  Optional<FileData> findByName(String name);

}
