/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kubalock.developer.demo.controllers;

import com.kubalock.developer.demo.model.City;
import com.kubalock.developer.demo.repository.CarRepository;
import com.kubalock.developer.demo.repository.CityRepository;
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
public class CityController {
    
    @Autowired
    private CityRepository repository;
    
    public CityController(CityRepository repository) {
        this.repository = repository;
    }
    
    @GetMapping("/allCities")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<City> allCities() {
        return repository.findAll().stream().collect(Collectors.toList());
    }
}
