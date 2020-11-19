package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexView {

    private String indexStr = "index";

    @RequestMapping(value = "/index")
    public String index() {
        return indexStr;
    }

    @RequestMapping(value = "/add")
    public String addView() {
        return indexStr;
    }

    @RequestMapping(value = "/product/show_all")
    public String productAllView() {
        return indexStr;
    }

    @RequestMapping(value = "/index.html")
    public String indexHtml() {
        return indexStr;
    }

    @RequestMapping(value = "/")
    public String empty() {
        return indexStr;
    }
}