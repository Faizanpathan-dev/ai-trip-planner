package edu.ai_trip_planner.Dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Suggestion {

    private String text ;

    private String imageKeyword;

}
