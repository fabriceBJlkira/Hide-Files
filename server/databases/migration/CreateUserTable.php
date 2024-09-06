<?php

class CreateUserTable
{
  public static function createUser($pdo)
    {
      try {
        $query = "CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
          username VARCHAR(250) NOT NULL,
          email VARCHAR(250) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";

        $stm = $pdo->prepare($query);

        $stm->execute();
      } catch (\Throwable $th) {
          die($th->getMessage());
      }
    }
}
