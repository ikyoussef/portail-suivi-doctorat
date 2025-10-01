package com.doctorat.serviceutilisateurs.controller;

import com.doctorat.serviceutilisateurs.dto.LoginRequest;
import com.doctorat.serviceutilisateurs.dto.LoginResponse;
import com.doctorat.serviceutilisateurs.dto.RegisterRequest;
import com.doctorat.serviceutilisateurs.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users/auth") // Prefixé par /api/users via Gateway
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
        if (authService.existsByUsername(registerRequest.getUsername())) {
            return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
        }
        if (authService.existsByEmail(registerRequest.getEmail())) {
            return new ResponseEntity<>("Email is already in use!", HttpStatus.BAD_REQUEST);
        }
        authService.registerUser(registerRequest);
        return new ResponseEntity<>("User registered successfully!", HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        String jwt = authService.authenticateUser(loginRequest);
        return ResponseEntity.ok(new LoginResponse(jwt));
    }
}