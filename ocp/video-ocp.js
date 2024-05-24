// Classe sem aplicar o princípio OCP
class Video {
  calculaInteresse() {
    throw new Error('classe Video')
  }
}

class Movie extends Video {
  calculaInteresse() {
    console.log('calcula interesse baseado em filme')
  }
}

class TVShow extends Video {
  calculaInteresse() {
    console.log('calcula interesse baseado em serie ')
  }
}