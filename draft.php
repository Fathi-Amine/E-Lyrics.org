<?php
include_once('DbConnection.php');
class User extends DatabaseConnection{
    private $firstName;
    private $lastName;
    private $email;
    private $password;

    public function setFirstName($firstName){
        $this->firstName = $firstName;
    }
    public function setLastName($lastName){
        $this->lastName = $lastName;
    }
    public function setEmail($email){
        $this->email = $email;
    }
    public function setPassword($password){
        $this->password = $password;
    }

    public function getFirstName(){
        return $this->firstName;
    }

    public function getLastName(){
        return $this->lastName;
    }

    public function getEmail(){
        return $this->email;
    }

    public function getPassword(){
        return $this->password;
    }

    public function insertUser($userInfo){

        $this->setFirstName($userInfo["first_name"]);
        $this->setLastName($userInfo["last_name"]);
        $this->setEmail($userInfo["email"]);
        $this->setPassword($userInfo["password"]);

        $firstName = $this->getFirstName();
        $lastName = $this->getlastName();
        $email = $this->getEmail();
        $password = $this->getPassword();
        $role = 0;

        $sql = "INSERT INTO user (`first_name`, `last_name`, `email`, `user_password`, `user_role`) VALUES (:first_name, :last_name, :email, :user_password, :user_role)";
        $db = new DatabaseConnection();
        $pdo = $db->connect();
        $stmt = $pdo->prepare($sql);

        $stmt->bindParam(":first_name", $firstName);
        $stmt->bindParam(":last_name", $lastName);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":user_password", $password);
        $stmt->bindParam(":user_role", $role);
        if($stmt->execute()){
            echo "inserted";
        }
    }
}

$test = new User();
$test ->setFirstName("Amine");
echo $test ->getFirstName();
?>