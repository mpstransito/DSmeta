package com.dvsuperior.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dvsuperior.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}