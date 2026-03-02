<!DOCTYPE html>
<html lang="en">
    <body>
        <?php

$items = array(
    array("qty" => 2, "desc" => "ITEM 1", "amt" => 100),
    array("qty" => 7, "desc" => "ITEM 2", "amt" => 35),
    array("qty" => 1, "desc" => "ITEM 3", "amt" => 350),
    array("qty" => 2, "desc" => "ITEM 4", "amt" => 20)
);

$overallTotal = 0;

echo "<pre>";
echo "QTY DESC AMT TOTAL \n";
echo "---------------------- \n";

foreach ($items as $item) {

    $qty = $item["qty"];
    $desc = $item["desc"];
    $amt = $item["amt"];

    $total = $qty * $amt;
    $overallTotal = $overallTotal + $total;

    echo "$qty $desc $amt $total \n";
}

echo "---------------------- \n";
echo "Overall Total: Php $overallTotal";
echo "</pre>";

?>
    </body>
</html>