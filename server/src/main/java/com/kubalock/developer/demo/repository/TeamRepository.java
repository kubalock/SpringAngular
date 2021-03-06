/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kubalock.developer.demo.repository;

import com.kubalock.developer.demo.model.Team;
import com.kubalock.developer.demo.model.User;
import java.util.Collection;
import org.jboss.logging.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 *
 * @author Grzegorz
 */
@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface TeamRepository extends JpaRepository<Team, Long> {

    @Query("select t from Team t where team_id = ?1")
    Team getUsersTeam(int team_id);
}