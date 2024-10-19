import { Ingrediente } from './ingrediente';

export class Receita{
    public ingredientes: Ingrediente[];
    public preco: number;
    public nome: string
    constructor(nome: string, preco: number,ingredientes: Ingrediente[]){
        this.ingredientes = ingredientes;
        this.preco = preco;
        this.nome = nome;
    }
}
