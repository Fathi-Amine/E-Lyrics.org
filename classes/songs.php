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
                $placeholders[] = "(?,?,?)";
                $songs = array_merge($songs,array_values($song));
            }
            // var_dump($songs);
            // die;
            $placeholders = implode(",", $placeholders);
            var_dump($placeholders);
            $sql = "INSERT INTO song (title, album, lyrics) VALUES $placeholders";
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
        $sql = "SELECT song.* ,artist.id_artist AS artist_id, artist.name AS artist_name, album.name AS album_name FROM `song` 
        INNER JOIN album ON album.id_album = song.album 
        INNER JOIN artist ON artist.id_artist=album.artist_id;";
        $statement = $pdo->prepare($sql);
        $statement->execute();
        $res = $statement->fetchAll();
        return $res;
    }

    public static function updateSong($id,$title,$lyrics){
        $db = new DatabaseConnection();
        $pdo = $db->connect();
        $sql = "UPDATE `song` SET title=:title,lyrics=:lyrics WHERE id=:id";
        $statement = $pdo->prepare($sql);
        $statement->bindParam(':id', $id);
        $statement->bindParam(':title', $title);
        $statement->bindParam(':lyrics', $lyrics);
        $statement->execute();
    }
    public static function deleteSongs($id){
        $db = new DatabaseConnection();
        $pdo = $db -> connect();
        $sql = "DELETE FROM `song` WHERE id = :id";
        $statement = $pdo->prepare($sql);
        $statement->bindParam(':id', $id);
        $statement->execute();
    }
}