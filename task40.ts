interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
      artist,
      title,
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  

  const album1 = makeAlbum("Taylor Swift", "Fearless");
  const album2 = makeAlbum("Ed Sheeran", "Divide", 16); 
  const album3 = makeAlbum("Adele", "21");
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  