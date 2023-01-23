<?php
require_once("db.php");

class Songs extends DatabaseConnection
{
    public static function insertSongs($data){
        $db = new DatabaseConnection();
        $pdo = $db->connect();
        $received_songs = json_decode($data,true);
        try {
            //code...
            $pdo->beginTransaction();
            $songs = [];
            $placeholders = [];
            foreach ($received_songs["songs"] as $song) {
                $placeholders[] = "(?,?,?,?)";
                $songs = array_merge($songs,array_values($song));
            }
            $placeholders = implode(",", $placeholders);
            $sql = "INSERT INTO song (title, artist, album, lyrics) VALUES $placeholders";
            // var_dump($songs);
            // die($sql);
            $statement = $pdo->prepare($sql);
            $statement->execute($songs);
            $pdo->commit();
            return true;
        } catch (\Throwable $th) {
            //throw $th;
            return false;
        }
    }

    public static function showSongs(){
        $db = new DatabaseConnection();
        $pdo = $db->connect();
        $sql = "SELECT song.* , artist.name AS artist_name, album.name AS album_name FROM `song` 
        INNER JOIN album ON album.id_album = song.album 
        INNER JOIN artist ON artist.id_artist=album.artist_id;";
        $statement = $pdo->prepare($sql);
        $statement->execute();
        $res = $statement->fetchAll();
        return $res;
    }
}