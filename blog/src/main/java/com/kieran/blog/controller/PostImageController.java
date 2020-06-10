package com.kieran.blog.controller;

import java.io.IOException;
import java.net.URI;
import java.util.Optional;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.kieran.blog.model.PostImage;
import com.kieran.blog.repository.PostImageRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
@RequestMapping("/api/images")
public class PostImageController {
	@Autowired
	private PostImageRepository imageRepo;
	

	@PostMapping
	public ResponseEntity<PostImage> uploadNewFile(@NotNull @RequestParam("file") MultipartFile file,
			@RequestParam("post_id") Long postId)
					throws IOException {
		// Now we need to dynamically pass post id to this function
	  PostImage image = new PostImage( null, file.getOriginalFilename(),file.getContentType(),file.getBytes(), postId, null);
      System.out.println(postId);


	  PostImage res = imageRepo.save(image);
	  URI location = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();
	  System.out.println(res);
	  
	  return ResponseEntity.ok(res);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<PostImage> updateFile(@NotNull @RequestParam("file") MultipartFile file,
			@RequestParam("post_id") Long postId,@RequestParam("id") Long id)
					throws IOException {
		System.out.print(postId);
		System.out.print(id);
		// Now we need to dynamically pass post id to this function
		
		  PostImage image = new PostImage( id,
		  file.getOriginalFilename(),file.getContentType(),file.getBytes(), postId,
		  null); System.out.println(postId);
		  
		  
		  PostImage res = imageRepo.save(image); URI location =
		  ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();
		  System.out.println(res);
		  
		   return ResponseEntity.ok(res);
		 
	  
	 	}
	
	@GetMapping("/{id}")
	public	ResponseEntity<?> getImage(@PathVariable Long id){
		Optional<PostImage> image = imageRepo.findById(id);
		 return image.map(response -> ResponseEntity.ok().body(response))
				 .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
		}
	
	@GetMapping("/all")
	  public @ResponseBody Iterable<PostImage> getAllImages() {
	    // This returns a JSON or XML with the users
	    return imageRepo.findAll();
	  }
 
  
			

}