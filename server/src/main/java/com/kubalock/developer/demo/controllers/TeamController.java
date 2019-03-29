/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kubalock.developer.demo.controllers;

import com.kubalock.developer.demo.model.Team;
import com.kubalock.developer.demo.model.User;
import com.kubalock.developer.demo.repository.TeamRepository;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Grzegorz
 */
@RestController
public class TeamController {

    @Autowired
    private TeamRepository repository;
    
    public TeamController(TeamRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/allTeams")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<Team> getAllTeams() {
        return repository.findAll().stream().collect(Collectors.toList());
    }
}
