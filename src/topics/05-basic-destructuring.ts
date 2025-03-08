interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: '25 years',
  details: {
    author: 'Green',
    year: 2015,
  }
}

const {
  song: anotherSong,
  songDuration: duration,
  details: { author },
} = audioPlayer;

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);

const [, , trunks = 'not found'] = ['Goku', 'Vegeta']

console.log('Personaje 3:', trunks);
