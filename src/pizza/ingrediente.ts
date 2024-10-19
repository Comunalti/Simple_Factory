export class Ingrediente {
    public nome: string;
    public quantidade: number;
    public descricao: string;

    constructor(nome: string,quantidade: number, descricao: string) {
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

export class Queijo extends Ingrediente {
    constructor(quantidade: number) {
        super('queijo', quantidade, 'queijo mussarela ralado');
    }
}

export class Calabresa extends Ingrediente {
    constructor(quantidade: number) {
        super('calabresa', quantidade, 'calabresa fresca fatiada');
    }
}

export class Massa extends Ingrediente {
    constructor(quantidade: number) {
        super('massa', quantidade, 'massa fresca');
    }
}

export class Molho extends Ingrediente {
    constructor(quantidade: number) {
        super('molho', quantidade, 'molho de tomate');
    }
}

export class cebola extends Ingrediente {
    constructor(quantidade: number) {
        super('cebola', quantidade, 'cebola fresca');
    }
}

export class ovo extends Ingrediente {
    constructor(quantidade: number) {
        super('ovo', quantidade, 'ovo cozido fatiado');
    }
}

export class Bacon extends Ingrediente {
    constructor(quantidade: number) {
        super('bacon', quantidade, 'bacon fatiado');
    }
}