package edu.ai_trip_planner.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data    //  setter bhi object mapper ko hona
@AllArgsConstructor  // no need but it is  professional standard nahi raha bhi to chalta
@NoArgsConstructor // object mapper ko hona no arg constructor
public class HotelSuggestion {

    private String name ;

    private String area ;

    private Double estimatedPricePerNight;

    private String reason;

    private String bookingTip;

    private String bookingUrl;
}
