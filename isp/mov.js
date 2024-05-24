class Movie {//Interface segregada
  play() {
    throw new Error('Not implemented interface')
  }
}
class AudioControl {//Interface segregada
  increaseVolume() {
    throw new Error('Not implemented interface')
  }
}
class MovieWithAudio extends AudioControl {//Interface

}
class TheLionKing extends MovieWithAudio {
  play() {
    console.log('Play TheLionKing')
  }
  increaseVolume() {
    console.log('IncreaseVolume TheLionKing')
  }
}

class ModernTimes extends Movie { //Agora pode ser um Movie, pois o controle de Audio foi segregado em outra interface
  play() {
    console.log('Play ModernTimes')
  }
}

const movie = new TheLionKing()
movie.play()
movie.increaseVolume()

const movie2 = new ModernTimes()
movie2.play()