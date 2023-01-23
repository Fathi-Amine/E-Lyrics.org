const addBtn = document.querySelector('.addSongBlock');
const addSongBtn = document.querySelector('.btn');
const songsTableBody = document.querySelector('.songsTableBody');
const albumsTableBody = document.querySelector('.albumsTableBody');
const artistsTableBody = document.querySelector('.artistsTableBody');
console.log(songsTableBody)
const addArtistBtn = document.querySelector('.addArtist');
const readArtistBtn = document.querySelector('.readArtist');
const updateArtistBtn = document.querySelector('.updateArtist');
const deleteArtistBtn = document.querySelector('.deleteArtist');
const readBlock = document.querySelector('.show');
const artist = document.querySelector('#artistInput');
const artistId = document.querySelector('#artistId');
const albumIdInput = document.querySelector('.albumId');
const albumNameInput = document.querySelector('.albumName');
const albumDateInput = document.querySelector('.albumDate');
const albumArtistInput = document.querySelector('.selectBox');
const addAlbumBtn = document.querySelector('.addAlbumBtn');
const showAlbumsBtn = document.querySelector('.showAlbumsBtn');
const updateAlbumBtn = document.querySelector('.updateAlbumBtn');
const deleteAlbumBtn = document.querySelector('.deleteAlbumBtn');
const albumBlock = document.querySelector('.albumBlock');
var selectedOptionValue = 0;
// const closeBtns = document.querySelectorAll('.close-btn');
// console.log(closeBtns)
let duplicateCount = 0;
const formParent = document.querySelector('.songFormBlock');
const form = document.querySelector('.song-inputs');

function pLimit(str, length, end = "..."){
    return str.length < length ? str : str.substring(0, length) + end;
}
function insertForm(){
    duplicateCount++;
    let insertedForm = form.cloneNode(true);
    insertedForm.id = "insertedForm"+duplicateCount;
    console.log(form.parentElement.appendChild(insertedForm))
}


addBtn.addEventListener('click',insertForm
// {
//     e.preventDefault();
//     form.innerHTML += 
//     `
//     <div class="song-inputs">
//         <div class="form-title flex items-center justify-between">
//             <h1>Add a song</h1>
//             <a href="#" class="close-btn">
//                 <img class="w-3" src="assets/close.svg" alt="">
//             </a>
//         </div>
//         <div class="input">
//             <label for="titleInput" class="block">Title</label>
//             <input type="text" class="slot w-full border border-gray-300 rounded-lg h-8 p-2" id="titleInput">
//         </div>
//         <div class="input">
//             <label for="" class="block">Artist</label>
//             <input type="text" class="slot w-full border border-gray-300 rounded-lg h-8 p-2" id="artistInput">
//         </div>
//         <div class="input">
//             <label for="" class="block">Album</label>
//             <input type="text" class="slot w-full border border-gray-300 rounded-lg h-8 p-2" id="albumInput">
//         </div>
//         <div class="input">
//             <label for="" class="block">Lyrics</label>
//             <textarea class="slot w-full border border-gray-300 rounded-lg" id="lyricsText" cols="30" rows="4"></textarea>
//         </div>
//     </div>
// `
// }
)


let modal = document.getElementById("modal");
let openModalBtn = document.getElementById("open-modal-btn");
let closeModalBtn = document.getElementById("close-modal-btn");
let modalHidden = true;

openModalBtn.addEventListener("click", function() {
    if (modalHidden) {
        modal.classList.remove("hidden");
        modalHidden = false;
    }
});

closeModalBtn.addEventListener("click", function() {
    if (!modalHidden) {
        modal.classList.add("hidden");
        modalHidden = true;
    }
    for(i=1;i<=duplicateCount;i++){
        let insertedForm = document.querySelector(`#insertedForm${i}`);
        insertedForm.parentElement.removeChild(insertedForm)
    }
});

// document.addEventListener("click", function(event) {
//     if (!event.target.closest('#modal-content')) {
//         if (!modalHidden) {
//             modal.classList.add("hidden");
//             modalHidden = true;
//         }
//     }
// });
document.addEventListener("click", function(event) {
    if (event.target != openModalBtn && event.target != closeModalBtn) {
        if (!event.target.closest('#modal-content') && !modalHidden) {
            modal.classList.add("hidden");
            modalHidden = true;
        }
    }
});
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


// addArtistBtn.addEventListener('click', function(){
//     const artist = document.querySelector('#artistInput');
//     const artistName = artist.value;
//     console.log(artistName)
//     const artistXhr = new XMLHttpRequest();
//     artistXhr.open("POST", "scripts.php",true);
//     artistXhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//     artistXhr.onreadystatechange = function () {
//         if (artistXhr.readyState === 4 && artistXhr.status === 200) {
//             console.log(artistXhr.responseText);
//             // if(artistXhr.responseText){
//             //     console.log("yeap")
//             // }else{
//             //     console.log("nope")
//             // };
//         }
//     }
//     artistXhr.send(`artist=${artistName}`);
// })
// function edit(btn){
    
//     const btnId = btn.id.split('-')[1];
//     artistId.value = btnId;
//     artist.value = btn.innerText;
// }
// function showArtists(art){
//     art.forEach(artist => {
//         readBlock.innerHTML += 
//         `
//         <button id='artist-${artist.id_artist}' class="updateArtist" onclick=edit(this)>${artist.name}</button>

//         `
        
//     });
// }
// function editAlbum(element){
//     console.log(element.children)
//     albumIdInput.value = element.id.split('-')[1]
//     Array.from(element.children).forEach(child=>{
//         console.log(child.innerText)
//         if(child.classList.contains("album-title")){
//             albumNameInput.value = child.innerText;
//         }else if(child.classList.contains("album-date")){
//             albumDateInput.value = child.innerText;
//         }else if(child.classList.contains("album-artist")){
//             albumArtistInput.querySelector('select').value = child.dataset.artistid;
//             // console.log()
//         }
        
//     })
// }
// function displayAlbums(albums){
//     albums.forEach(album=>{
//         albumBlock.innerHTML +=
//         `
//         <div class="album-card" id=album-${album.id_album} onclick="editAlbum(this)">
//             <p class="album-title">${album.name}</p>
//             <p class="album-date">${album.release_date}</p>
//             <p class="album-artist" data-artistId=${album.artist_id}>${album.artist_name}</p>
//         </div>
//         `
//     })
// }
// readArtistBtn.addEventListener('click', function(){
//     const artistXhr = new XMLHttpRequest();
//     artistXhr.open("GET","scripts.php?data=artist",true);
//     artistXhr.onload = function() {
//         if (artistXhr.status === 200) {
//             let artists = JSON.parse(this.responseText);
//             let values = Object.values(artists);
//             showArtists(values);
//         }
//     };
//     artistXhr.send();
// })

// updateArtistBtn.addEventListener('click',function(){
//     const updateArtist = {}
//     updateArtist.id = artistId.value;
//     updateArtist.name = artist.value;
//     console.log(updateArtist);
//     const artistXhr = new XMLHttpRequest();
//     artistXhr.open("POST","scripts.php",true);
//     artistXhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//     artistXhr.onreadystatechange = function() {
//         if (artistXhr.readyState === 4 && artistXhr.status === 200) {
//             console.log(this.responseText);
//         }
//     };
//     artistXhr.send(`artistUpdate=${JSON.stringify(updateArtist)}`);
// })

// deleteArtistBtn.addEventListener('click',function(){
//     const deleteArtist = {};
//     deleteArtist.id = artistId.value;
//     const artistXhr = new XMLHttpRequest();
//     artistXhr.open("POST","scripts.php",true);
//     artistXhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//     artistXhr.onreadystatechange = function() {
//         if (artistXhr.readyState === 4 && artistXhr.status === 200) {
//             console.log(this.responseText);
//         }
//     };
//     artistXhr.send(`artistDelete=${JSON.stringify(deleteArtist)}`);
// })

function custonSelectBox(){
    const artistXhr = new XMLHttpRequest();
    artistXhr.open("GET","scripts.php?data=artist",true);
    artistXhr.onload = function() {
        if (artistXhr.status === 200) {
            let artists = JSON.parse(this.responseText);
            let values = Object.values(artists);
            // const selectInput = document.createElement('select');
            const selectInput = document.querySelector('#selectArtist')
            const defaultOption = document.createElement('option');
            defaultOption.innerText = 'Select an Artist';
            defaultOption.setAttribute('selected',"");
            selectInput.appendChild(defaultOption)
            values.forEach(artist=>{
                const selectOption = document.createElement('option');
                selectOption.innerText = artist.name;
                selectOption.setAttribute('value', `${artist.id_artist}`)
                selectOption.classList = 'option';
                selectInput.appendChild(selectOption);
                console.log(artist)
            })
            selectInput.addEventListener('change', function(){
                selectedOptionValue = selectInput.value;
                console.log(selectedOptionValue);
                const albumXhr = new XMLHttpRequest();
                albumXhr.open("GET","scripts.php?data=albums",true);
                albumXhr.onload = function() {
                    if (albumXhr.status === 200) {
                        let albums = JSON.parse(this.responseText);
                        console.log(albums)
                        let values = Object.values(albums);
                        console.log(values)
                        const selectAlbumInput = document.querySelector('#selectAlbum');
                        const defaultAlbumOption = document.createElement('option');
                        defaultAlbumOption.innerText = 'Select an album';
                        defaultAlbumOption.setAttribute('selected', "");
                        selectAlbumInput.appendChild(defaultAlbumOption);
                        values.forEach(album =>{
                            const selectAlbumOption = document.createElement('option');
                            selectAlbumOption.innerText = album.name;
                            selectAlbumOption.setAttribute('value', `${album.id_album}`);
                            selectAlbumOption.classList= 'albumOption';
                            selectAlbumInput.appendChild(selectAlbumOption);
                        })
                    }
                };
                albumXhr.send();
            })
            // const options = selectInput.querySelectorAll('.option');
            // options.forEach(option=>{
            //     console.log(option)
            // })
            console.log(selectInput);
            // albumArtistInput.appendChild(selectInput)
        }
    };
    artistXhr.send();
}
custonSelectBox();
function displaySongs(songs){
    songs.forEach(song=>{
        let songTitle = document.createElement('td');
        let songLyrics = document.createElement('td');
        let songAlbum = document.createElement('td');
        let songArtist = document.createElement('td');
        songTitle.classList.add("songTitle,text-center");
        songLyrics.classList.add("songTitle,text-center");
        songAlbum.classList.add("songTitle,text-center");
        songArtist.classList.add("songTitle,text-center");
        songTitle.dataset.id = song.id;
        songTitle.innerText = song.title;
        songLyrics.innerText = pLimit(song.lyrics,15);
        songAlbum.innerText = song.album_name;
        songArtist.innerText = song.artist_name;
        songsTableBody.append(songTitle,songLyrics,songAlbum,songArtist)
        // songsTableBody.innerHTML += 
        // `
        //     <td class='songTitle text-center' data-songsId=${song.id}>${song.title}</td>
        //     <td  class='songLyrics text-center'>${pLimit(song.lyrics,15)}</td>
        //     <td class="songAlbum text-center">${song.album_name}</td>
        //     <td class="songArtist text-center">${song.artist_name}</td>
        //     <!-- btn edite delete -->
        //     <td>
        //         <div class="d-flex align-items-center">
        //             <button>edit</button>
        //             <button></button>
        //         </div>
        //     </td>
        // `
    })
}
function showSongsTable(){
    const songsXhr = new XMLHttpRequest();
    songsXhr.open("GET","scripts.php?data=songs",true);
    songsXhr.onload = function() {
        if (songsXhr.status === 200) {
            let songs = JSON.parse(this.responseText);
            console.log(songs)
            // let values = Object.values(songs);
            displaySongs(songs)
        }
    };
    songsXhr.send();
}

showSongsTable();
function displayAlbums(albums){
    console.log(albums)
    albums.forEach(album=>{
        let albumName = document.createElement('td');
        let albumReleaseDate = document.createElement('td');
        let albumArtist = document.createElement('td');
        albumName.dataset.id = album.id_album;
        albumName.innerText = album.name;
        albumReleaseDate.innerText = album.release_date;
        albumArtist.innerText = album.artist_name;
        albumName.classList.add("album-name,text-center");
        albumReleaseDate.classList.add("album-releaseDate,text-center");
        albumArtist.classList.add("album-artist,text-center");
        albumsTableBody.append(albumName,albumReleaseDate,albumArtist)
    })
}
function showAlbumsTable(){
    const albumXhr = new XMLHttpRequest();
    albumXhr.open("GET","scripts.php?data=albums",true);
    albumXhr.onload = function() {
        if (albumXhr.status === 200) {
            let albums = JSON.parse(this.responseText);
            // console.log(albums)
            // let values = Object.values(albums);
            displayAlbums(albums);
        }
    };
    albumXhr.send();
}
showAlbumsTable();
function showArtists(artists) {
    console.log(artists)
    artists.forEach(artist=>{
        let artistName = document.createElement('td');
        artistName.dataset.id = artist.id_artist;
        artistName.innerText = artist.name;
        artistName.classList.add("artist-name,text-center");
        artistsTableBody.append(artistName)

    })
}
function showArtist(){
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
}
// addAlbumBtn.addEventListener('click',function(){
//     console.log(addAlbumBtn);
//     const albumInfo = {}
//     const albumName = albumNameInput.value;
//     const albumDate = albumDateInput.value;
//     albumInfo.name = albumName;
//     albumInfo.date = albumDate;
//     albumInfo.artistId = selectedOptionValue;
//     console.log(selectedOptionValue)
//     const albumXhr = new XMLHttpRequest();
//     albumXhr.open("POST", "scripts.php",true);
//     albumXhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//     albumXhr.onreadystatechange = function () {
//         if (albumXhr.readyState === 4 && albumXhr.status === 200) {
//             console.log(albumXhr.responseText);
//             // if(albumXhr.responseText){
//             //     console.log("yeap")
//             // }else{
//             //     console.log("nope")
//             // };
//         }
//     }
//     albumXhr.send(`album=${JSON.stringify(albumInfo)}`);
// })

// showAlbumsBtn.addEventListener('click',function(){
//     console.log(showAlbumsBtn)
//         const albumXhr = new XMLHttpRequest();
//     albumXhr.open("GET","scripts.php?data=albums",true);
//     albumXhr.onload = function() {
//         if (albumXhr.status === 200) {
//             let albums = JSON.parse(this.responseText);
//             console.log(albums)
//             let values = Object.values(albums);
//             displayAlbums(values)
//         }
//     };
//     albumXhr.send();
// })

// updateAlbumBtn.addEventListener('click',function(){
//     const albumUpdate = {}
//     const albumName = albumNameInput.value;
//     const albumDate = albumDateInput.value;
//     albumUpdate.id = albumIdInput.value
//     albumUpdate.name = albumName;
//     albumUpdate.date = albumDate;
//     albumUpdate.artistId = albumArtistInput.querySelector('select').value;
//     console.log(albumUpdate)
//     const albumXhr = new XMLHttpRequest();
//     albumXhr.open("POST", "scripts.php",true);
//     albumXhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//     albumXhr.onreadystatechange = function () {
//         if (albumXhr.readyState === 4 && albumXhr.status === 200) {
//             console.log(albumXhr.responseText);
//             // if(albumXhr.responseText){
//             //     console.log("yeap")
//             // }else{
//             //     console.log("nope")
//             // };
//         }
//     }
//     albumXhr.send(`albumUpdate=${JSON.stringify(albumUpdate)}`);
// })

// deleteAlbumBtn.addEventListener('click', function(){
//     const deleteAlbum = {};
//     deleteAlbum.id = albumIdInput.value;
//     const albumXhr = new XMLHttpRequest();
//     albumXhr.open("POST","scripts.php",true);
//     albumXhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//     albumXhr.onreadystatechange = function() {
//         if (albumXhr.readyState === 4 && albumXhr.status === 200) {
//             console.log(this.responseText);
//         }
//     };
//     albumXhr.send(`albumDeletion=${JSON.stringify(deleteAlbum)}`);
// })

// SELECT song.* , artist.name as artist_name, album.name as album_name FROM `song` inner join album on album.id_album=song.album inner join artist on artist.id_artist=album.artist_id;

// function dynamicSelect()
