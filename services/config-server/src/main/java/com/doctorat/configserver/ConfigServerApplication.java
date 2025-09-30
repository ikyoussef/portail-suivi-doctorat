package com.doctorat.configserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer; // Ajouté
import org.springframework.cloud.netflix.eureka.EnableEurekaClient; // Ajouté

@SpringBootApplication
@EnableConfigServer // Ajouté
@EnableEurekaClient // Ajouté pour s'enregistrer auprès d'Eureka
public class ConfigServerApplication {
	public static void main(String[] args) {
		SpringApplication.run(ConfigServerApplication.class, args);
	}
}
