class Movie {
  #name
  #category
  getName() {
    return this.#name
  }
  setName(name) {
    this.#name = name
  }
  getCategory() {
    return this.#category
  }
  setCategory(category) {
    /**
     * Laço de dependência de Implementação criado
     * Não será possível usar outro tipo de categoria posteriomente
     * MUITO ACOPLAMENTO
     */
    if(!(category instanceof DramaCategory)) throw new Error('Invalid type: must be DramaCategory')
    this.#category = category
  }
}

class DramaCategory {
  play() {
    console.log('PLAY: DramaCategory')
  }
}
class ComedyCategory {
  play() {
    console.log('PLAY: ComedyCategory')
  }
}

const movie1 = new Movie()
movie1.setCategory(new DramaCategory())
movie1.getCategory().play()

const movie2 = new Movie()
movie2.setCategory(new ComedyCategory()) // RETORNARÁ ERRO
movie2.getCategory().play()