<?php
namespace App;


class SessionManager {
    // Static function to start a session and set session variables
    public static function setSession($key, $value) {
        // Start the session if it's not already started
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        // Store the session variable
        $_SESSION[$key] = $value;
    }

    // Static function to retrieve session variables
    public static function getSession($key) {
      // Start the session if it's not already started
      if (session_status() == PHP_SESSION_NONE) {
        session_start();
      }
      if (isset($_SESSION[$key])) {
          return $_SESSION[$key];
      }
      return null; // Return null if the session key doesn't exist
    }

    // Static function to delete a session variable
    public static function deleteSession($key) {
        // Start the session if it's not already started
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        // Unset the session variable if it exists
        if (isset($_SESSION[$key])) {
            unset($_SESSION[$key]);
        }
    }

    // Optional: clear all session data
    public static function clearAllSessions() {
        // Start the session if it's not already started
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        // Clear all session variables
        session_unset();
        // Optionally, destroy the session completely
        session_destroy();
    }
}
