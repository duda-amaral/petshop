package com.teste_pratico_dti.petshop.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Table(name = "petshop")
public class PetShop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nome", nullable = false, updatable = true)
    private String nome;

    @Column(name = "distancia", nullable = false, updatable = true)
    private double distancia;

    @Column(name = "preco_cao_pequeno_dia_util", nullable = false, updatable = true)
    private double precoCaoPequenoDiaUtil;

    @Column(name = "preco_cao_grande_dia_util", nullable = false, updatable = true)
    private double precoCaoGrandeDiaUtil;

    @Column(name = "preco_cao_pequeno_fim_semana", nullable = false, updatable = true)
    private double precoCaoPequenoFimSemana;

    @Column(name = "preco_cao_grande_fim_semana", nullable = false, updatable = true)
    private double precoCaoGrandeFimSemana;
}
