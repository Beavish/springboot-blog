package com.kieran.blog.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name="table_post")
public class Post {
	
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  private Long id;

	  private String title;

	  private String content;
	  
	  private Date date_created;
	  
	  private Date last_updated;
	  
	  private Date updated_at;

}
