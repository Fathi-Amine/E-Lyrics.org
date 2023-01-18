<?php
// include_once('scripts.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div class="albumBlock"></div>
    <div class="crud-album">
        <div class="input-container">
            <input type="hidden" class="albumId">
        </div>
        <div class="input-container">
            <label for="">Name</label>
            <input type="text" class="albumName">
        </div>
        <div class="input-container">
            <label for="">Release Date</label>
            <input type="date" class="albumDate">
        </div>
        <div class="input-container selectBox">
            <label for="">Artist</label>
            <!-- <input type="text"> -->
        </div>
        <div class="btns">
            <button class="addAlbumBtn">add album</button>
            <button class="showAlbumsBtn">show Albums</button>
            <button class="updateAlbumBtn">update Album</button>
            <button class="deleteAlbumBtn"> delete Album</button>
        </div>
    </div>
    <!-- <div class="crud-artist">
        <div class="show"></div>
        <div class="artist-input">
            <label for="" style="display: block;">
                Artist
            </label>
            <input type="hidden" id="artistId">
            <input type="text" name="" id="artistInput">
            <div class="btnContainer">
                <button class="addArtist">Add</button>
                <button class="readArtist">Retrieve</button>
                <button class="updateArtist">Update</button>
                <button class="deleteArtist">Delete</button>
            </div>
        </div>
    </div> -->
    <!-- <div class="dynamicForm">
        <form action="" class="lyrics-form">
            <div class="song-inputs">
                <div class="form-title">
                    <h1>Add a song</h1>
                    <a href="#" class="close-btn">
                        <img src="assets/close.svg" alt="">
                    </a>
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
        </form>
        <button type="button" class="btn">Add song</button>
        <button class="addSongBlock">Add another song</button>
    </div> -->
    <script src="draft.js"></script>
</html>