<?php 
session_start();
session_destroy();
header("location:index.html#prefooter1");
exit;
?>