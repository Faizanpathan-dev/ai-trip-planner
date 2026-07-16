package edu.ai_trip_planner.Entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="trips")
@Data
public class TripEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id ;

    private String destination; 

    private LocalDate starDate;

    private LocalDate endDate;

    private Double budget;

    @Column(columnDefinition = "Text")
   private String planJson; 

   private LocalDateTime createdAt;

   @PrePersist  //"Before  save this object to the database,
   //  automatically run this method first! har bar save karne se pehle run hoga"
   public void prePerist(){
    this.createdAt=LocalDateTime.now();
   }
   
}

//note ye word "Persist" in JPA 
// specifically means "making a 
// new object permanent in the database for the 
// first time." It never means update!
