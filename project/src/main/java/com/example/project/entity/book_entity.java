package com.example.project.entity;
import jakarta.persistence.*;

@Entity
@Table(name="books")
public class book_entity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String bookid;
	private String title;
	private String author;
	private String description;
	private String comment;
	private String publish_date;
	private String review;
	
	public book_entity() {
		// TODO Auto-generated constructor stub
	}
	public book_entity(int id, String bookid, String title, String author, String description, String comment,
			String publish_date, String review) {

		this.id = id;
		this.bookid = bookid;
		this.title = title;
		this.author = author;
		this.description = description;
		this.comment = comment;
		this.publish_date = publish_date;
		this.review = review;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBookid() {
		return bookid;
	}
	public void setBookid(String bookid) {
		this.bookid = bookid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getPublish_date() {
		return publish_date;
	}
	public void setPublish_date(String publish_date) {
		this.publish_date = publish_date;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	

}
