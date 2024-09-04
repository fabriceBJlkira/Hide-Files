<?php
require_once('databases/Connection.php');
require('databases/migration/CreateUserTable.php');
$config = require('config/app.php');
require("app/src/Hashids.php");
use Hashids\Hashids;

/**
 * function we will use to make PDO statement
 * @param array $configs
 * @return PDO
 */
function connection($configs)
{
  return Connection::make($configs['database']);
}

/**
 * variable who return pdo so that we will call this whenever we want
 */
$connection = connection($config);

/**
 * instance of hashids
 * @var mixed
 */
$hashids = new Hashids('my-salt-string', 8);

// create ours table here

CreateUserTable::createUser($connection);

// end create table

$hash = $hashids->encode(12345);
$numbers = $hashids->decode($hash);
// die(var_dump($hash));
