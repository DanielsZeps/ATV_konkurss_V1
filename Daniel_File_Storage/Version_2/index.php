<?php
  session_start();
  if ($_SESSION["logedIn"] == "LogedIn") {
    include "htmlPages/mainPage.php";
  } elseif ($_SESSION["logedIn"] == "NotCorrect") {
    echo "Incorrect e-mail/pasword"."<br>";
    include "htmlPages/loginPage.php";
  } else {
    include "htmlPages/mainPage.php";
  }
?>
