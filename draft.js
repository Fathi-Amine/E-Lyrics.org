const addBtn = document.querySelector('.addSongBlock');
const addSongBtn = document.querySelector('.btn');
const addArtistBtn = document.querySelector('.addArtist');
const readArtistBtn = document.querySelector('.readArtist');
const updateArtistBtn = document.querySelector('.updateArtist');
const deleteArtistBtn = document.querySelector('.deleteArtist');
const readBlock = document.querySelector('.show');
const artist = document.querySelector('#artistInput');
const artistId = document.querySelector('#artistId');
// const closeBtns = document.querySelectorAll('.close-btn');
// console.log(closeBtns)
const form = document.querySelector('.lyrics-form');
// addBtn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     form.innerHTML += 
//     `
//     <div class="song-inputs">
//         <div class="form-title">
//             <h1>Add a song</h1>
//             <div class="close-btn" onclick="removeBlock(this)">
//                 <img src="assets/close.svg" alt="">
//             </div>
//         </div>
//         <div class="input">
//             <label for="">Title</label>
//             <input type="text" class="slot" id="titleInput">
//         </div>
//         <div class="input">
//             <label for="">Artist</label>
//             <input type="text" class="slot" id="artistInput">
//         </div>
//         <div class="input">
//             <label for="">Album</label>
//             <input type="text" class="slot" id="albumInput">
//         </div>
//         <div class="input">
//             <label for="">Release Date</label>
//             <input type="text" class="slot" id="releaseInput">
//         </div>
//         <div class="input">
//             <label for="">Release Date</label>
//             <textarea class="slot" id="lyricsText" cols="30" rows="10"></textarea>
//         </div>
//     </div>
// `
// })

// function removeBlock(e){
//     e.parentElement.parentElement.remove()
// }

// addSongBtn.addEventListener('click', ()=>{
//     console.log('yeah');
//     const data = [];
//     const dataElements = document.querySelectorAll('.song-inputs');
//     console.log(dataElements)
//     for (let i = 0; i < dataElements.length; i++) {
//         const titleInputs = dataElements[i].querySelector('#titleInput');
//         const artistInputs = dataElements[i].querySelector('#artistInput');
//         const albumInputs = dataElements[i].querySelector('#albumInput');
//         const lyricsInputs = dataElements[i].querySelector('#lyricsText');
//         const song = {};
//         song.title = titleInputs.value;
//         song.artist = artistInputs.value;
//         song.album = albumInputs.value;
//         song.lyrics = lyricsInputs.value;
//         console.log(song)
//         data.push(song);
//     }
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "scripts.php", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             if(xhr.responseText){
//                 console.log("yeap")
//             }else{
//                 console.log("nope")
//             };
//         }
//     };
//     xhr.send(`songs=${JSON.stringify({songs: data})}`);
// })


addArtistBtn.addEventListener('click', function(){
    const artist = document.querySelector('#artistInput');
    const artistName = artist.value;
    console.log(artistName)
    const artistXhr = new XMLHttpRequest();
    artistXhr.open("POST", "scripts.php",true);
    artistXhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    artistXhr.onreadystatechange = function () {
        if (artistXhr.readyState === 4 && artistXhr.status === 200) {
            console.log(artistXhr.responseText);
            // if(artistXhr.responseText){
            //     console.log("yeap")
            // }else{
            //     console.log("nope")
            // };
        }
    }
    artistXhr.send(`artist=${artistName}`);
})
function edit(btn){
    
    const btnId = btn.id.split('-')[1];
    artistId.value = btnId;
    artist.value = btn.innerText;
}
function showArtists(art){
    art.forEach(artist => {
        readBlock.innerHTML += 
        `
        <button id='artist-${artist.id_artist}' class="updateArtist" onclick=edit(this)>${artist.name}</button>

        `
        
    });
}
readArtistBtn.addEventListener('click', function(){
    const artistXhr = new XMLHttpRequest();
    artistXhr.open("GET","scripts.php?data=artist",true);
    artistXhr.onload = function() {
        if (artistXhr.status === 200) {
            let artists = JSON.parse(this.responseText);
            let values = Object.values(artists);
            showArtists(values);
        }
    };
    artistXhr.send();
})

updateArtistBtn.addEventListener('click',function(){
    const updateArtist = {}
    updateArtist.id = artistId.value;
    updateArtist.name = artist.value;
    console.log(updateArtist);
    const artistXhr = new XMLHttpRequest();
    artistXhr.open("POST","scripts.php",true);
    artistXhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    artistXhr.onreadystatechange = function() {
        if (artistXhr.readyState === 4 && artistXhr.status === 200) {
            console.log(this.responseText);
        }
    };
    artistXhr.send(`artistUpdate=${JSON.stringify(updateArtist)}`);
})