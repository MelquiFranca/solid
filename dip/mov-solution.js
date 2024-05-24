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
     * Agora eu dependo de uma abstração que funciona como uma interface
     * outros tipos de categorias podem ser criados e funcionarão normalmente 
     */
    if(!(category instanceof Category)) throw new Error('Invalid type: must be Category')
    this.#category = category
  }
}
class Category {// Classe Abstrata/Interface que ajuda a remover o acoplamento
  play() {
    throw new Error('Not implemented interface')
  }
}
class DramaCategory extends Category {
  play() {
    console.log('PLAY: DramaCategory')
  }
}
class ComedyCategory extends Category {
  play() {
    console.log('PLAY: ComedyCategory')
  }
}

const movie1 = new Movie()
movie1.setCategory(new ComedyCategory())
movie1.getCategory().play()

const movie2 = new Movie()
movie2.setCategory(new ComedyCategory())
movie2.getCategory().play()