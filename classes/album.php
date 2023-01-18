<?php
include_once('db.php');
class Album extends DatabaseConnection
{
    private $album_id;
    private $album_name;
    private $album_date;
    private $album_artist;

    public function setAlbumId($id){
        $this->album_id = $id;
    }

    public function getAlbumId(){
        return $this->album_id;
    }
    public function setAlbumName($name){
        $this->album_name = $name;
    }

    public function getAlbumName(){
        return $this->album_name;
    }
    public function setAlbumDate($date){
        $this->album_date = $date;
    }

    public function getAlbumDate(){
        return $this->album_date;
    }
    public function setAlbumArtist($artist){
        $this->album_artist = $artist;
    }

    public function getAlbumArtist(){
        return $this->album_artist;
    }

    public function insertAlbum($data){

        $this->setAlbumName($data["name"]);
        $this->setAlbumDate($data["date"]);
        $this->setAlbumArtist($data["artistId"]);
        $albumName = $this->getAlbumName();
        $albumDate = $this->getAlbumDate();
        $albumArtist = $this->getAlbumArtist();
        $db = new DatabaseConnection();
        $pdo = $db -> connect();
        $sql = "INSERT INTO album (`name`, `release_date`, `artist_id`) VALUES (:name,:release_date,:artist_id)";
        // var_dump($sql);
        // die;
        $statement = $pdo->prepare($sql);
        $statement->bindParam(':name', $albumName);
        $statement->bindParam(':release_date', $albumDate);
        $statement->bindParam(':artist_id', $albumArtist);
        $statement->execute();
    }

    public function retrieveAlbums(){
        $db = new DatabaseConnection();
        $pdo = $db -> connect();
        $sql = "SELECT album.*, artist.name AS artist_name FROM album
        INNER JOIN artist ON artist.id_artist = album.artist_id";
        $statement = $pdo->prepare($sql);
        $statement->execute();
        $res = $statement->fetchAll();
        return $res;
    }
}
?>