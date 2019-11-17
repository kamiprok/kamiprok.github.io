<?php session_start();
if(isset($_POST['Submit'])){
$logins = array('admin' => 'admin');
$Username = isset($_POST['Username']) ? $_POST['Username'] : '';
$Password = isset($_POST['Password']) ? $_POST['Password'] : '';
if (isset($logins[$Username]) && $logins[$Username] == $Password){
$_SESSION['UserData']['Username']=$logins[$Username];
header("location:index2.php");
exit;
} else {
$msg="<p style='color:red; padding-left:50px'>Login: admin &emsp; Hasło: admin</p>";
}
}
?>

<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Login</title>
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
    <form action='' method='post' name='Login_Form'>
        <div style='display:block; margin:50px; left:50px'>
            <p>Login:</p>
            <p><input type='text' name='Username'></p>
            <p>Password:</p>
            <p><input type='password' name='Password'></p>
            <p><input type='submit' name='Submit' value='Login' class='button-zadania'></p>
        </div>
    </form>
    <?php if(isset($msg)){?>
    <p><?php echo $msg;?></p>
    <?php } ?>
</body>
</html>