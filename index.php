<?php
include_once('scripts.php');
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
    <div class="dynamicForm">
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
    </div>
    <script src="draft.js"></script>
</html>