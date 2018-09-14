<meta charset="utf-8">
<form>
<input type="text" name="a">
</form>
<?php


$u="http://127.0.0.1/6699/";
$datasss=file_get_contents($u);
 //echo $datasss;
 preg_match("/<div class=\"right\">(.*?)<\/div>/isU",$datasss,$bb);

//print_r($bb[0]);



//<li><a href='set.php?fenlei=10'>涅槃部</a></li>
preg_match_all("/<li><a href=\'(.*?)\'>(.*?)<\/a><\/li>/s",$bb[0],$m);
print_r($m[2]);
//$qqq=fopen();
$aa=fopen("111.txt","w+");
foreach($m[1] as $k=>$va){
	$ddd=$m[2][$k];
	$ddd=iconv('utf-8', 'gbk', $ddd);
	if(!file_exists("./fo/$ddd")){
	mkdir("./fo/$ddd");
	}
	//echo "<li><a href='2.php?x={$va}&f={$m[2][$k]}'>{$m[2][$k]}</a></li>";
	echo "<li><a href='5.php?v={$va}&f={$m[2][$k]}'>{$m[2][$k]}</a></li>";
	fwrite($aa,"<li><a href='./fofa/{$m[2][$k]}/{$m[2][$k]}.html'>{$m[2][$k]}</a></li>");
}

fclose($aa);


?>