<?php
header('Content-Type: application/json');

$products = [
    ["id" => 1, "name" => "Basic Card", "price" => 10],
    ["id" => 2, "name" => "Premium Card", "price" => 20],
    ["id" => 3, "name" => "Business Card", "price" => 30],
];

echo json_encode($products);
?>
