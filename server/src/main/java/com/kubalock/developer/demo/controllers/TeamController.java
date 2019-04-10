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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Grzegorz
 */
@RestController
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private UserRepository userRepository;

    public TeamController(TeamRepository teamRepository,
            UserRepository userRepository) {
        this.teamRepository = teamRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/allTeams")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<Team> getAllTeams() {
        return teamRepository.findAll().stream().collect(Collectors.toList());
    }

    public Team getTeam(Long team_id) {
        return teamRepository.getOne(team_id);
    }

    @PutMapping("/removeTeam/{team_id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void deleteTeam(@PathVariable(value = "team_id") int team_id) {
        Collection<User> players = userRepository.findByTeamId(team_id);
        for (User player : players) {
            player.setTeam(null);
            userRepository.save(player);
        }
        Team team = teamRepository.getOne(Long.valueOf(team_id));
        teamRepository.delete(team);
    }

    @PostMapping("/createTeam/{team_name}/{team_description}/{team_leader}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void createTeam(@PathVariable(value = "team_name") String team_name,
        @PathVariable(value = "team_description") String team_description,
        @PathVariable(value = "team_leader") Long team_leader) {
        Team team = new Team();
        team.setTeam_name(team_name);
        team.setTeam_description(team_description);
        team.setTeam_leader(team_leader);
        teamRepository.save(team);
        
        User leader = userRepository.getOne(team_leader);
        leader.setTeam(team);
        userRepository.save(leader);
    }
}
