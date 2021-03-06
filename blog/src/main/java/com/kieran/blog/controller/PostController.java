package com.kieran.blog.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kieran.blog.model.Post;
import com.kieran.blog.repository.PostImageRepository;
import com.kieran.blog.repository.PostRepository;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
@RequestMapping(path = "/posts")
public class PostController {

	@Autowired
	private PostRepository postRepo;
	@Autowired
	private PostImageRepository imageRepo;

	@GetMapping(path = "/all")
	public @ResponseBody Iterable<Post> getAllUsers() {
		// This returns a JSON or XML with the users
		return postRepo.findAll();
	}

	@GetMapping("/post/{id}")
	public ResponseEntity<?> PosgetPost(@PathVariable Long id) {
		Optional<Post> post = postRepo.findById(id);
		return post.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));

	}
	
	
	
	@PutMapping("/post/{id}")
	ResponseEntity<Post> updateCategory(@Valid @RequestBody Post post, @PathVariable Long id){
		Post result= postRepo.save(post);
		return ResponseEntity.ok().body(result);
	}
	

	@DeleteMapping("/post/{id}")
	public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
		postRepo.deleteById(id);
		return ResponseEntity.ok().build();
	}

}
