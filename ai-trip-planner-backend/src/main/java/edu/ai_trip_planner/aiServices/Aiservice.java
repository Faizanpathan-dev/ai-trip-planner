package edu.ai_trip_planner.aiServices;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import edu.ai_trip_planner.Dto.RequestPlan;
import edu.ai_trip_planner.Dto.TripPlanResponse;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service

public class Aiservice {



private final ChatClient chatClient;
private final ObjectMapper objectMapper;
public Aiservice(ChatClient.Builder builder , ObjectMapper objectMapper){  //It’s a nested class inside ChatClient andar hai
     this.chatClient = builder.build();
     this.objectMapper = objectMapper;
}

    public TripPlanResponse getPlan(RequestPlan p){

if(p.getStartDate().isAfter(p.getEndDate())){
    throw  new RuntimeException("start date cannot be after end date ");

}
        String prompt = """
                Plan a trip using this user request:

                Destination: %s
                Start date: %s
                End date: %s
                Total budget: %.2f

                Return ONLY valid JSON in this exact structure:

                {
                  "destination": "same destination from request",
                  "startDate": "same start date from request",
                  "endDate": "same end date from request",
                  "budget": 0,
                  "days": [
                    {
                      "dayNumber": 1,
                      "title": "Arrival and local sightseeing",
                      "activities": [
                        "Activity 1",
                        "Activity 2"
                      ]
                    }
                  ],
                  "hotelSuggestions": [
                    {
                      "name": "Hotel name",
                      "area": "Hotel area",
                      "estimatedPricePerNight": 0,
                      "reason": "Why this hotel is suitable",
                      "bookingTip": "Booking advice",
                      "bookingUrl": ""
                    }
                  ],
                  "budgetBreakdown": {
                    "hotel": 0,
                    "food": 0,
                    "transport": 0,
                    "activities": 0,
                    "total": 0
                  },
                 "foodSuggestions": [
                             { "text": "Full food suggestion sentence", "imageKeyword": "short 2-3 word image search" },
                             { "text": "Full food suggestion sentence", "imageKeyword": "short 2-3 word image search" }
                           ],
                           "transportSuggestions": [
                             { "text": "Full transport suggestion sentence", "imageKeyword": "short 2-3 word image search" },
                             { "text": "Full transport suggestion sentence", "imageKeyword": "short 2-3 word image search" }
                           ],
                  "travelTips": [
                    "Travel tip 1",
                    "Travel tip 2"
                  ]
                }

                Rules:
                Return only valid JSON.
                Do not add markdown.
                Do not add explanation.
                Do not wrap JSON in ```json.
                Use the exact same JSON field names.
                Use the user's destination, dates, and budget in the JSON.
                Make budgetBreakdown.total equal to the user's total budget.
                Make bookingUrl a plain Google search URL for booking that hotel
                
                 For foodSuggestions imageKeyword: use the dish name only, example: "Misal Pav food", "Shrewsbury biscuits".
                        For transportSuggestions imageKeyword: use vehicle type only, example: "auto rickshaw", "city bus", "taxi cab"
                .
                """.formatted(
                p.getDestination(),
                p.getStartDate(),
                p.getEndDate(),
                p.getBudget()
        );


        String aiJson = chatClient.prompt()
                .user(prompt)
                .call()
                .content();
        if (aiJson != null && ! aiJson.isBlank()) {
            aiJson = aiJson.replace("```json", "")
                    .replace("```", "")
                    .trim();
        }


              try{
                  return objectMapper.readValue(aiJson,TripPlanResponse.class);
              }
              catch (JsonProcessingException e){
                  throw new RuntimeException("Ai return invalid json" + aiJson,e);
              }
    }

    }

