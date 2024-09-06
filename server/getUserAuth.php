<?php

use App\Auth;

require('index.php');
require('app/Auth.php');

echo json_encode(['user' => Auth::getAuth()], JSON_PRETTY_PRINT);
