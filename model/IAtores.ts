/* eslint-disable eol-last */
export interface IAtores{
  nome: string;
  lancamento: string;
  duracao: string;
  classificacao: number;
  cartaz: string;
  generos: string[];
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
