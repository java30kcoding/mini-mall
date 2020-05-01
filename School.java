package com.etc.test;

import java.util.List;

public class School {
	public void showStudent(List list){
		
		for(int i=1;i<list.size();i++){
			System.out.println(list.get(i));
		}
		
	}

public void modifyStudent(List list){
		
		for(int i=0;i<list.size();i++){
			System.out.println(list.set(i, "´ó¶þ"));
		}
		
	}
public void deleteStudent(List list){
	
	for(int i=0;i<list.size();i++){
		list.remove(0);
	}
	
}
	
}
