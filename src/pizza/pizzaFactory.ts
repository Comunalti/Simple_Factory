import { Ingrediente } from "./ingrediente";
import { Receita } from "./receita";
import { Pizza } from "./pizza"; // Add this line to import Pizza

export class PizzaFactory {

    public livro_de_receita: { [key: string]: Receita };

    constructor(livro_de_receita: { [key: string]: Receita }) {
        this.livro_de_receita = livro_de_receita;
    }

    public criarPizza(nome_do_dono: string,sabor: string): Pizza | null {
        const receita = this.livro_de_receita[sabor];
        if (receita) {
            return new Pizza(`${receita.nome} do ${nome_do_dono}`, receita.preco, receita.ingredientes.map((ingrediente) => new Ingrediente(ingrediente.nome, ingrediente.quantidade, ingrediente.descricao)));
        }
        return null;
    }
}
