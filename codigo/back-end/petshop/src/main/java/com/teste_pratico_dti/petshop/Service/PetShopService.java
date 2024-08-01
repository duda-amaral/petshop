package com.teste_pratico_dti.petshop.Service;

import com.teste_pratico_dti.petshop.entity.PetShop;
import com.teste_pratico_dti.petshop.repository.PetShopRepository;
import com.teste_pratico_dti.petshop.response.PetShopResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.Calendar;
import java.util.List;
import java.util.Date;

@Service
public class PetShopService {

    @Autowired
    private PetShopRepository petshopRepository;

    public PetShopResponse calcularMelhorPetshop(String data, int quantCaesPequenos, int quantCaesGrandes) {

        List<PetShop> petshops = petshopRepository.findAll();

        PetShop melhorPetshop = null;
        double menorPreco = Double.MAX_VALUE;

        for (PetShop petshop : petshops) {
            double precoTotal = calcularPrecoTotal(petshop, data, quantCaesPequenos, quantCaesGrandes);

            if (precoTotal < menorPreco || (precoTotal == menorPreco && petshop.getDistancia() < (melhorPetshop != null ? melhorPetshop.getDistancia() : Double.MAX_VALUE))) {
                melhorPetshop = petshop;
                menorPreco = precoTotal;
            }
        }

        return new PetShopResponse(melhorPetshop.getNome(), String.format("R$%.2f", menorPreco));
    }

    private double calcularPrecoTotal(PetShop petshop, String data, int quantidadeCaesPequenos, int quantidadeCaesGrandes) {
        double precoTotal = 0.0;
        boolean fimDeSemana = isFimDeSemana(data);

        if (fimDeSemana) {
            precoTotal = quantidadeCaesPequenos * petshop.getPrecoCaoPequenoFimSemana() + quantidadeCaesGrandes * petshop.getPrecoCaoGrandeFimSemana();
        } else {
            precoTotal = quantidadeCaesPequenos * petshop.getPrecoCaoPequenoDiaUtil() + quantidadeCaesGrandes * petshop.getPrecoCaoGrandeDiaUtil();
        }

        return precoTotal;
    }

    private boolean isFimDeSemana(String data) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
            Date date = sdf.parse(data);
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(date);
            int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK);
            return dayOfWeek == Calendar.SATURDAY || dayOfWeek == Calendar.SUNDAY;
        } catch (ParseException e) {
            e.printStackTrace();
            return false;
        }
    }
}