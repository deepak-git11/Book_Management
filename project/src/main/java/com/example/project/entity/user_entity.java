package com.example.project.entity;
import jakarta.persistence.*;

@Entity
@Table(name="users")
public class user_entity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String Username;
	private String password;
	private String email;
	user_entity(int id, String Username ,String password , String email){
		this.id=id;
		this.Username=Username;
		this.password=password;
		this.email=email;
	} 
		user_entity(){
			
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getUsername() {
			return Username;
		}
		public void setUsername(String username) {
			Username = username;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
}

