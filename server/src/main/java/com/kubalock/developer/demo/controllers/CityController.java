/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kubalock.developer.demo.controllers;

import com.kubalock.developer.demo.repository.CarRepository;
import com.kubalock.developer.demo.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Grzegorz
 */
@RestController
public class CityController {
    
    @Autowired
    private CityRepository repository;
    
    public CityController(CityRepository repository) {
        this.repository = repository;
    }
}
