package br.com.product.app;

import javax.persistence.*;


@Table
@Entity
public class ProductModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long id;	
	private String barcode;
	private String description;
	private Double price;
	
	public Long getId() {
		return this.id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String  getBarcode() {
		return this.barcode;
	}
	
	public void setBarcode(String barcode) {
		this.barcode = barcode;
	}
	
	public String  getDescription() {
		return this.description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Double getPrice() {
		return this.price;
	}
	
	public void setPrice (Double price) {
		this.price = price;
	}
	
	
	
}
