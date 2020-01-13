package br.com.product.app;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {
	
	private Repositories repository;
	
	public ProductController(Repositories repository) {
		this.repository = repository;
	}
	
	// Constructor (private repositories: Repositories) {}
	
	@RequestMapping("add")
	public void insert() {
		
		ProductModel p = new ProductModel();
		p.setBarcode("092474");
		p.setDescription("Arroz");
		p.setPrice(2.49);
		
		this.repository.save(p);
	}
	
}
