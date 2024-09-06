<?php
namespace App\Models;

require('app/SessionManager.php');
use App\SessionManager;
use PDO;

class User
{
  public static function create($data, $pdo)
  {
    $query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $statement = $pdo->prepare($query);

    $statement->execute([$data['username'], $data['email'], $data['password']]);

    return true;
  }

  public static function attempt($data, $pdo)
  {
    $query = "SELECT * FROM users WHERE email ='".$data['email']."'";

    $statement = $pdo->query($query);

    $resultat = $statement->fetch(PDO::FETCH_OBJ);

    if (!empty($resultat)) {
      if ($resultat->password == $data['password']) {
        SessionManager::setSession('auth', $resultat);
        return $resultat;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
