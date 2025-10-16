package com.hackathon.lyzr.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimesheetRequestBody {

  private String emailId;
  private boolean submitted;
  private String weekStarting;
  private String weekEnding;
}
