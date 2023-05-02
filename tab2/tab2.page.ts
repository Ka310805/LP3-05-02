import { ISerie } from './../model/ISerie';
import { Component } from '@angular/core';
@Component({

selector: 'app-tab2',
templateUrl: 'tab2.page.html',
styleUrls: ['tab2.page.scss']

})

export class Tab2Page {

  constructor() {}
  listaSerie: ISerie[] = [

 {
 nome: 'Pretty Little Liars (2010)',
lancamento: '08/06/2010',
 duracao: '41m',
 classificacao: 8,
 cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lntOFDrvVPBAULcrE8NoUlExa11.jpg',
 generos: ['Drama', 'Mistério'],
 pagina: '/P-L-L',
 favorito: false

 },

 {
 nome: 'Friends (1994)',
 lancamento: '22/07/1994 (BR)',
  duracao: '25m',
 classificacao: 9,
 cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f496cm9enuEsZkSPzCwnTESEK5s.jpg',
 generos: ['Comédia', 'Drama',],
 pagina: '/Warner',
 favorito: false

 },

 {
 nome: 'HeartStopper (2022)',
 lancamento: '22/04/2022 (BR)',
 duracao: '30m',
 classificacao: 9,
 cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gm2Dvt7GB5XuJgtHkfEy1KYRZw4.jpg',
 generos: ['Drama',],
 pagina: '/Netflix',
 favorito: false

 },

 {
 nome: 'Mandalorian (2019)',
 lancamento: '12/11/2019 (BR)',
  duracao: '40m',
 classificacao: 9,
 cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg',
 generos: ['Sci-Fi & Fantasy', 'Action & Adventure', 'Drama'],
 pagina: '/Disney',
 favorito: false
},

 {
 nome: 'Drive to Survive (2019)',
 lancamento: '08/03/2019 (BR)',
 duracao: '38m',
 classificacao: 8,
 cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xL0JWV3hVCSLmX0OmMaJB65OG27.jpg',
 generos: ['Corrida', 'Documentario', 'Esporte'],
 pagina: '/Netflix',
 favorito: false

    }
 ];

}
