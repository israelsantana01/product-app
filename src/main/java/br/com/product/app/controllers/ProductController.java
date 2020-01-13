package br.com.product.app.controllers;

import java.util.List;
import java.util.Optional;

import javax.management.RuntimeErrorException;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.product.app.models.Product;
import br.com.product.app.repositories.ProductRepository;

@RestController
@RequestMapping("/products")
public class ProductController {

	private ProductRepository repository;

	public ProductController(ProductRepository repository)
	{
		this.repository = repository;
	}

	// Constructor (private repositories: Repositories) {}

	@GetMapping
	public List<Product> findAll()
	{
		return this.repository.findAll();
	}

	@GetMapping("/{id}")
	public Product find(@PathVariable("id") Long id)
	{
		Optional<Product> optional = this.repository.findById(id);
		
		if (optional.isPresent()) {
			return optional.get();
		} else {
			throw new RuntimeException("Product with id " + id + " not found.");
		}
	}

	@PostMapping
	public Product save(@RequestBody Product product)
	{

		if (product.getBarcode() == null || product.getDescription() == null || product.getPrice() == null) {
			throw new RuntimeException("Invalid Data");
		}

		return this.repository.save(product);
	}

	// heroes/:id
	@DeleteMapping("/{id}")
	public Product delete(@PathVariable(name = "id") Long id)
	{
		Optional<Product> optional = this.repository.findById(id);

		if (optional.isPresent()) {
			Product product = optional.get();
			this.repository.deleteById(id);
			return product;
		} else {
			throw new RuntimeException("Product with id " + id + " not found.");
		}
	}

}
