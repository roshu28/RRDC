<?php
header('Content-Type: application/json');
$response = ["status" => "success", "message" => "Contact form submitted successfully"];
echo json_encode($response);
?>
