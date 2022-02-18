package com.example.backend.controller;

import com.example.backend.model.MathTheme;
import com.example.backend.service.ThemeService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertIterableEquals;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ThemeControllerTest {

    @MockBean
    private ThemeService themeService;


    @Test
    void getAllThemeEmpty() {
        ThemeController themeController = new ThemeController(themeService);

        List<MathTheme> expected = new ArrayList<>();

        when(themeService.getAllTheme()).thenReturn(expected);
        List<MathTheme> result = themeController.getAllTheme();
        assertIterableEquals(result, expected);

    }

    @Test
    void getAllThemeWithContent() {
        ThemeController themeController = new ThemeController(themeService);

        List<MathTheme> expected = List.of(
                new MathTheme("1", "Def1", List.of(), List.of(), List.of()),
                new MathTheme("2", "Def2", List.of(), List.of(), List.of()),
                new MathTheme("3", "Def3", List.of(), List.of(), List.of())
        );

        when(themeService.getAllTheme()).thenReturn(expected);
        List<MathTheme> result = themeController.getAllTheme();
        assertIterableEquals(result, expected);

    }


}