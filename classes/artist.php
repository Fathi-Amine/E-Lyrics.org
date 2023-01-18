<?php
include_once('db.php');

class Artist extends DatabaseConnection
{
    private $id;
    private $name;

    public function setArtistId($id){
        $this->id = $id;
    }
    public function setArtist($name){
        $this->name = $name;
    }

    public function getArtistId(){
        return $this->id;
    }
    public function getArtist(){
        return $this->name;
    }

    public function addArtist($data){
        $this->setArtist($data);
        $artist = $this->getArtist();
        $db = new DatabaseConnection();
        $pdo = $db -> connect();
        $sql = "INSERT INTO artist (`name`) VALUES (:name)";
        // var_dump($sql);
        // die;
        $statement = $pdo->prepare($sql);
        $statement->bindParam(':name', $artist);
        $statement->execute();
    }

    public function readArtist(){
        $db = new DatabaseConnection();
        $pdo = $db -> connect();
        $sql = "SELECT * FROM artist";
        $statement = $pdo->prepare($sql);
        $statement->execute();
        $res = $statement->fetchAll();
        return $res;
    }

    public function updateArtist($id, $name){
        $this->setArtist($name);
        $this->setArtistId($id);
        $id = $this->getArtistId();
        $updatedName = $this->getArtist();
        $db = new DatabaseConnection();
        $pdo = $db -> connect();
        $sql = "UPDATE `artist` SET `name`=:name WHERE id_artist = :id";
        $statement = $pdo->prepare($sql);
        $statement->bindParam(':name', $updatedName);
        $statement->bindParam(':id', $id);
        $statement->execute();
    }
}