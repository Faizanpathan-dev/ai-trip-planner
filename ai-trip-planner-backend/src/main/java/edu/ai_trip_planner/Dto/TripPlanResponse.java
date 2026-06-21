package edu.ai_trip_planner.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TripPlanResponse {

    private String destination;
    private LocalDate startDate;
    private LocalDate endDate;
    private Double budget;
//    private String plan;

    private List<DayPlan>  days ;

    private List<HotelSuggestion> hotelSuggestions;

    private BudgetBreakdown budgetBreakdown;

    private List<Suggestion>  foodSuggestions ;

    private List<Suggestion>  transportSuggestions;

    private List<String> travelTips;




}
