package com.denisson.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denisson.backend.model.Product;
import com.denisson.backend.repository.ProductRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("products")
public class ProductController {
    
    @Autowired
    ProductRepository repository;

    @PostMapping("")
    public ResponseEntity<?> create(@RequestBody Product product) {
        try {
            if (product == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Product cannot be null!");
            }
            Product savedProduct = repository.save(product);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("")
    public List<Product> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        try {
            if (!repository.existsById(id)) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(String.format("Id %s not found!", id));
            }
            return ResponseEntity.ok(repository.findById(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> put(@PathVariable Long id, @RequestBody Product productAtt) {
        try {
            if (!repository.existsById(id)) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(String.format("Id %s not found!", id));
            }

            Optional<Product> optionalProduct = repository.findById(id);
            if (optionalProduct.isPresent()) {
                Product product = optionalProduct.get();
                product.setName(productAtt.getName());
                product.setImage(productAtt.getImage());
                product.setDescription(productAtt.getDescription());
                product.setPrice(productAtt.getPrice());
                product.setCategory(productAtt.getCategory());
                product.setEvaluation(productAtt.getEvaluation());
                product.setAbout(productAtt.getAbout());
                product.setSize(productAtt.getSize());
                product.setEnergy(productAtt.getEnergy());
                product.setDelivery(productAtt.getDelivery());

                Product savedProduct = repository.save(product);
                return ResponseEntity.ok(savedProduct);
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found!");

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            if (!repository.existsById(id)) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(String.format("Id %s not found!", id));
            }

            repository.deleteById(id);
            return ResponseEntity.ok().body("Product deleted!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
    
    
}
