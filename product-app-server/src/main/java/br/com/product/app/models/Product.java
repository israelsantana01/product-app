package br.com.product.app.models;

import javax.persistence.*;


@Table
@Entity
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long id;	
	private String barcode;
	private String description;
	private Double price;
	private String imageUrl;
	
	public Long getId()
	{
		return id;
	}
	
	public String getBarcode()
	{
		return barcode;
	}
	
	public String getDescription()
	{
		return description;
	}
	
	public Double getPrice()
	{
		return price;
	}
	
	public void setId(Long id)
	{
		this.id = id;
	}
	
	public void setBarcode(String barcode)
	{
		this.barcode = barcode;
	}
	
	public void setDescription(String description)
	{
		this.description = description;
	}
	
	public void setPrice(Double price)
	{
		this.price = price;
	}
	
	public String getImageUrl() {
		return imageUrl;
	}
	
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	
	
}
