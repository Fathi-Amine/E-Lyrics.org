const addBtn = document.querySelector('.addSongBlock');
const addSongBtn = document.querySelector('.btn');
// const closeBtns = document.querySelectorAll('.close-btn');
// console.log(closeBtns)
const form = document.querySelector('.lyrics-form');
addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    form.innerHTML += 
    `
    <div class="song-inputs">
        <div class="form-title">
            <h1>Add a song</h1>
            <div class="close-btn" onclick="removeBlock(this)">
                <img src="assets/close.svg" alt="">
            </div>
        </div>
        <div class="input">
            <label for="">Title</label>
            <input type="text" class="slot" id="titleInput">
        </div>
        <div class="input">
            <label for="">Artist</label>
            <input type="text" class="slot" id="artistInput">
        </div>
        <div class="input">
            <label for="">Album</label>
            <input type="text" class="slot" id="albumInput">
        </div>
        <div class="input">
            <label for="">Release Date</label>
            <input type="text" class="slot" id="releaseInput">
        </div>
        <div class="input">
            <label for="">Release Date</label>
            <textarea class="slot" id="lyricsText" cols="30" rows="10"></textarea>
        </div>
    </div>
`
})

function removeBlock(e){
    e.parentElement.parentElement.remove()
}

addSongBtn.addEventListener('click', ()=>{
    console.log('yeah');
    const data = [];
    const dataElements = document.querySelectorAll('.song-inputs');
    console.log(dataElements)
    for (let i = 0; i < dataElements.length; i++) {
        const titleInputs = dataElements[i].querySelector('#titleInput');
        const artistInputs = dataElements[i].querySelector('#artistInput');
        const albumInputs = dataElements[i].querySelector('#albumInput');
        const lyricsInputs = dataElements[i].querySelector('#lyricsText');
        const song = {};
        song.title = titleInputs.value;
        song.artist = artistInputs.value;
        song.album = albumInputs.value;
        song.lyrics = lyricsInputs.value;
        console.log(song)
        data.push(song);
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "scripts.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send(`songs=${JSON.stringify({songs: data})}`);
})
