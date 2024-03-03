package com.grumio.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("grumio")

public class GrumioListController {
	
	List<String> list = new ArrayList<String>();
	
	public GrumioListController() {
		list.add("India");
		list.add("China");
		list.add("United States(US)");
		list.add("Russia");
		list.add("Australia");
		list.add("African");
		list.add("Europe");
	}
	
	@GetMapping("grumio/getlist")
	public List<String> getList() {
		return list;
	}
	@GetMapping("grumio/submit")
	public boolean submit(@RequestParam(value = "name", defaultValue = "N/A")String name) 
	{
		
		if(list.indexOf(name) != -1) {
			return(true);
		}
		return(false);
		
	}
	@GetMapping("grumio/test")
	public List<String> test(@RequestParam(value = "name", defaultValue = "N/A")String name) 
	{
		
		list.add(name);
		return list;
		
	}
}
