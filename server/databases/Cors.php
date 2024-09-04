<?php

// eto no ilaina ny headers mampitohy anazy am frontend ngamba
// ataoko angamba satry tsy aiko, ary tsy mandeha le ajax ra tsy misy an headers anakitelo ito
$config = require('config/app.php');

header('Access-Control-Allow-Origin: '.$config['FRONTEND_DOMAIN_NAME']);
header('Access-Control-Allow-Headers:  Content-Type, Authorization');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header("Access-Control-Allow-Credentials: true");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  // If the request method is OPTIONS, return only the headers and not the content
  exit(0);
}
