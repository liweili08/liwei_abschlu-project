package com.example.backend.service;

import com.example.backend.model.MathBasic;
import com.example.backend.model.MathTheme;
import com.example.backend.repository.ThemeListRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThemeService {
    private final ThemeListRepo themeListRepo;

    public ThemeService(ThemeListRepo themeListRepo) {
        this.themeListRepo = themeListRepo;
    }

    public List<MathTheme> getAllTheme() {
        return themeListRepo.findAll();
    }

}
