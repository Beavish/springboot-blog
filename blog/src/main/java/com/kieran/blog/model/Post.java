package com.kieran.blog.model;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.With;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name="table_post")
public class Post {
	
	
	  @Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	  private Long id;

	  private String title;
	  
	  @Column(columnDefinition="TEXT")
	  private String content;
	  
	  private Date date_created;
	  
	  private Date last_updated;
	  
	  private Date updated_at;

	  	  
	  @JsonManagedReference
	  @OneToMany(cascade=CascadeType.ALL, fetch=FetchType.LAZY, mappedBy="post")
	  private List<PostImage> postImage;

	
	

}