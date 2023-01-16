<?php

class DatabaseConnection
{
    static private $host = "localhost";
    static private $username = "root";
    static private $pw = "";
    static private $databaseName = "lyrics_db";

    protected function connect(){
        try{
            $pdo = new PDO("mysql:host=".self::$host.";dbname=".self::$databaseName.";",self::$username,self::$pw,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        }catch(PDOException $e){
            return "Connection failed.";
        }
        return $pdo;
    }

}

// $test = new DatabaseConnection();
// var_dump($test);
?>