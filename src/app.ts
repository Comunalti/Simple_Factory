import { PizzaFactory } from './pizza/pizzaFactory';
import {PizzaStore} from './pizza/pizzaStore';
import { Receita } from './pizza/receita';
import { Ingrediente, Massa, Tomate, Calabresa,Molho,Queijo,cebola,ovo, Bacon } from './pizza/ingrediente';
import { console } from 'inspector';
import * as readline from 'readline';



const livroDeReceitasDoBrancas = {
    "marguerita": new Receita('Pizza quadrada de Marguerita', 20, [
        new Massa(1),
        new Tomate(2),
        new Queijo(3),
    ]),
    "calabresa": new Receita('Pizza quadrada de Calabresa', 25, [
        new Massa(1),
        new Tomate(2),
        new Queijo(3),
        new Calabresa(3),
    ]),
    "portuguesa": new Receita('Pizza quadrada de Portuguesa', 30, [
        new Massa(1),
        new Tomate(2),
        new Queijo(3),
        new Calabresa(2),
        new cebola(5),
        new ovo(2),
    ]),

};

const livroDeReceitasNormal = {
    "marguerita": new Receita('Pizza redonda de Marguerita', 20, [
        new Massa(1),
        new Tomate(1),
        new Queijo(2),
    ]),
    "calabresa": new Receita('Pizza redonda de Calabresa', 25, [
        new Massa(1),
        new Tomate(1),
        new Queijo(1),
        new Calabresa(1),
    ]),
    "bacon": new Receita('Pizza redonda de Bacon', 30, [
        new Massa(1),
        new Tomate(1),
        new Queijo(2),
        new Bacon(4),
    ]),
}

const pizzariaDoBrancas = new PizzaStore("branco",new PizzaFactory(livroDeReceitasDoBrancas),0.5,0.3);


const pizzariaNormal = new PizzaStore("professor bossini",new PizzaFactory(livroDeReceitasNormal),0.2,0.4);

const lerEntrada = (prompt: string): Promise<string> => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(prompt, (resposta) => {
            rl.close();
            resolve(resposta);
        });
    });
};

// Função principal de interação
async function interagirComUsuario() {
    while (true) {
        const pizzariaEscolhida = await lerEntrada('Qual pizzaria você quer pedir (1 - Brancas, 2 - Normal)? ');
        const pizzaria = pizzariaEscolhida === '1' ? pizzariaDoBrancas : pizzariaNormal;

        const distanciaStr = await lerEntrada('Quantos km de distância da pizzaria? ');
        const distancia = parseFloat(distanciaStr);

        const sabor = await lerEntrada('Qual o sabor da pizza que você quer? ');
        const pizza = pizzaria.pedirPizza(sabor, distancia);

        const opcao = await lerEntrada('Você quer reiniciar (1) ou encerrar (2)? ');
        if (opcao !== '1') break;
    }
}

// Iniciar interação com o usuário
interagirComUsuario();
