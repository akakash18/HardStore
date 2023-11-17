package com.shop.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shop.entity.Product;
import com.shop.exception.ResourceNotFound;
import com.shop.repository.ProductRepository;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/shop/")
public class Controller {

    @Autowired
    private ProductRepository productRepository;

    // get all Products
    @GetMapping("/product")
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    // create Product rest api
    @PostMapping("/product")
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // get Product by id rest api
    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
    	Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Product not exist with id :" + id));
        return ResponseEntity.ok(product);
    }

    // update Product rest api

    @PutMapping("/product/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails){
    	Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Product not exist with id :" + id));

    	product.setProductName(productDetails.getProductName());
    	product.setQuantity(productDetails.getQuantity());
    	product.setPrice(productDetails.getPrice());

    	Product updatedProduct = productRepository.save(product);
        return ResponseEntity.ok(updatedProduct);
    }

    // delete Product rest api
    @DeleteMapping("/product/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long id){
    	Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Product not exist with id :" + id));

    	productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}