<?php

require('Models/User.php');
require('app/Request.php');
require('index.php');

use App\Models\User;
use App\Request;

$response = User::create(Request::values(), $connection);
if ($response) {
  http_response_code(200);
  echo 'user created';
}

