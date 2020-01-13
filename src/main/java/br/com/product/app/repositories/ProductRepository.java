package br.com.product.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.product.app.models.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
