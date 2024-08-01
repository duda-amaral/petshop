package com.teste_pratico_dti.petshop.controller;

import com.teste_pratico_dti.petshop.Service.PetShopService;
import com.teste_pratico_dti.petshop.response.PetShopResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PetShopController {

    @Autowired
    private PetShopService petshopService;

    @GetMapping("/melhor-petshop")
    public ResponseEntity<PetShopResponse> getMelhorPetshop(
            @RequestParam String data,
            @RequestParam int quantidadeCaesPequenos,
            @RequestParam int quantidadeCaesGrandes) {

        PetShopResponse response = petshopService.calcularMelhorPetshop(data, quantidadeCaesPequenos, quantidadeCaesGrandes);

        return ResponseEntity.ok(response);
    }
}