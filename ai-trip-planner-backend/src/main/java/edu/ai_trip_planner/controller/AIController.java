package edu.ai_trip_planner.controller;

import edu.ai_trip_planner.Dto.TripPlanResponse;
import edu.ai_trip_planner.Entity.TripEntity;
import edu.ai_trip_planner.aiServices.Aiservice;
import edu.ai_trip_planner.repository.aiRepository;
import edu.ai_trip_planner.Dto.RequestPlan;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin("*")
@RequestMapping("/api/ai")
@RestController
@RequiredArgsConstructor

public class AIController {

    private final Aiservice as;

    private final aiRepository repo;

@PostMapping ("/plan")
    public TripPlanResponse getPlane(@Valid  @RequestBody RequestPlan plan){

    return as.getPlan(plan);
}

@GetMapping("/history")
public List<TripEntity> getHistory(){

    return repo.findAll();
}
  

}
