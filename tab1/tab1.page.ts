import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Harry Potter O Prisioneiro de Azkaban',
      lancamento: '04/07/2004 (BR)',
      duracao: '2h22m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1HdMUghqlgOIvbsU9ZtO40IPRzl.jpg',
      generos: ['Aventura', 'Fantasia', 'Magia'],
      pagina: '/avengers',
      favorito: false
    },{
      nome: 'Capitão América 2: O Soldado Invernal',
      lancamento: '10/04/2014 (BR)',
      duracao: '2h16m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nGA8dCXXVPPRaEjcbEyweUhHCAY.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      pagina: '/Harry Potter',
      favorito: false
    },
    {
      nome: 'Diario da Princesa',
      lancamento: '18/01/2002 (BR)',
      duracao: '1h55m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lT45oWEZVntdoibp4oEXE4ngTTa.jpg',
      generos: ['Comédia', 'Familia','Romance'],
      pagina: '/Disney',
      favorito: false
    }
  ];

}


