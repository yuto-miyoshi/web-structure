package com.web_server.backend;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.web_server.backend.model.ApiSampleModel;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/sample")
public class SampleController {

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<ApiSampleModel> getMethodName(@PathVariable Integer id) {
        ApiSampleModel model = new ApiSampleModel(id);
        return ResponseEntity.ok(model);
    }
    
}
