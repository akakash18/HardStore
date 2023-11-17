package com.shop.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "product_name")
    private String productName;
    @Column(name = "quantity")
    private String quantity;
    @Column(name = "price")
    private String price;
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(long id, String productName, String quantity, String price) {
		super();
		this.id = id;
		this.productName = productName;
		this.quantity = quantity;
		this.price = price;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", productName=" + productName + ", quantity=" + quantity + ", price=" + price
				+ "]";
	}

}
