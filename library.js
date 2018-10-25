var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:
// 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// 1, 2, 3

var printPlaylists = function () {
  for (var playlist in library["playlists"]){
    // /library/playlists/p01 and p02
    for (var x in library["playlists"][playlist]){
      // /id and name and tracks
      var id = library["playlists"][playlist]["id"];
      var name = library["playlists"][playlist]["name"];
      var track = library["playlists"][playlist]["tracks"].length;
    }
    if (track === 1){
      console.log(id + ": " + name + " - " + track + " track");
    }
    else {
    console.log(id + ": " + name + " - " + track + " tracks");
    }
  }
}
printPlaylists();

// 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var tracklist in library["tracks"]){
    for (var y in library["tracks"][tracklist]){
      var id = library["tracks"][tracklist]["id"];
      var name = library["tracks"][tracklist]["name"];
      var artist = library["tracks"][tracklist]["artist"];
      var album = library["tracks"][tracklist]["album"];
    }
    console.log(id + ": " + name + " by " + artist + " (" + album + ")");
  }
}
printTracks();

// 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  if (playlistId[0] == "p"){
    // if the first letter of the input is p, search for p tracks
    for (var playlist in library["playlists"]){
      // for each playlist in /library/playlists
      var id = library["playlists"][playlist]["id"];
      var name = library["playlists"][playlist]["name"];
      var track = library["playlists"][playlist]["tracks"].length;
      if (playlistId == playlist && track == 1){
        console.log(playlistId + ": " + name + " - " + track + " track");
      }
      else if (playlistId == playlist && track !== 1){
        console.log(playlistId + ": " + name + " - " + track + " tracks");
      }
    }
  }
  if (playlistId[0] == "t"){
    // if the first letter of the input is t, search for t tracks
    for (var tracklist in library["tracks"]){
      // for each track in library/tracks
      var id = library["tracks"][tracklist]["id"];
      var name = library["tracks"][tracklist]["name"];
      var artist = library["tracks"][tracklist]["artist"];
      var album = library["tracks"][tracklist]["album"];
      if (playlistId == tracklist){
        console.log(playlistId + ": " + name + " by " + artist + " (" + album + ")");
      }
    }
  }
}
printPlaylist("p01");
printPlaylist("t01");
printPlaylist("t02");

// 444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library["playlists"][playlistId]["tracks"].push(trackId);
  console.log(library["playlists"]["p02"]["tracks"]);
}
addTrackToPlaylist("t01", "p02");


// 555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// 666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
// adds a track to the library

var addTrack = function (name, artist, album) {
  var newId = uid(0); // generates random number
  library["tracks"][newId] = { "id": newId, "name": name, "artist": artist, "album": album };
  console.log(library["tracks"]);
}
addTrack("Temperature", "Sean Paul", "The Trinity");

// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// adds a playlist to the library

var addPlaylist = function (name) {
  var newId = uid(0);
  library["playlists"][newId] = { "id": newId, "name": name, "tracks": [] };
  console.log(library["playlists"]);
}
addPlaylist("HAAAAAAM");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}