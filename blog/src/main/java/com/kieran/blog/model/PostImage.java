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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

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
	private Long image_id;
	
	private String name;
	 
	private String type;
	
	@Lob
	private byte [] imageByte;
	
/*
*/
	@ManyToOne
    @JoinColumn(name = "post_id", insertable = false, updatable = false, nullable=true)
    private Post post;
}
