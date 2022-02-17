package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document("themes")
public class MathTheme {
    @Id
    String id;
    String themeName;
    List<MathBasic> basicList;
    List<MathExample> exampleList;
    List<MathHomework> homeworkList;

}
