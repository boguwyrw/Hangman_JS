package pl.home.hangman.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HangmanController {

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String hangman(){
        return "hangman";
    }

}
