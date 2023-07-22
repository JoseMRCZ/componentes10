import { Component, inject,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pokemon } from './models/pokemon.model';
import {Caracter} from './models/caracter.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'examenAngular';
  pokemons: Pokemon[] = [];
  caracters: Caracter [] = [];
  http = inject(HttpClient);


  changeTitle() {
    this.title = "Primer Proyecto de angular";
  }

  ngOnInit() {

    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1000').subscribe((data: any) => {
      const results = data.results;
      results.forEach((pokemonData: any) => {
        this.http.get<any>(pokemonData.url).subscribe((pokemonDataFull: any) => {
          const pokemon: Pokemon = {
            id: pokemonDataFull.id,
            name: pokemonDataFull.name,
            type: pokemonDataFull.types[0].type.name,
            images: [
              pokemonDataFull.sprites.front_shiny,
              pokemonDataFull.sprites.back_shiny
            ]
          };
          this.pokemons.push(pokemon);
        });
      });
    });
    this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe((data: any) => {
      const results = data.results;
      results.forEach((characterData: any) => {
        this.http.get<any>(characterData.url).subscribe((characterDataFull: any) => {
          const caracter: Caracter = {            
            name: characterDataFull.name,
            species: characterDataFull.species,
            gender: characterDataFull.gender,
            images: characterDataFull.image
          };
          this.caracters.push(caracter);
        });
      });
    });
  }
  
  
}
