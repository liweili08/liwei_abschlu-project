package com.example.backend.service;

import com.example.backend.model.MathBasic;
import com.example.backend.model.MathExample;
import com.example.backend.model.MathHomework;
import com.example.backend.model.MathTheme;
import com.example.backend.repository.ThemeListRepo;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertIterableEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class ThemeServiceTest {
    private final ThemeListRepo themeListRepo = mock(ThemeListRepo.class);
    private final ThemeService themeService = new ThemeService(themeListRepo);

    @Test
    void getAllThemeEmpty() {
        List<MathTheme> expected = new ArrayList<>();

        when(themeListRepo.findAll()).thenReturn(expected);
        List<MathTheme> result = themeService.getAllTheme();
        assertIterableEquals(result, expected);
    }

    @Test
    void getAllThemeWithContent() {
        MathBasic basic1 = new MathBasic("basic1_Id", "basic1_Name", "basic1_content");
        MathBasic basic2 = new MathBasic("basic2_Id", "basic2_Name", "basic2_content");
        MathExample example1 = new MathExample("exa1_Id", "exa1_subtopic", "exa1_exa");
        MathExample example2 = new MathExample("exa2_Id", "exa2_subtopic", "exa2_exa");
        MathHomework homework1 = new MathHomework("hw1_Id", "hw1_subtopic", "hw1_topic", true, "hw1_solution");
        MathHomework homework2 = new MathHomework("hw2_Id", "hw2_subtopic", "hw2_topic", false, "hw2_solution");

        List<MathBasic> basicListTest = new ArrayList<>();
        basicListTest.add(basic1);
        basicListTest.add(basic2);

        List<MathExample> exampleListTest = new ArrayList<>();
        exampleListTest.add(example1);
        exampleListTest.add(example2);

        List<MathHomework> homeworkListTest = new ArrayList<>();
        homeworkListTest.add(homework1);
        homeworkListTest.add(homework2);

        MathTheme theme1 = MathTheme.builder()
                .id("testId")
                .themeName("testThemeName")
                .basicList(basicListTest)
                .exampleList(exampleListTest)
                .homeworkList(homeworkListTest)
                .build();

        List<MathTheme> mathThemeListTest = new ArrayList<>();
        mathThemeListTest.add(theme1);

        when(themeListRepo.findAll()).thenReturn(mathThemeListTest);
        assertThat(mathThemeListTest, Matchers.is(mathThemeListTest));
    }
}