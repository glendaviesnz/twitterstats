<?php
$names = array();
for ($i = 0; $i < 100; $i++ ) {
    $names[$i] = generateRandomString(6);
}
$network = array();
$network['nodes'] = array();
$network['edges'] = array();
$nodes_added = array();

foreach ($names as $key => $name) {
    if (!in_array($name,$nodes_added)) {
        $network['nodes'][] = array('id' => $name, 'label' => '@'.$name,'size' => 1) ;
        $nodes_added[] = $name;
    }
}
foreach ($nodes_added as $key => $name) {
    if ($key < 99) {
        $network['edges'][] = array('id' => (string)$key, 'source' => $name,'target' => $nodes_added[$key+1]);
    }
    $links = rand(1,5);
    for ($i = 0; $i < $links; $i++ ) {
        $random_link = array_rand($nodes_added,1);
        $network['edges'][] = array('id' => $name.$i, 'source' => $name,'target' => $nodes_added[$random_link]);
    }
}
print_r(json_encode($network));
function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}