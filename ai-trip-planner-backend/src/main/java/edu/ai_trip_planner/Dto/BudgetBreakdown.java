package edu.ai_trip_planner.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BudgetBreakdown {

    private Double hotel;

    private Double food;

    private Double transport;

    private  Double activities;

    private Double total ;

}
