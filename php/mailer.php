<?php
  //send email
  $email = $_REQUEST['email'] ;
  $subject = $_REQUEST['subject'] ;
  $message = $_REQUEST['message'] ;
  $name = $_REQUEST['name'];
  mail("ratabora+FROMPERSONALWEBSITE@gmail.com", "$subject",
  $message." sent to you by ".$name, "From:" . $email);
  echo "Thank you for the message!";
  echo "Sorry, I'm still working on getting the AJAX working";
  echo "You can return to my main page <a href='http://ryantabora.com'>here</a>";
?>