const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Enough",
      artist: "Fornicras",
      song: "https://firebasestorage.googleapis.com/v0/b/music-7038b.appspot.com/o/Ringtone%2FEnough.mp3?alt=media&token=e4e0c8fa-cb55-42d2-a2ca-4c2e7d3f102a",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-7038b.appspot.com/o/Images%2Fenough.jpg?alt=media&token=64e56904-e622-486a-a221-4418668c4411",
    },
    {
      id: 2,
      favourite: false,
      songName: "Rush",
      artist: "Fornicras",
      song: "https://firebasestorage.googleapis.com/v0/b/music-7038b.appspot.com/o/Ringtone%2FRush.mp3?alt=media&token=6cba8ce7-ddd3-41a9-bf5a-82235a72bab9",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-7038b.appspot.com/o/Images%2Frush.jpg?alt=media&token=c5053e2a-0545-4fa7-9711-08af6e96c829",
    },
    {
      id: 3,
      favourite: false,
      songName: "Like I do",
      artist: "Fornicras",
      song: "https://firebasestorage.googleapis.com/v0/b/music-7038b.appspot.com/o/Ringtone%2FLike%20I%20Do.mp3?alt=media&token=2c334f76-e91f-454f-9f24-e9586ed5db79",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-7038b.appspot.com/o/Images%2FlikeIDo.jpg?alt=media&token=59d85b46-b675-419b-ae8f-c6c5fd541f79",
    },
    {
      id: 4,
      favourite: false,
      songName: "Legendary ",
      artist: "Welshly Arms",
      song: "https://firebasestorage.googleapis.com/v0/b/music-7038b.appspot.com/o/Ringtone%2FWelshly%20Arms%20-%20Legendary.mp3?alt=media&token=52f122ee-3fd2-48e8-9d62-1501cec45c03",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-7038b.appspot.com/o/Images%2Flegendary.jpg?alt=media&token=6b129a40-dda5-460f-8dfd-59337f991b11",
    },
    {
      id: 5,
      favourite: false,
      songName: "Venom",
      artist: "Eminem",
      song: "https://firebasestorage.googleapis.com/v0/b/music-7038b.appspot.com/o/Ringtone%2FEminem%20-%20Venom.mp3?alt=media&token=f828ab83-2ebb-4a2a-b5d2-6b2be36764e7",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-7038b.appspot.com/o/Images%2Fvenom.jpg?alt=media&token=7a6d08f8-3f4a-4548-83a2-5e9d09dddd78",
    },
    {
      id: 6,
      songName: "All The Things She Said",
      artist: "t.A.T.u",
      song: "https://firebasestorage.googleapis.com/v0/b/music-7038b.appspot.com/o/Ringtone%2FAll%20The%20Things%20She%20Said.mp3?alt=media&token=ac7d57e4-5008-4860-9e8e-5acb2b22ab29",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-7038b.appspot.com/o/Images%2FallShe.jpg?alt=media&token=5c299ba5-90af-40fa-97bd-1e6eaced3a8e",
    },
    {
      id: 7,
      favourite: false,
      songName: "Charlie",
      artist: "Gopi Sundar",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FCharlie.mp3?alt=media&token=5a129114-bb31-4a5a-95b7-1767829df21e",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fcharlie.jpg?alt=media&token=81a1dc08-a9af-4db2-b74d-1f50315f9342",
    },
    {
      id: 8,
      favourite: false,
      songName: "Mask Off",
      artist: "Future",
      song: "https://firebasestorage.googleapis.com/v0/b/music-7038b.appspot.com/o/Ringtone%2FFuture%20-%20Mask%20Off.mp3?alt=media&token=72835141-c75a-477d-9634-2d1966988137",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmask.jpg?alt=media&token=22f0d7be-74b8-4c0d-849d-b777370e9559",
    },
    {
      id: 9,
      favourite: false,
      songName: "Hey Mama",
      artist: "David Guetta",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fheymama.jpg?alt=media&token=2d8e8632-8051-4105-9760-3c715d797802",
    },
    {
      id: 10,
      favourite: false,
      songName: "Turkish Folk Battle Song",
      artist: "CVR Toon ",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fturkish.jpg?alt=media&token=1f44ad17-43a8-4e1d-b232-a78b28cb9fe0",
    },
  ];
  
  export { Songs };