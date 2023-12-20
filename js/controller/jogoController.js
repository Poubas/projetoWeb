class JogoController {
  constructor() {
    this.jogos = [];
  }

  // Create operation
  createJogo(jogo) {
    this.jogos.push(jogo);
  }

  // Read operation
  getJogoById(id) {
    return this.jogos.find(jogo => jogo.id === id);
  }

  getAllJogos() {
    return this.jogos;
  }

  // Update operation
  updateJogo(id, updatedJogo) {
    const jogoIndex = this.jogos.findIndex(jogo => jogo.id === id);
    if (jogoIndex !== -1) {
      this.jogos[jogoIndex] = updatedJogo;
    }
  }

  // Delete operation
  deleteJogo(id) {
    this.jogos = this.jogos.filter(jogo => jogo.id !== id);
  }
}
