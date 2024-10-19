import { Ingrediente } from "./ingrediente";

export class Pizza {
  [x: string]: any;
  constructor(public name: string, public price: number,public ingredientes: Ingrediente[]) {}

  public ExibeInformacoes() {
    console.log(`${this.name} com preço de R$${this.price} e ingredientes:`);
    this.ingredientes.forEach((ingrediente) => {
      console.log(`- ${ingrediente.quantidade} ${ingrediente.nome} (${ingrediente.descricao})`);
    });
  }
}