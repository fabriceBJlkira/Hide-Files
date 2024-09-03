<?php

include('Cors.php');
class Connection
{
  private static $pdo = null;

  /**
   * return a singleton of PDO instance
   *
   * @param array $config
   * @return PDO
   */
  public static function make($config)
  {
    if (self::$pdo === null) {
        try {
            self::$pdo = new PDO('sqlite:'.$config['dbname']);
        } catch (\PDOException $th) {
            echo $th->getMessage();
        }
    }

    return self::$pdo;
  }
}
