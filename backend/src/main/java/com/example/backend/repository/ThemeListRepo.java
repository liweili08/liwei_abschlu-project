package com.example.backend.repository;

import com.example.backend.model.MathTheme;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThemeListRepo extends MongoRepository<MathTheme,String> {
}
