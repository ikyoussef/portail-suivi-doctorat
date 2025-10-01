package com.doctorat.serviceutilisateurs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient; // Ajouté

@SpringBootApplication
@EnableEurekaClient // Ajouté
public class ServiceUtilisateursApplication {
	public static void main(String[] args) {
		SpringApplication.run(ServiceUtilisateursApplication.class, args);
	}
}