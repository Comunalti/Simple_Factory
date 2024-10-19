# Projeto de Pizzaria - Aplicação de Design Patterns

## Índice
- [Introdução](#introdução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Padrões de Projeto Utilizados](#padrões-de-projeto-utilizados)
  - [Factory Method (Método Fábrica)](#factory-method-método-fábrica)
  - [Herança e Composição](#herança-e-composição)
- [Possíveis Melhorias](#possíveis-melhorias)
- [Boas Práticas](#boas-práticas)
- [Conclusão](#conclusão)

## Introdução

Este projeto é uma simulação de um sistema de pedidos de pizza desenvolvido em TypeScript. Ele demonstra o uso de **Design Patterns** (Padrões de Projeto) para criar um código mais organizado, reutilizável e escalável. O foco principal é exemplificar como aplicar esses padrões em um cenário prático, identificando onde melhorias podem ser implementadas e destacando boas práticas de programação.

## Estrutura do Projeto

O projeto está organizado em vários arquivos que representam diferentes componentes do sistema:

- **pizzaStore.ts**: Classe responsável por gerenciar os pedidos de pizza.
- **ingrediente.ts**: Define a classe base `Ingrediente` e suas subclasses específicas (por exemplo, `Tomate`, `Queijo`).
- **pizza.ts**: Classe `Pizza` que representa a pizza em si.
- **pizzaFactory.ts**: Implementa o padrão Factory para criar instâncias de `Pizza`.
- **receita.ts**: Classe `Receita` que contém a lista de ingredientes e o preço.
- **app.ts**: Ponto de entrada da aplicação que interage com o usuário.
- **listar.sh**: Script para listar conteúdos (não essencial para o entendimento dos padrões de projeto).

## Padrões de Projeto Utilizados

### Factory Method (Método Fábrica)

O **Factory Method** é um padrão de criação que fornece uma interface para criar objetos em uma superclasse, permitindo que as subclasses alterem o tipo de objetos que serão criados.

**Exemplo no projeto:**

A classe `PizzaFactory` é responsável por criar objetos `Pizza` sem expor a lógica de instanciamento ao cliente. Ela utiliza o livro de receitas para construir a pizza solicitada.

```typescript
export class PizzaFactory {
    public livro_de_receita: { [key: string]: Receita };

    constructor(livro_de_receita: { [key: string]: Receita }) {
        this.livro_de_receita = livro_de_receita;
    }

    public criarPizza(nome_do_dono: string, sabor: string): Pizza | null {
        const receita = this.livro_de_receita[sabor];
        if (receita) {
            return new Pizza(
                `${receita.nome} do ${nome_do_dono}`,
                receita.preco,
                receita.ingredientes.map((ingrediente) => new Ingrediente(ingrediente.nome, ingrediente.quantidade, ingrediente.descricao))
            );
        }
        return null;
    }
}
```

### Herança e Composição

O projeto faz uso extensivo de herança para os ingredientes, onde `Tomate`, `Queijo`, `Calabresa`, etc., herdam da classe base `Ingrediente`.

**Exemplo:**

```typescript
export class Ingrediente {
    public nome: string;
    public quantidade: number;
    public descricao: string;

    constructor(nome: string, quantidade: number, descricao: string) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.descricao = descricao;
    }
}

export class Tomate extends Ingrediente {
    constructor(quantidade: number) {
        super('tomate', quantidade, 'fatias de tomate fresco');
    }
}
```

A composição é usada na classe `Pizza`, que contém uma lista de ingredientes.

```typescript
export class Pizza {
    constructor(public name: string, public price: number, public ingredientes: Ingrediente[]) {}

    public ExibeInformacoes() {
        console.log(`${this.name} com preço de R$${this.price} e ingredientes:`);
        this.ingredientes.forEach((ingrediente) => {
            console.log(`- ${ingrediente.quantidade} ${ingrediente.nome} (${ingrediente.descricao})`);
        });
    }
}
```

## Possíveis Melhorias

1. **Implementação do Padrão Observer (Observador):**
   - **Descrição:** Permite que objetos observadores sejam notificados quando o estado de outro objeto muda.
   - **Aplicação:** Notificar o estoque sempre que um ingrediente for utilizado, para atualizar quantidades ou solicitar reposição.

2. **Uso do Padrão Singleton:**
   - **Descrição:** Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.
   - **Aplicação:** Gerenciar uma única instância do estoque de ingredientes ou do sistema de pedidos.

3. **Implementação do Padrão Strategy (Estratégia):**
   - **Descrição:** Permite selecionar algoritmos em tempo de execução.
   - **Aplicação:** Calcular preços de pizzas com diferentes estratégias (por exemplo, promoções, descontos por fidelidade).

4. **Aplicação do Padrão Decorator (Decorador):**
   - **Descrição:** Adiciona comportamento a um objeto dinamicamente.
   - **Aplicação:** Permitir que clientes personalizem pizzas adicionando ou removendo ingredientes extras sem alterar as classes existentes.

5. **Validação de Entradas do Usuário:**
   - **Melhoria:** Adicionar validações para entradas no `app.ts` para evitar erros em tempo de execução.

6. **Modularização e Reutilização de Código:**
   - **Melhoria:** Extrair funções auxiliares e componentes reutilizáveis para melhorar a manutenção e legibilidade do código.

## Boas Práticas

- **Nomes Claros e Descritivos:**
  - Usar nomes que refletem a função ou propósito das classes e métodos facilita a compreensão do código.

- **Separação de Responsabilidades:**
  - Cada classe ou módulo deve ter uma única responsabilidade, seguindo o Princípio da Responsabilidade Única (SRP).

- **Encapsulamento:**
  - Proteger os dados das classes e expor apenas o necessário através de métodos públicos.

- **Comentários e Documentação:**
  - Incluir comentários que expliquem partes complexas do código e manter uma documentação atualizada.

- **Tratamento de Erros:**
  - Implementar blocos de try/catch onde for necessário e fornecer mensagens de erro úteis ao usuário.

- **Uso de Interfaces e Tipagem Estrita:**
  - Aproveitar o sistema de tipos do TypeScript para prevenir erros e melhorar a autocompletação e refatoração.

## Conclusão

Este projeto demonstra de forma prática a aplicação de padrões de projeto para resolver problemas comuns de design de software. A utilização do padrão Factory Method simplifica a criação de objetos complexos e torna o código mais flexível e fácil de manter. Identificar áreas para melhorias e aderir a boas práticas de programação são passos essenciais para o desenvolvimento de software de qualidade.

**Próximos Passos:**

- Implementar as melhorias sugeridas para tornar o sistema mais robusto.
- Explorar outros padrões de projeto que possam se adequar ao contexto da aplicação.
- Adicionar testes unitários para garantir o funcionamento correto do sistema após alterações.

Esperamos que este projeto sirva como um guia útil para entender e aplicar design patterns em seus próprios projetos.