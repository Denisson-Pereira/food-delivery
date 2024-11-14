package com.denisson.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denisson.backend.model.Category;
import com.denisson.backend.repository.CategoryRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("categories")
public class CategoriesController {

    @Autowired
    CategoryRepository repository;

    @GetMapping("")
    public List<Category> getAll() {
        return repository.findAll();
    }
    
    
    
}
