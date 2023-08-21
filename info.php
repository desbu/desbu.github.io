<?php

if (isset($_POST)) {

    $api_key = 'AIzaSyBhK7mm-ALShJfQPLvmRepTEXtZf_B00zk';
    $place_id = 'ChIJqz8fdX4PIUcRXGacHrrSQF4';

    $url = "https://maps.googleapis.com/maps/api/place/details/json?placeid={$place_id}&fields=name,rating,formatted_phone_number,reviews&key={$api_key}";
//    $url = "https://maps.googleapis.com/maps/api/place/details/json?placeid={$place_id}&key={$api_key}";
//    $url = "https://maps.googleapis.com/maps/api/place/details/json?key={$api_key}&placeid={$place_id}";

    $accountId = '992351312629723823';
    $locationId = 'ChIJqz8fdX4PIUcRXGacHrrSQF4';

//    $url = "https://mybusiness.googleapis.com/v4/accounts/{$accountId}/locations/{$locationId}/reviews";
//    $url = "https://mybusiness.googleapis.com/v4/accounts/{$accountId}/locations/{$locationId}/reviews";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($ch);
    $res = json_decode($result, true);


    $reviews = $res['result']['reviews'];

    echo json_encode($reviews);
} ?>