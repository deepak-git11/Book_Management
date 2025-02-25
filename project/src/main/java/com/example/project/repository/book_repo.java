package com.example.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.entity.book_entity;

public interface book_repo extends JpaRepository<book_entity,Integer > {

}
