<?php
include_once('db.php');

class Artist extends DatabaseConnection
{
    private $name;

    public function setArtist($name){
        $this->name = $name;
    }

    public function getArtist(){
        return $this->name;
    }
}