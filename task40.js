function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum("Taylor Swift", "Fearless");
var album2 = makeAlbum("Ed Sheeran", "Divide", 16);
var album3 = makeAlbum("Adele", "21");
console.log(album1);
console.log(album2);
console.log(album3);
