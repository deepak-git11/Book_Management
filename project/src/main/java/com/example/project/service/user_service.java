package com.example.project.service;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.entity.user_entity;
import com.example.project.repository.user_repo;

@Service
public class user_service {
	
	@Autowired
	user_repo repo ;
	
	public List<user_entity> getalluserdata(){
		return this.repo.findAll();
	}
	
	public Optional<user_entity> getuserbyid(Integer id) {
		return this.repo.findById(id);
	}

	public user_entity updateuser(Integer id,user_entity p){
		user_entity olddata=this.repo.findById(id).orElseThrow();
		olddata.setUsername(p.getUsername());
		return this.repo.save(olddata);
	}
	
	public user_entity saveuserdata(user_entity p) {
		return repo.save(p);
	}
	public void deleteuser(Integer id) {
		this.repo.deleteById(id);
	}
}
