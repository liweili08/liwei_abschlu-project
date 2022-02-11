package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Homeworks {
    @Id
    String id;
    String toTheme;
    String subtopic;
    String topic;
    boolean result;
    String solution;
}
