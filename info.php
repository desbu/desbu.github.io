<?php

$api_key = 'AIzaSyBhK7mm-ALShJfQPLvmRepTEXtZf_B00zk';
$place_id = 'ChIJqz8fdX4PIUcRXGacHrrSQF4';

$url = "https://maps.googleapis.com/maps/api/place/details/json?placeid={$place_id}&fields=name,rating,formatted_phone_number,reviews&key={$api_key}"; 

$ch = curl_init();
curl_setopt ($ch, CURLOPT_URL, $url);
curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec ($ch);

?>