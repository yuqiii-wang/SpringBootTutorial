package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexView {

    @RequestMapping(value = "/index")
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/index.html")
    public String indexHtml() {
        return "index";
    }

    @RequestMapping(value = "/")
    public String empty() {
        return "index";
    }
}