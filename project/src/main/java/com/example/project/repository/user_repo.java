package com.example.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.project.entity.user_entity;

@Repository
public interface user_repo extends JpaRepository<user_entity,Integer> {

}
