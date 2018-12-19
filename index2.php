<?php session_start();
if(!isset($_SESSION['UserData']['Username'])){
header("location:login.php");
exit;
}
?>

<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Index2</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="img/icon.ico" />
    <link rel="icon" href="img/icon.png" type="image/png"/>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
    <script type="text/javascript" src="myScript.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <script>
    </script>
</head>
<body>
<p>Elegancko, jesteś zalogowany.</p>
<p>Ta strona <p1><<<</p1> index2.php <p1>>>></p1> jest dostępna tylko dla zalogowanych użytkowników. Kliknij <a href="logout.php" class='button-zadania'>Wyloguj</a> żeby się wylogować.
</body>
</html>