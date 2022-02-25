package com.example.backend.controller;

import com.example.backend.model.MathTheme;
import com.example.backend.repository.ThemeListRepo;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.reactive.function.client.WebClient;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertIterableEquals;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ThemeControllerTest {

    @LocalServerPort
    private int port;

    @MockBean
    private ThemeListRepo themeListRepo;

    private final WebClient webTestClient = WebClient.create();

    @Test
    void getAllThemeEmpty() {
        List<MathTheme> expected = new ArrayList<>();

        when(themeListRepo.findAll()).thenReturn(expected);
        ResponseEntity<MathTheme[]> result = webTestClient.get()
                .uri("http://localhost:" + port + "/api/theme")
                .retrieve()
                .toEntity(MathTheme[].class)
                .block();
        assertIterableEquals(Arrays.asList(result.getBody()), expected);
    }

    @Test
    void getAllThemeWithContent() {
        List<MathTheme> expected = List.of(
                new MathTheme("1", "Def1", List.of(), List.of(), List.of()),
                new MathTheme("2", "Def2", List.of(), List.of(), List.of()),
                new MathTheme("3", "Def3", List.of(), List.of(), List.of())
        );

        when(themeListRepo.findAll()).thenReturn(expected);
        ResponseEntity<MathTheme[]> result = webTestClient.get()
                .uri("http://localhost:" + port + "/api/theme")
                .retrieve()
                .toEntity(MathTheme[].class)
                .block();
        assertIterableEquals(Arrays.asList(result.getBody()), expected);
    }
}