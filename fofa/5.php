<meta charset="utf-8">

<form><input type="text" name="dd" value="<?php echo $sss="./fofa/{$_GET['i']}/{$_GET['o']}/"; ?>">
<input type="submit" name="sub">
</form>
<div style="width:100%;">
<div style="width:50%;float:left">
<?php
$b=$_GET['v'];

//echo $a;
if($b){
 $url="http://127.0.0.1/6699/".$b."";
 //$url="http://127.0.0.1/6699/set.php?fenlei=732";
$data=file_get_contents($url);
 //echo $data;
 
 preg_match("/<div id=\"main\">(.*?)<\/div>/s",$data,$m);
 //print_r($m[1]); 
 
preg_match_all("/<li><a href=\'(.*?)\'>(.*?)<\/a><\/li>/is",$m[0],$mm);
  $yy=preg_replace("/<([^p].*?)>/","",$mm[2]);
  $e=preg_replace("/ /","",$yy);
  //print_r($e);
$aa=preg_replace("/fenlei/","id",$mm[1]);
 //print_r($aa);
 $eee=$_GET['f'];
$gg=$_GET['i'];
 $w='./fofa';
 $sss="$w/{$eee}/{$eee}.html";
	
  
	//$sss="{$sss}.html";
	$sss=iconv('utf-8','gbk',$sss);
  echo $sss;
  	if(!file_exists($sss)){
$dd=fopen($sss,"w+");
	}

fwrite($dd,"<meta charset='utf-8'><head><style>*{margin:0;padding:0;background:#ECF5FF;} li{list-style:none;}
 li a{text-decoration:none;text-align:center;display:block;font-family:'微软雅黑';font-size:28px;} 
 a:hover{color:black;background:yellow;}</style></head>");
fwrite($dd,"<center><a href='<script>window.history.back(-1);</script>'>返回上页</a></center>");
 fwrite($dd,"<hr>");
foreach($aa as $k=>$va){
	
	echo "<li><a onclick='.alert(23).' href='3.php?g={$va}&p={$e[$k]}&s={$eee}&d={$gg}'>{$yy[$k]}</a></li>";
    fwrite($dd,"<hr>");
	fwrite($dd,"<br><br><center><li><a href='./{$e[$k]}.html'>{$e[$k]}</a></li></center><br><br>");
	
	} 
fclose($dd);
}
//<li><a href='set.php?id=48'>佛说阿含正行经 </a></li>
//<li><a href='set.php?id=5428'>根本说一切有部毗奈耶出家事卷第四 </a></li>set.php?fenlei=732
?>
</div>
<div style="width:50%;float:right;">
<?php
$c=$_GET['g'];


$qq=explode("=",$c);


$e="{$qq[0]}={$qq[1]}";



$qq[1]--;
//if($e){
 $urli="http://127.0.0.1/6699/".$e."";
 //$url="http://127.0.0.1/6699/set.php?id=5428";
$datas=file_get_contents($urli);
 //echo $data;
 $t=$_GET['p'];
 $l=$_GET['s'];
 $j=$_GET['d'];
 preg_match("/<div id=\"main\">(.*?)<\/div>/s",$datas,$mm);
 preg_match("/<div class=\"ahtcy_content\">(.*?)<br>/s",$mm[0],$mmm);
//echo $mmm[1]."<br>";
$yy=substr($mmm[1],17);
//echo $mmmm[0];
 $tt="./fofa/{$l}/{$t}.html";
// echo $tt;
 $tt=iconv('utf-8','gbk',$tt);
 //echo $tt;
 if(!file_exists($tt)){
 $s=fopen($tt,"w+");
 }
 /* $wushi=substr($mmm[0],80);
 echo $wushi; */
 //echo "<a href='4.php?g={$qq[0]}={$qq[1]}'>{$mm[0]}</a>";
 echo "<a>{$mm[0]}</a>";
fwrite($s,"<meta charset='utf-8'><head><style>*{margin:0;padding:0;background:#ECF5FF;}.sss{font-family:'微软雅黑';
     font-size:22px;padding:10px 10px 10px 10px;}</style></head>");
fwrite($s,"<center><a href='<script>window.history.back(-1);</script>'>返回上页</a></center>");
fwrite($s,"<hr>");
fwrite($s,"<div class='sss'>{$mm[0]}</div>");
fwrite($s,"<hr>");
fwrite($s,"<center><div class='sss'>回向:愿此功德种善根，累世怨亲同沾恩。由此解脱诸苦恼，共证菩提度有情。</div></center>");
fclose($s);
//}
//<li><a href='set.php?id=48'>佛说阿含正行经 </a></li>




?>




















</div>
</div>