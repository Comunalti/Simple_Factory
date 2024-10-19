import { PizzaFactory } from './pizzaFactory';

export class PizzaStore {
    protected pizzaFactory: PizzaFactory;
    protected porcentagem_de_lucro: number;
    protected taxa_de_entrega_por_distancia: number;
    protected nome_do_dono: string;

    constructor(nome_do_dono: string ,pizzaFactory: PizzaFactory, porcentagem_de_lucro: number, taxa_de_entrega_por_distancia: number) {
        this.nome_do_dono = nome_do_dono;
        this.pizzaFactory = pizzaFactory;
        this.porcentagem_de_lucro = porcentagem_de_lucro;
        this.taxa_de_entrega_por_distancia = taxa_de_entrega_por_distancia;
    }

    public pedirPizza(sabor: string, distancia_de_entrega: number) {
        const pizza = this.pizzaFactory.criarPizza(this.nome_do_dono,sabor);

        if (!pizza) {
            console.log(`Desculpe, não temos a pizza de ${sabor}`);
            return;
        }

        const preco_total = pizza.price + (pizza.price * this.porcentagem_de_lucro)+ (distancia_de_entrega * this.taxa_de_entrega_por_distancia);
        console.log(`${pizza.name} pedida por R$${preco_total}`);
        return pizza;    
    }
}
