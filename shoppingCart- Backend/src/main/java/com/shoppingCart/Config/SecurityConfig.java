package com.shoppingCart.Config;

import com.shoppingCart.service.Impl.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

  @Autowired
  private CustomUserDetailsService userDetailsService;

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf.disable()) // Disable CSRF for simplicity (enable in production if needed)
        .cors(Customizer.withDefaults())
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/user/signUp", "/user/login").permitAll() // Allow signup and login
            .requestMatchers("/product/showAll").hasAnyAuthority("user","admin")
            .requestMatchers("/product/**", "/image/**").hasAuthority("admin") // Admin access
            .anyRequest().authenticated() // All other requests require authentication
        )
        .httpBasic(Customizer.withDefaults()); // Enable basic authentication

    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    // Call the passwordEncoder() method directly
    auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
  }

}
