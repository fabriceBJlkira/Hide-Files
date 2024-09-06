<?php

require('Models/User.php');
require('app/Request.php');
require('index.php');

use App\Models\User;
use App\Request;

$response = User::attempt(Request::values(), $connection);

if ($response !== null) {
  http_response_code(200);
  echo json_encode(['user' => $response], JSON_PRETTY_PRINT);
} else {
  http_response_code(400);
  echo json_encode(['error' => "bad request, try again"], JSON_PRETTY_PRINT);
}
