<!DOCTYPE html>
<html>
<head>
    <title>Receiptnimama</title>
</head>
<body>

<?php

function generateReceipt($items) {

    $overallTotal = 0;

    echo "<table border='1' cellpadding='5'>";
    echo "<tr>
            <th>QTY</th>
            <th>DESC</th>
            <th>AMT</th>
            <th>TOTAL</th>
          </tr>";

    foreach ($items as $item) {

        $qty = $item["qty"];
        $desc = $item["desc"];
        $amt = $item["amt"];

        $total = $qty * $amt;
        $overallTotal += $total;

        echo "<tr>
                <td>$qty</td>
                <td>$desc</td>
                <td>$amt</td>
                <td>$total</td>
              </tr>";
    }

    echo "<tr>
            <td colspan='3'><strong>Overall Total</strong></td>
            <td><strong>Php $overallTotal</strong></td>
          </tr>";

    echo "</table>";
}

$items = [
    ["qty" => 2, "desc" => "ITEM 1", "amt" => 100],
    ["qty" => 7, "desc" => "ITEM 2", "amt" => 35],
    ["qty" => 1, "desc" => "ITEM 3", "amt" => 350],
    ["qty" => 2, "desc" => "ITEM 4", "amt" => 20]
];

generateReceipt($items);

?>

</body>
</html>