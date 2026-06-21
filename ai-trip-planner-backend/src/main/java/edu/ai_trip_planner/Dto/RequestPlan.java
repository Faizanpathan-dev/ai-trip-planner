package edu.ai_trip_planner.Dto;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.stereotype.Component;


import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class RequestPlan {

    @NotBlank(message = "destination is required ")
   private  String destination;

    @NotNull(message = "budget is required ")
    @Min(value = 1000 ,message = "budget must me at least 1000")
   private Double budget ;

    @NotNull
    @FutureOrPresent(message = "start date cannot be in past ")
   private  LocalDate startDate ;

    @NotNull
    @FutureOrPresent(message = "end date cannot be in past ")
   private LocalDate endDate ;


}
