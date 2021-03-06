/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kubalock.developer.demo.repository;

import com.kubalock.developer.demo.model.Team;
import com.kubalock.developer.demo.model.User;
import java.util.Collection;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 *
 * @author Grzegorz
 */
@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface UserRepository extends JpaRepository<User, Long> {
    
    @Query("select u from User u where team_id = ?1")
    Collection<User> findByTeamId(int team_id);
    
    @Query("select u from User u  where username = ?1")
    User getUserByUsername(String username);
}
