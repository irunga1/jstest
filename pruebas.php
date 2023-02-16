<?php
$myArray = array(1,2,2,4,5,6,7,8,8,8);
$nArray = array_unique($myArray);
$nArray = array_values($nArray);
// echo "<pre>";
// print_r($nArray);
// echo "</pre>";
$cont = 0;
$arr = [];
for($j = 0;$j<count($nArray);$j++){
    $tmp = $nArray[$j];
    //echo $tmp."<br> ";
    for($i =0;$i<count($myArray);$i++){
        // echo $tmp."--",$myArray[$i]."--<br>";
        if($tmp == $myArray[$i]){            
            $arr[$tmp] =$arr[$tmp]+1;
        }
        

        
    }    
    $cont =0;
    // echo $cont."<br>";

    

    //echo $it;
}
echo "Longest: ".max($arr)."<br>";
$arr = array_values($arr);
echo "Number: ".max($arr);

?>