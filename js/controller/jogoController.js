class jogoController {

    inicializaElementos() {
        this.titulo = document.querySelector("#inpTitulo");
        this.desenvolvedor = document.querySelector("#inpDesenvolvedor");
        this.preco = document.querySelector("#inpPreco");
        this.horas = document.querySelector("#inpHoras");
        this.tableJogo = document.querySelector("#tblJogo");
        this.btnSubmit = document.querySelector("#btnSubmit");
        this.id = document.querySelector("#inpId");
    }

    excluir(jogoId) {
        if (jogoId) {
            if (confirm('Deseja excluir?')) {
                this.jogos = this.jogos.filter(jogo => jogo.id != jogoId);
            }
        }
        this.exibir();
    }

    alterar(jogoId) {
        if (jogoId) {
            let jogo = this.jogos.find(jogo => jogo.id == jogoId);

            if (jogo) {
                this.id.value = jogo.id;
                this.titulo.value = jogo.titulo;
                this.desenvolvedor.value = jogo.desenvolvedor;
                this.preco.value = jogo.preco;
                this.horas.value = jogo.horas;
            }
        }
    }

    salvar(jogoId, titulo, desenvolvedor, preco, horas, rendimento) {
        let jogo;
        if (jogoId == 0) {
            jogo = { id: this.jogos.length + 1, titulo, desenvolvedor, preco, horas, rendimento };
            this.jogos.push(jogo);
        } else {
            jogo = this.jogos.find(j => j.id == jogoId);
            if (!jogo) {
                jogo = { id: this.jogos.length + 1, titulo, desenvolvedor, preco, horas, rendimento };
                this.jogos.push(jogo);
            } else {
                jogo.titulo = titulo;
                jogo.desenvolvedor = desenvolvedor;
                jogo.preco = preco;
                jogo.horas = horas;
                jogo.rendimento = rendimento;
            }
        }

        this.exibir();
    }

    exibir() {
        let linhas = "";
        this.jogos.forEach(jogo => {
            linhas += `
            <tr>
            <td>${jogo.id}</td>
            <td>${jogo.titulo}</td>
            <td>${jogo.desenvolvedor}</td>
            <td>${jogo.preco}</td>
            <td>${jogo.horas}</td>
            <td>${jogo.rendimento}</td>
            <td>
            <button id="btnAlterar${jogo.id}" class="btn btn-primary btn-db" data-id="${jogo.id}">Alterar</button>
            <button id="btnExcluir${jogo.id}" class="btn btn-danger btn-db" data-id="${jogo.id}">Excluir</button>
            </td>
            </tr>`;
        });

        this.tableJogo.innerHTML = linhas;
        this.eventosDB();
    }

    calcularRendimento(valor, horas) {
        return parseFloat(valor) / parseFloat(horas);
    }

    eventosDB() {
        let self = this;
        this.tableJogo.querySelectorAll('.btn-db').forEach(btn => {
            let id = btn.id.toUpperCase();

            if (id.indexOf('BTNEXCLUIR') != -1) {
                btn.onclick = () => {
                    self.excluir(btn.dataset.id);
                };
            }

            if (id.indexOf('BTNALTERAR') != -1) {
                btn.onclick = () => {
                    self.alterar(btn.dataset.id);
                };
            }
        });
    }

    limpar() {
        this.titulo.value = "";
        this.desenvolvedor.value = "";
        this.preco.value = "";
        this.horas.value = "";
    }

    inicializaEventos() {
        this.btnSubmit.onclick = (event) => {
            event.preventDefault();
            this.salvar(
                this.id.value,
                this.titulo.value,
                this.desenvolvedor.value,
                this.preco.value,
                this.horas.value,
                this.calcularRendimento(this.preco.value, this.horas.value)
            );
            this.exibir();
            this.limpar();
            this.titulo.focus();
        };
    }
    constructor() {
        this.jogos = [];
        this.inicializaElementos();
        this.inicializaEventos();
    }
}
