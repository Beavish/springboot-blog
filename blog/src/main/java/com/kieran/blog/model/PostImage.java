package com.kieran.blog.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Data;


@Entity
@Data
public class PostImage {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	 
	private String type;
	
	private byte [] imageByte;
	
	@ManyToOne
    @JoinColumn(name = "id", insertable = false, updatable = false, nullable=false)
    private Post post;

}
