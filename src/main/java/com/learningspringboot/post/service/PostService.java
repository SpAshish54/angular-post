//package com.learningspringboot.post.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.learningspringboot.post.Repository.PostRepository;
//import com.learningspringboot.post.entity.Post;
//
//@Service
//public class PostService {
//	@Autowired
//    private PostRepository postRepository;
//	
//	@Autowired
//	private Post post;
//
//    public Post getPostById(Long id) {
//        return postRepository.findById(id).orElse(null);
//    }
//    
//    
//    public Post createPost(Post post) {
//    	post.setContent(post.getContent());
//        return postRepository.save(post);
//    }
//}
//
