<meta charset="utf-8">
<a href="wenjian.php">总部</a>
<?php


$c=$_GET['g'];


$qq=explode("=",$c);


$e="{$qq[0]}={$qq[1]}";



$qq[1]--;
if($e){
 $urli="http://127.0.0.1/6699/".$e."";
 //$url="http://127.0.0.1/6699/set.php?id=5428";
$datas=file_get_contents($urli);
 //echo $data;
 $t=$_GET['p'];

 
 preg_match("/<div id=\"main\">(.*?)<\/div>/s",$datas,$mm);
 preg_match("/<div class=\"ahtcy_content\">(.*?)<br>/s",$mm[0],$mmm);
//echo $mmm[1]."<br>";
$yy=substr($mmm[1],17);
//echo $mmmm[0];
 $tt="./fofa/般若部/般若部诸经短篇汇集/{$yy}.html";
// echo $tt;
 $tt=iconv('utf-8','gbk',$tt);
 //echo $tt;
 if(!file_exists($tt)){
 $s=fopen($tt,"w+");
 }
 /* $wushi=substr($mmm[0],80);
 echo $wushi; */
 echo "<a href='4.php?g={$qq[0]}={$qq[1]}'>{$mm[0]}</a>";
fwrite($s,"<meta charset='utf-8'><head><style>*{margin:0;padding:0;background:#ECF5FF;}.sss{font-family:'微软雅黑';
     font-size:22px;padding:10px 10px 10px 10px;}</style></head>");
fwrite($s,"<center><a href='<script>window.history.back(-1);</script>'>返回上页</a></center>");
fwrite($s,"<hr>");
fwrite($s,"<div class='sss'>{$mm[0]}</div>");
fwrite($s,"<hr>");
fwrite($s,"<center><div class='sss'>回向:愿此功德种善根，累世怨亲同沾恩。由斯解脱诸苦恼，共证菩提度有情。</div></center>");
fclose($s);
}
//<li><a href='set.php?id=48'>佛说阿含正行经 </a></li>








?>