<?php
  session_start();
  if(!isset($_COOKIE["clearLogin"])) {
    $_SESSION["logedIn"] = null;
  }
?>
<html>
    <head>
      <meta charset="UTF-8"/>
        <link rel="stylesheet" href="htmlPages/style/navigation.css" />
        <link rel="stylesheet" href="htmlPages/style/main.css" />
        <script src="htmlPages/script/renderPage.js"></script>
    </head>
    <body>
        <div id="navigation">
        </div>
        <div id="pageElements">
            <div id="leftSide"></div>
            <div id="mainPage"></div>
            <div id="rightSide"></div>
        </div>
        <div id="contacts">
            Contacts
        </div>
    </body>
    <script>
      <?php
        if ($_SESSION["logedIn"] == "LogedIn") {
          setcookie("clearLogin", true, time() + (1200), "/");
          echo 'navigationButtons(["Home", ["Clubs", "Anime", "Math", "Gaming", "IT"], ["Menu", "About us", "Profile", "Scores", "Your clubs", "Theam", "Exit"]]);';
          echo 'renderMainText("ATV Pulciņš", ["Description", "What can you do?", "FAQ", "SOC"], [["short description"], ["Enjoy your time"], ["question 1", "question answer"], ["Discord: https://discord.gg/QcyK6HxR"]]);';
        } else {
          echo 'navigationButtons(["Home", ["Clubs", "Anime", "Math", "Gaming", "IT"], ["Menu", "About us", "Log in", "Scores", "Register"]]);'."\n";
          echo 'renderMainText("ATV Pulciņš", ["Description", "What can you do?", "FAQ", "SOC"], [["short description"], ["Enjoy your time"], ["question 1", "question answer"], ["Discord: https://discord.gg/QcyK6HxR"]]);';
        }
      ?>
    </script>
</html>
