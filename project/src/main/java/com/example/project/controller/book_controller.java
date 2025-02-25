package com.example.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.project.entity.book_entity;
import com.example.project.service.book_service;


@RestController
@RequestMapping("/book")
@CrossOrigin
public class book_controller {

	@Autowired
	book_service bookser;
	
	@GetMapping("/getbookdata")
	public List<book_entity> bookdisplay(){
		return this.bookser.getbookdata();
	}
	
	@GetMapping("/getbookid/{id}")
	public Optional<book_entity> getbookid(@PathVariable(value="id") Integer id){
		return this.bookser.getbookbyid(id);
	}
	
	@PostMapping("/postbook")
	public String postbook(@RequestBody book_entity b) {
		this.bookser.postbookdata(b);
		return "book succesfully inserted";
	}
	@PutMapping("putbook/{id}")
	public String updatebook( @RequestBody book_entity b, @PathVariable(value="id") Integer id ) {
		return this.bookser.putbook(b, id);
	}
	@DeleteMapping("/deletebook/{id}")
	public String deletebook(@PathVariable(value="id") Integer id) {
		this.bookser.deletebook(id);
		return "book deleted";
	}
}
