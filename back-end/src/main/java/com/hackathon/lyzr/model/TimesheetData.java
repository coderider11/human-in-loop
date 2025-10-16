package com.hackathon.lyzr.model;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "timesheetData")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimesheetData {
  @Id
  private String id;
  private String emailId;
  private boolean submitted;
  private String weekStarting;
  private String weekEnding;
  private int total;
  private Map<String,Integer> hours;
}
