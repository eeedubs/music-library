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
             },
  printPlaylists: function () {
    for (var playlist in this.playlists){
      for (var x in this.playlists[playlist])  {
        var id = this.playlists[playlist].id;
        var name = this.playlists[playlist].name;
        var track = this.playlists[playlist].tracks.length;
      }
      if (track === 1){
        console.log(id + ": " + name + " - " + track + " track");
      }
      else {
        console.log(id + ": " + name + " - " + track + " tracks");
      }
    }
  },
  printTracks: function () {
    for (var tracklist in this.tracks){
      for (var y in this.tracks[tracklist]){
        var id = this.tracks[tracklist].id;
        var name = this.tracks[tracklist].name;
        var artist = this.tracks[tracklist].artist;
        var album = this.tracks[tracklist].album;
      }
      console.log(id + ": " + name + " by " + artist + " (" + album + ")");
    }
  },
  printPlaylist: function (playlistId) {
    if (playlistId[0] == "p"){
    // if the first letter of the input is p, search for p tracks
      for (var playlist in this.playlists){
      // for each playlist in /this.laylists
        var id = this.playlists[playlist].id;
        var name = this.playlists[playlist].name;
        var track = this.playlists[playlist].tracks.length;
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
      for (var tracklist in this.tracks){
      // for each track in this.racks
        var id = this.tracks[tracklist].id;
        var name = this.tracks[tracklist].name;
        var artist = this.tracks[tracklist].artist;
        var album = this.tracks[tracklist].album;
        if (playlistId == tracklist){
          console.log(playlistId + ": " + name + " by " + artist + " (" + album + ")");
        }
      }
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
    console.log(this.playlists);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var newId = this.uid(0); // generates random number
    this.tracks[newId] = { "id": newId, "name": name, "artist": artist, "album": album };
    console.log(this.tracks);
  },
  addPlaylist: function (name) {
    var newId = this.uid(0);
    this.playlists[newId] = { "id": newId, "name": name, "tracks": [] };
    console.log(this.playlists);
  },
// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/G

  printSearchResults: function(query) {
    var string = query.toLowerCase();
    // take a string from the query string and convert it all to lowercase
    var tracks = Object.keys(this.tracks);
    // use Object.keys() to obtain the key names within library.tracks (t01, t02, t03)
    for (var tracklist in this.tracks){
      // for each variable in library/tracks (t01, t02, t03)
      var name = this.tracks[tracklist].name.toLowerCase();
      // name equals library/tracks/[tracklist]/name and changes it to lowercase
      var artist = this.tracks[tracklist].artist.toLowerCase();
      // artist equals library/tracks/[tracklist]/artist and changes it to lowercase
      var album = this.tracks[tracklist].album.toLowerCase();
      // album equals this/../[..]/album and changes it to lowercase
      if ((name.search(string) > -1) || (artist.search(string) > -1) || (album.search(string)) > 1){
        // if string variable "name", "artist" or "album" contains the search string,
        // the value will be greater than -1, meaning that it has an array position
        // from 0 to variable.length
        console.log("Track Name: " + name + ", Artist: " + artist + ", Album: " + album);
      }
    }
  }
}

// FUNCTIONS TO IMPLEMENT:
// 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

library.printPlaylists();

// // 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
// // prints a list of all tracks, in the form:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks();

// // 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
// // prints a list of tracks for a given playlist, in the form:
// // p01: Coding Music - 2 tracks
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)

library.printPlaylist("p01");
library.printPlaylist("t01");
library.printPlaylist("t02");

// // 444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// // adds an existing track to an existing playlist

library.addTrackToPlaylist("t01", "p02");

// // 555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
// // generates a unique id
// // (use this for addTrack and addPlaylist)

// // 666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
// // adds a track to the library

library.addTrack("Temperature", "Sean Paul", "The Trinity");

// // 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// // adds a playlist to the library

library.addPlaylist("HAAAAAAM");
console.log("\n\n\n");
// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

library.printSearchResults("paul");
