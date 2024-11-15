package com.denisson.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denisson.backend.model.Category;
import com.denisson.backend.repository.CategoryRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping("categories")
public class CategoriesController {

    @Autowired
    CategoryRepository repository;

    @GetMapping("")
    public List<Category> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        try {
            if (repository.existsById(id)) {
                return ResponseEntity.ok(repository.findById(id));
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(String.format("Id %s not found!", id));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PostMapping("")
    public ResponseEntity<?> create(@RequestBody Category category) {
        try {
            if (category == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Category cannot be null!");
            }
            
            Category savedCategory = repository.save(category);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedCategory);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        try {
            if (!repository.existsById(id)) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(String.format("Id %s not found!", id));
            }
            repository.deleteById(id);
            return ResponseEntity.ok("Category deleted!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An internal error occurred. Please try again later.");
        }
    }
    
    
    
    
    
    
    
}
