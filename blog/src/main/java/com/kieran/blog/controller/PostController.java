package com.kieran.blog.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kieran.blog.model.Post;
import com.kieran.blog.repository.PostRepository;

@Controller
@RequestMapping(path="/posts")
public class PostController {
	
	@Autowired
	private PostRepository postRepo;
	
	@GetMapping(path="/all")
	  public @ResponseBody Iterable<Post> getAllUsers() {
	    // This returns a JSON or XML with the users
	    return postRepo.findAll();
	  }
	 @GetMapping("/post/{id}")
	 public Optional<Post> get(@PathVariable Long id) {
	  return postRepo.findById(id);
	 }
	

}
