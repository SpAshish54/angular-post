package com.learningspringboot.post.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learningspringboot.post.entity.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

}

