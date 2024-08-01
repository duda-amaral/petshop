package com.teste_pratico_dti.petshop.repository;

import com.teste_pratico_dti.petshop.entity.PetShop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetShopRepository extends JpaRepository<PetShop, Long> {
}
