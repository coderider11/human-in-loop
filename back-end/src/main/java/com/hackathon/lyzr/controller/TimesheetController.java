package com.hackathon.lyzr.controller;

import java.util.List;

import com.hackathon.lyzr.Dto.TimesheetRequestBody;
import com.hackathon.lyzr.model.TimesheetData;
import com.hackathon.lyzr.service.TimesheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/timesheets")
@CrossOrigin(origins = "http://localhost:3000")
public class TimesheetController {

  @Autowired
  TimesheetService timesheetService;

  @GetMapping
  public List<TimesheetData> getTimesheets( @RequestParam boolean submitted,
                                            @RequestParam String weekStarting,
                                            @RequestParam String weekEnding) {
    return timesheetService.getTimesheets(submitted, weekStarting, weekEnding);
  }

  @PostMapping
  public void saveTimesheet(@RequestBody List<TimesheetData> timesheetData) {
    timesheetService.saveTimesheet(timesheetData);
  }
}
