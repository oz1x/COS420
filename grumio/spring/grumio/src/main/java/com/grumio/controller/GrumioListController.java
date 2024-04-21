package com.grumio.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("grumio")
@RequestMapping 
public class GrumioListController {
	
	List<String> users = new ArrayList<String>();
	
	public GrumioListController() {
		users.add("Sepideh");
		users.add("Ozwin");
		users.add("Joe");
		users.add("Odin");
		users.add("Dylan");
		users.add("Raist");
	}
	
	@GetMapping("grumio/getlist")
	public List<String> getList() {
		return users;
	}
	@PostMapping("grumio/submit")
	//@RequestMapping(name = "/grumio/submit", method = RequestMethod.POST)
	public boolean submit(@RequestParam(value = "username", defaultValue = "N/A")String name) 
	{
		
		if(users.indexOf(name) != -1) {
			return(true);
		}
		return(false);
		
	}
	@GetMapping("grumio/test")
	
	public List<String> test(@RequestParam(value = "name", defaultValue = "N/A")String name) 
	{
		
		users.add(name);
		return users;
		
	}
}
