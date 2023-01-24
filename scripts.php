<?php
include_once("classes/songs.php");
include_once("classes/artist.php");
include_once("classes/album.php");




if(isset($_GET["data"]) && $_GET['data'] == 'artist'){

    echo json_encode(getArtists());

};
if(isset($_GET["data"]) && $_GET['data'] == 'albums'){

    echo json_encode(getAlbums());

};
if(isset($_GET["data"]) && $_GET["data"] == 'specificAlbums'){

    echo json_encode(getArtistAlbums($_GET["artist_id"]));
};
if(isset($_POST["songs"])){
    json_encode(response($_POST["songs"]));
};

if(isset($_POST["updateSong"])){
    updateSong($_POST['updateSong']);
}
if(isset($_POST["deleteSong"])){
    deleteSong($_POST["deleteSong"]);
}
if(isset($_POST["artist"])){
    json_encode(insertArtist($_POST["artist"]));
};

if(isset($_POST["artistUpdate"])){
    json_encode(updateArtist($_POST["artistUpdate"]));
}
if(isset($_POST["artistDelete"])){
    json_encode(deleteArtist($_POST["artistDelete"]));
}
if(isset($_POST["album"])){
    json_encode(addAlbum($_POST["album"]));
}

if(isset($_POST["albumUpdate"])){
    json_encode(updateAlbum($_POST["albumUpdate"]));
}

if(isset($_GET["data"]) && $_GET['data'] == 'songs'){
    echo json_encode(getSongs());
}
function response($data){
    if(Songs::insertSongs($data)){
        echo true;
    }else{
        echo false;
    }
    // // return $data->songs;
    // $res = json_decode($data,true);
    // $values = [];
    // $placeholders=[];
    // // var_dump($res["songs"][0]["title"]);
    // foreach($res["songs"] as $row){
    //     $placeholders[] = "(?,?,?)";
    // }
    // $placeholders = implode(",", $placeholders);
    // echo $placeholders;
    // // var_dump($row["title"]);
    // die();
}
function updateSong($data){
    $songToUpdate = json_decode($data,true);
    $id = $songToUpdate["id"];
    $title = $songToUpdate["title"];
    $lyrics = $songToUpdate["lyrics"];
    Songs::updateSong($id,$title,$lyrics);
}

function deleteSong($id){
    Songs::deleteSongs($id);
}
function getArtistAlbums($data){
    $artistAlbums = new Album();
    return $artistAlbums->readArtistAlbums($data);
}
function getSongs(){
    return Songs::showSongs();
}
function insertArtist($data){
    $artist = new Artist();
    $artist->addArtist($data);
    // var_dump($artist);
    // die;
}


function getArtists(){
    $artists = new Artist();
    return $artists->readArtist();
}

function updateArtist($data){
    $artist = json_decode($data,true);
    $artistToUpdate = new Artist();
    $artistToUpdate->updateArtist($artist["id"],$artist["name"]);
}

function deleteArtist($data){
    $artist = json_decode($data,true);
    $artistToDelete = new Artist();
    $artistToDelete->deleteArtist($artist["id"]);
}

function addAlbum($data){
    $albumInfo = json_decode($data,true);
    var_dump($albumInfo);
    die();
    // $album = new Album();
    // $album->insertAlbum($albumInfo);
    // var_dump($data);
    // die();
}

function getAlbums(){
    $albums = new Album();
    return $albums->retrieveAlbums();
}

function updateAlbum($data){
    $album = json_decode($data,true);
    $albumUpdate = new Album();
    $albumUpdate->albumUp($album);

}

function deleteAlbum($id){
    $album = json_decode($id,true);
    $albumToDelete = new Album();
    $albumToDelete->deleteAlbums($album["id"]);
}
?>