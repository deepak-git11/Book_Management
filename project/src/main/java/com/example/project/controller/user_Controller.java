package com.example.project.controller;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.project.entity.user_entity;
import com.example.project.service.user_service;
@RestController
@RequestMapping("/user")
@CrossOrigin
public class user_Controller {
	
	@Autowired
	user_service service;
	
	@GetMapping("/getuserdata")
	public List<user_entity> userdisplay() {
		return this.service.getalluserdata();
	}
	
	@GetMapping("/getuserid/{id}")
	public Optional<user_entity> getuserid(@PathVariable(value="id") Integer identity) {
		return service.getuserbyid(identity);
	}
	
	@PostMapping("/postuserdata")
	public String post(@RequestBody user_entity p) {
		service.saveuserdata(p);
		return "user posted success";
	}
	@PutMapping("/putuserdata/{id}")
	public String put(@PathVariable(value="id") Integer identity ,@RequestBody user_entity p ){
		service.updateuser(identity,p);
		return "user updated succesfully";
	}
	@DeleteMapping("/deleteuser/{id}")
	public String deletedata(@PathVariable (value="id") Integer idd) {
		this.service.deleteuser(idd);
		return "user deleted";
	}
	
	
	
	
}
