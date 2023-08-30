const songLists = [
    {
        title: "Kita Ke Sana",
        artist: "Hindia",
        genre: "Pop",
        duration: "4:42"
    },
    {
        title: "Ribuan Memori",
        artist: "Lomba_Sihir",
        genre: "Pop",
        duration: "4:14"
    },
    {
        title: "Dalam Hitungan",
        artist: "Feast",
        genre: "Rock",
        duration: "4:04"
    },
    {
        title: "Nirrrlaba",
        artist: "Lomba_Sihir",
        genre: "Pop",
        duration: "3:41"
    },
    {
        title: "Berita Kehilangan",
        artist: "Feast",
        genre: "Rock",
        duration: "4:19"
    },
    {
        title: "Mungkin Takut Perubahan",
        artist: "Lomba_Sihir",
        genre: "Pop",
        duration: "3:09"
    },
    {
        title: "Senin Toko Tutup",
        artist: "Feast",
        genre: "Rock",
        duration: "3:33"
    },
    {
        title: "Be Okay Again Today",
        artist: "Pamungkas",
        genre: "Pop",
        duration: "6:22"
    },
    {
        title: "Riding The Wave",
        artist: "Pamungkas",
        genre: "Pop",
        duration: "5:44"
    },
    {
        title: "Begin Again",
        artist: "Pamungkas",
        genre: "Pop",
        duration: "4:33"
    },
    {
        title: "Purple Sigh",
        artist: "Pamungkas",
        genre: "Pop",
        duration: "3:41"
    },
    {
        title: "Fireflies",
        artist: "Prince_Husein",
        genre: "Pop",
        duration: "4:26"
    },
    {
        title: "Facing Phases",
        artist: "Prince_Husein",
        genre: "Pop",
        duration: "3:33"
    },
    {
        title: "Peole Pleaser",
        artist: "Prince_Husein",
        genre: "Pop",
        duration: "4:15"
    },
    {
        title: "Pesisir",
        artist: "Hindia",
        genre: "Pop",
        duration: "4:26"
    },
    {
        title: "Alexandra",
        artist: "Hindia",
        genre: "Pop",
        duration: "4:48"
    },
    {
        title: "Evaluasi",
        artist: "Hindia",
        genre: "Pop",
        duration: "3:14"
    },
    {
        title: "Hati dan Paru Paru",
        artist: "Lomba_Sihir",
        genre: "Pop",
        duration: "4:04"
    },
    {
        title: "Bintang Massa Aksi",
        artist: "Feast",
        genre: "Rock",
        duration: "3:34"
    }
];

// Function to group songs based on artists
function groupSongsByArtist(songs) {
    const songsByArtist = {};
  
    songs.forEach(song => {
      if (!songsByArtist[song.artist]) {
        songsByArtist[song.artist] = [];
      }
      songsByArtist[song.artist].push(song);
    });
  
    return songsByArtist;
}
  
// Function to group songs based on genre
function groupSongsByGenre(songs) {
    const songsByGenre = {};
  
    songs.forEach(song => {
      if (!songsByGenre[song.genre]) {
        songsByGenre[song.genre] = [];
      }
      songsByGenre[song.genre].push(song);
    });
  
    return songsByGenre;
}

function groupSongsToPlay(songs) {
    const availableSongs = [...songs];
    const selectedSongs = [];
    let totalDuration = 0; 

    songs.forEach(() => {
        const randomIndex = Math.floor(Math.random() * availableSongs.length);
        const randomSong = availableSongs[randomIndex];

        if (totalDuration + duration(randomSong.duration) < 3600) {
            selectedSongs.push(randomSong);
            totalDuration += duration(randomSong.duration);
        }   
    })
    console.log("Duration: " + totalDuration);
    return selectedSongs;
}

function duration(duration) {
    duration = duration.split(':')
    //console.log(duration);
    duration = duration[0]*60 + duration[1]*1;
    //console.log(duration);
    return duration
}
  

console.log("Songs group based on artist: ", groupSongsByArtist(songLists));
console.log("\n------------------------------");
console.log("\nSongs group based on genre: ", groupSongsByGenre(songLists));
console.log("\n------------------------------");
console.log("\nSelected Songs Less Than One Hour:", groupSongsToPlay(songLists));