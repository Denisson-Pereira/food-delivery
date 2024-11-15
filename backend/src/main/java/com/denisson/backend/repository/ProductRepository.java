package com.denisson.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.denisson.backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    
}
