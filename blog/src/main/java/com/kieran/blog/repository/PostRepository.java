package com.kieran.blog.repository;

import javax.validation.Valid;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kieran.blog.model.Post;

public interface PostRepository extends JpaRepository<Post,Long> {



}
