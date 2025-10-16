package com.hackathon.lyzr.service;

import java.util.List;

import com.hackathon.lyzr.Dto.TimesheetRequestBody;
import com.hackathon.lyzr.model.TimesheetData;

public interface TimesheetService {

  List<TimesheetData> getTimesheets(boolean submitted,String weekStarting, String weekEnding);

  void saveTimesheet(List<TimesheetData> timesheetData);
}
