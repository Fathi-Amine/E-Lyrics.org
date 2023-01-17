<?php
include_once("classes/songs.php");
if(isset($_POST["songs"])){
    json_encode(response($_POST["songs"]));
};

function response($data){
    if( Songs::insertSongs($data)){
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
?>