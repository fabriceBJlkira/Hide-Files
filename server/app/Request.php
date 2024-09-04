<?php
namespace App;

class Request
{
  public static function values()
    {
        return $_REQUEST;
    }

    public static function input()
    {
        $input = file_get_contents('php://input');
        return $input;
    }

    public static function files()
    {
        return $_FILES;
    }
}
