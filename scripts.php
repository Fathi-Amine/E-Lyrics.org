<?php
include_once("classes/songs.php");
include_once("classes/artist.php");
if(isset($_GET["data"]) && $_GET['data'] == 'artist'){
    echo json_encode(getArtists());
};
if(isset($_POST["songs"])){
    json_encode(response($_POST["songs"]));
};

if(isset($_POST["artist"])){
    json_encode(insertArtist($_POST["artist"]));
};

if(isset($_POST["artistUpdate"])){
    json_encode(updateArtist($_POST["artistUpdate"]));
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

?>