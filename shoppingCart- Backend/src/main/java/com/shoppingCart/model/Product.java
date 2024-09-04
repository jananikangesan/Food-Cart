package com.shoppingCart.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@Entity
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  public String id;
  public String name;
  public String amt;
  public String shop;
  public String ftype;
  public String pic;
  public String latest;

}
