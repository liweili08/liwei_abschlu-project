package com.example.backend;

import com.example.backend.model.MathTheme;
import com.example.backend.repository.ThemeListRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

//    @Autowired
//    ThemeListRepo themeListRepo;
//
//    public void run(String... args) throws Exception {
//        MathTheme theme1= MathTheme.builder().
//                id("test3").themeName("TestTest").build();
//        themeListRepo.insert(theme1);
//    }
//
//    /*
//    {id:"test1",
//        themeName:"Bla",
//        basicList:[{id:"b1",name:"Defnition",content:"XXXXXXXYYYYY"},
//                   {id:"b2",name:"Defnition2",content:"WWWWWW"}],
//        exampleList:[{id:"ex1",subtopic:"Negation",example:"123123123"},
//                     {id:"ex2",subtopic:"Konjunktion",example:"456456456"}],
//        homeworkList:[{id:"hw1",subtopic:"Aussagen",topic:"Beurteilen Sie...",
//                        result:true,solution:"Lösung: yyyy"},
//                      {id:"hw2",subtopic:"Negation_und_Äquivalenz",
//                          topic:"\\textbf{Aufgabe 1:}\\text{ Gegeben seien die falsche Aussage } A \\text{ und die wahre Aussage B. Beurteilen Sie den Wahrheitsgehalt der Aussage } A\\vee(\\neg B).",
//                              // "Gegeben seien die falsche Aussage <TeX>{\"A\"}</TeX> und die wahre Aussage <TeX>{\"B\"}</TeX>.\n" +
//                              // "Beurteilen Sie den Wahrheitsgehalt der Aussage <TeX>{\"A\\\\vee(\\\\neg B)\"}</TeX>.",
//                        result:false,solution:"Lösung: xxxx"}]}
//    */
}

