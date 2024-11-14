package com.denisson.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.denisson.backend.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{
    
}
