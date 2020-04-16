package com.kieran.blog.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostImage {
	
	

	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	 
	private String type;
	@Lob
	private byte [] imageByte;
	
	@ManyToOne
    @JoinColumn(name = "id", insertable = false, updatable = false, nullable=false)
    private Post post;

}
