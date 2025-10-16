package com.hackathon.lyzr.repository;
import java.util.List;
import java.util.Optional;
import com.hackathon.lyzr.model.TimesheetData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimesheetRepo extends MongoRepository<TimesheetData,String> {

  Optional<List<TimesheetData>> findByWeekStartingAndWeekEndingAndSubmitted(String start, String end, boolean isSubmitted);

  Optional<TimesheetData> findByEmailId(String emailId);
}
