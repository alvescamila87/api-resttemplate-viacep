package com.camila.apiresttemplateviacep.controller;

import com.camila.apiresttemplateviacep.dto.CepDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("consulta-cep")
public class CepController {

    @GetMapping("{cep}")
    public CepDTO consultaCep(@PathVariable("cep") String cep) {

        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<CepDTO> responseEntity =
                restTemplate
                        .getForEntity(String.format("http://viacep.com.br/ws/%s/json/", cep), CepDTO.class);

        return responseEntity.getBody();
    }
}
