package com.kieran.blog.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kieran.blog.model.PostImage;

public interface PostImageRepository extends JpaRepository <PostImage,Long> {

	//<PostImage> findByName(String imageName);
	Optional<PostImage> findByName(String name);

}
