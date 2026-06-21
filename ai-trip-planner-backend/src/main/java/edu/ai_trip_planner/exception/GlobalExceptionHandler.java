package edu.ai_trip_planner.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

//@RestControllerAdvice
public class GlobalExceptionHandler {

   public ResponseEntity<Map<String,Object>>  handleValidationExeption
           (MethodArgumentNotValidException ex ){
       Map<String ,String> errors = new HashMap<>();
    return null;
   }

}
