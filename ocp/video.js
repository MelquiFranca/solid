// Classe sem aplicar o princípio OCP
class Video {
  #type
  calculaInteresse() {
    if(this.#type == 'Movie') {
      console.log('calcula interesse baseado em filme')
    } else if (this.#type == 'TVShow') {
      console.log('calcula interesse baseado em serie')
    }
  }
}