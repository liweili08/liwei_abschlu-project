package com.example.backend.controller;

import com.example.backend.model.MathBasic;
import com.example.backend.model.MathTheme;
import com.example.backend.service.ThemeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ThemeController {
    private final ThemeService themeService;

    public ThemeController(ThemeService themeService) {
        this.themeService = themeService;
    }

    //************
    @GetMapping("theme")
    public List<MathTheme> getAllTheme() {
        return themeService.getAllTheme();
    }
    //

}
