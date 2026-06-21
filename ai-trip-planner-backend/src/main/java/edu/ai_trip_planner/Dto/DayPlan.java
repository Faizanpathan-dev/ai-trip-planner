package edu.ai_trip_planner.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor // it is for object mapper
public class DayPlan {

    private Integer dayNumber;

    private String title ;

    private List<String> activities;
}
