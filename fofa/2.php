<meta charset="utf-8">
<form action="" method="POST">
<input type="text" name="a">
<input type="submit" name="sub" >
</form>

<?php
$ww=$_GET['f'];

$a=$_GET['x'];
//echo $a;
if($a){
 $url="http://127.0.0.1/6699/".$a."";
$data=file_get_contents($url);
 //echo $data;
 preg_match_all("/<li><a href=\'(.*?)\'>(.*?)<\/a><\/li>/s",$data,$mm);
 //print_r($mm[1]);
  $yy=preg_replace("/<([^p].*?)>/","",$mm[2]);
  //print_r($yy);

$ss="./fofa/{$ww}/{$ww}.html";
	
	$ss=iconv('utf-8','gbk',$ss);
	//echo $ss;
	if(!file_exists($ss)){
$aa=fopen($ss,"w+");
	}
fwrite($aa,"<meta charset='utf-8'><head><style>*{margin:0;padding:0;background:#ECF5FF;} li{list-style:none;}
 li a{text-decoration:none;text-align:center;display:block;font-family:'微软雅黑';font-size:28px;} 
 a:hover{color:black;background:yellow;}</style></head>");
fwrite($aa,"<center><a href='<script>window.history.back(-1);</script>'>返回上页</a></center>");
 fwrite($aa,"<hr>");
 foreach($mm[1] as $k=>$va){
  $ttt=$yy[$k];
	
	$s="./fofa/$ww/$ttt";
	
	$s=iconv('utf-8','gbk',$s);
	echo $s;
	if(!file_exists($s)){
	mkdir($s);
	}
	
	echo "<li><a href='3.php?v={$va}&i={$ww}&o={$yy[$k]}'>{$yy[$k]}</a></li>";
	fwrite($aa,"<hr>");
	fwrite($aa,"<br><br><center><li><a href='./{$yy[$k]}/{$yy[$k]}.html'>{$yy[$k]}</a></li></center><br><br>");
	}
	
fclose($aa);
}


?>