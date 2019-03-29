/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kubalock.developer.demo.controllers;

import com.kubalock.developer.demo.model.User;
import com.kubalock.developer.demo.repository.UserRepository;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Grzegorz
 */
@RestController
public class UserController {
    
    @Autowired
    private UserRepository repository;
    
    public UserController(UserRepository repository) {
        this.repository = repository;
    }
    
    @GetMapping("/team/{id}/users")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<User> getAllTeams(@PathVariable(value = "id") int team_id) {
        return repository.findByTeamId(team_id).stream().collect(Collectors.toList());
    }
}
