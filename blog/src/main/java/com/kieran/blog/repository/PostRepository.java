package com.kieran.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kieran.blog.model.Post;

public interface PostRepository extends JpaRepository<Post,Long> {

}
