/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kubalock.developer.demo.controllers;

import com.kubalock.developer.demo.model.Team;
import com.kubalock.developer.demo.model.User;
import com.kubalock.developer.demo.repository.TeamRepository;
import com.kubalock.developer.demo.repository.UserRepository;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Grzegorz
 */
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TeamRepository teamRepository;

    public UserController(UserRepository userRepository, TeamRepository teamRepository) {
        this.userRepository = userRepository;
        this.teamRepository = teamRepository;
    }

    @GetMapping("/team/{id}/users")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<User> getAllTeams(@PathVariable(value = "id") int team_id) {
        return userRepository.findByTeamId(team_id).stream().collect(Collectors.toList());
    }

    @GetMapping("/user/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public User getUserByUsername(@PathVariable(value = "id") String username) {
        User user = userRepository.getUserByUsername(username);
        return user;
    }

    @PutMapping("/leaveTeam/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void leaveTeam(@PathVariable(value = "id") Long user_id) {
        Team team = null;
        User user = userRepository.getOne(user_id);
        user.setTeam(team);
        userRepository.save(user);
    }

    @PutMapping("/joinTeam/{user_id}/{team_id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void joinTeam(@PathVariable(value = "user_id") Long user_id,
            @PathVariable(value = "team_id") Long team_id) {
        System.out.println(team_id);
        User user = userRepository.getOne(user_id);
        Team team = teamRepository.getOne(team_id);
        user.setTeam(team);
        userRepository.save(user);
    }
}
