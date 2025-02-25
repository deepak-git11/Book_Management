package com.example.project.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.project.entity.book_entity;
import com.example.project.repository.book_repo;

@Service
public class book_service {
	@Autowired
	book_repo repo;
	
	public List<book_entity> getbookdata() {
		return this.repo.findAll();
	}
	public Optional<book_entity> getbookbyid(Integer id) {
		return this.repo.findById(id);
	}

	public void postbookdata(book_entity b) {
	this.repo.save(b);	
	}
	public String putbook(book_entity b , Integer id) 
	{
		book_entity old = this.repo.findById(id).orElseThrow();
		old.setBookid(b.getBookid());
		old.setAuthor(b.getAuthor());
		old.setDescription(b.getDescription());
		old.setComment(b.getComment());
		old.setPublish_date(b.getPublish_date());
		old.setReview(b.getReview());
		old.setTitle(b.getTitle());
		this.repo.save(old);
		return "updated";
	}

	public void deletebook(Integer id) {
		this.repo.deleteById(id);
	}

}
