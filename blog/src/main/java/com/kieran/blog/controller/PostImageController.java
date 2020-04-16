package com.kieran.blog.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URI;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import javax.annotation.Resource;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity.BodyBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.kieran.blog.model.Post;
import com.kieran.blog.model.PostImage;
import com.kieran.blog.repository.PostImageRepository;

@Controller
@RequestMapping("/api/images")
@CrossOrigin(value = {"*"}, exposedHeaders = {"Content-Disposition"})
public class PostImageController {
	@Autowired
	private PostImageRepository imageRepo;
	

	

	@PostMapping
	public ResponseEntity<Void> uploadNewFile(@NotNull @RequestParam("file") MultipartFile file) throws IOException {
	  PostImage image = new PostImage(null, file.getOriginalFilename(),file.getContentType(),file.getBytes(), null);
	  imageRepo.save(image);
	 
	  URI location = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();
	  return ResponseEntity.created(location).build();
	}
 
  
			

}
