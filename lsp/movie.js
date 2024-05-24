class Movies {
  play() {
    console.log('PLAY')
  }
  increaseVolume() {
    console.log('Alterou volume')
  }
}

class TheLionKing extends Movies {

}

class ModernTimes extends Movies { //não deveria ser um Movies
  // Este filme não possuí a opção de increaseVolume então não pode extender de movies
}

const movie = new ModernTimes()
movie.increaseVolume()