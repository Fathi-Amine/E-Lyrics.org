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
}