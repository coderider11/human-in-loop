package com.hackathon.lyzr.service;

import java.util.List;

import com.hackathon.lyzr.Dto.TimesheetRequestBody;
import com.hackathon.lyzr.model.TimesheetData;
import com.hackathon.lyzr.repository.TimesheetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TimesheetServiceImpl implements TimesheetService {

  @Autowired
  private TimesheetRepo repo;

  @Override
  public List<TimesheetData> getTimesheets(boolean submitted,String weekStarting, String weekEnding) {
    return repo.findByWeekStartingAndWeekEndingAndSubmitted(weekStarting, weekEnding,submitted).orElse(List.of());
  }

  @Override
  public void saveTimesheet(List<TimesheetData> timesheetData) {
    timesheetData.forEach(data -> {
      var existingData = repo.findByEmailId(data.getEmailId());
      if (existingData.isEmpty()) {
        repo.save(data);
      } else {
        var toUpdate = existingData.get();
        toUpdate.setSubmitted(data.isSubmitted());
        toUpdate.setWeekStarting(data.getWeekStarting());
        toUpdate.setWeekEnding(data.getWeekEnding());
        repo.save(toUpdate);
      }
    });
  }
}
