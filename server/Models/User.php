<?php

namespace App\Models;

class User
{
  public static function create($data, $pdo)
  {
    $query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $statement = $pdo->prepare($query);

    $statement->execute([$data['username'], $data['email'], $data['password']]);

    return true;
  }
}
