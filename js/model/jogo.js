class jogo {
    constructor(id, nome, genero, ano, preco) {
        this.id = id;
        this.nome = nome;
        this.desenvolvedor = desenvolvedor;
        this.horas = horas;
        this.preco = preco;
        this.rendimento = this.rendimento;
    }

    // Setter and Getter for id
    set id(value) {
        if (value >= 0) this._id = value;
        else {
            throw new Error("Informe ids maiores que zero!!");
        }
    }
    get id() {
        return this._id;
    }

    // Setter and Getter for nome
    set nome(value) {
        this._nome = value;
    }
    get nome() {
        return this._nome;
    }

    // Setter and Getter for preco
    set preco(value) {
        this._preco = value;
    }
    get preco() {
        return this._preco;
    }

    // Setter and Getter for rendimento
    set rendimento(value) {
        this._rendimento = value;
    }
    get rendimento() {
        return this._rendimento;
    }

    // Setter and Getter for horas
    set horas(value) {
        this._horas = value;
    }

    get horas() {
        return this._horas;
    }

    // Setter and Getter for desenvolvedor
    set desenvolvedor(value) {
        this._desenvolvedor = value;
    }
    get desenvolvedor() {
        return this._desenvolvedor;
    }
}
