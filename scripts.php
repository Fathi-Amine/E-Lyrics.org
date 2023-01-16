<?php
if(isset($_POST["songs"])){
    echo json_encode(response($_POST["songs"]));
};

function response($data){
    // return $data->songs;
    $res = json_decode($data,true);
    // var_dump($res["songs"][0]["title"]);
    foreach($res["songs"] as $row)
    var_dump($row["title"]);
    die();
}
?>