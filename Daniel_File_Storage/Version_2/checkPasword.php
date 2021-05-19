<?php
  session_start();
  $loginInfo = $_POST["eMail"].",".$_POST["pasword"];
  $userHolder = fopen("userList.txt", "r");
  $_SESSION["logedIn"] = "NotCorrect";
  while(!feof($userHolder)) {
    if ($loginInfo == fgets($userHolder)) {
      $_SESSION["logedIn"] = "LogedIn";
      setcookie("clearLogin", true, time() + (180), "/");
      break;
    }
  }
  fclose($userHolder);
  require "index.php";
?>
