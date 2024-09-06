<?php
namespace App;

require('SessionManager.php');

use App\SessionManager;

class Auth
{
  public static function getAuth()
  {
    return SessionManager::getSession('auth');
  }
}
