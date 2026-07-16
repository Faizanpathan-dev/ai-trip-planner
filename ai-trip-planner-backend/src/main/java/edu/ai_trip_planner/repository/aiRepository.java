package edu.ai_trip_planner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.ai_trip_planner.Entity.TripEntity;

@Repository
public interface aiRepository extends JpaRepository<TripEntity,Integer> {


    
}
