package com.familyfirstsoftware.Spring.Portfolio.Backend.ecommerce.dao;

import com.familyfirstsoftware.Spring.Portfolio.Backend.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin("http://localhost:4200/")
@Repository                                         // entity type, primary key type
public interface ProductRepository extends JpaRepository<Product, Long> {

    // http://localhost:8080/api/products/search/findByCategoryId?id=1
    // GET http://localhost:8080/api/products/search/findByCategoryId?id={categoryId}&page={page}&size={size}
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);

}
