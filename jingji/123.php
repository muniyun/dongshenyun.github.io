<html>
<head>
<meta charset="utf-8">
</head>
<body>

<div>

<form action='' method='POST'>
优酷搜索url:<input type='text' name='url' value='<?php echo $_POST['url']; ?>' style='width:100%;'>
<input type='submit' name='sub'><br>
QQ <br>
vid=:<input type='text' name='q'><br>
title:=<input type='text' name='title'><br>
<input type='submit' name='sub2'><br>
jiangjing.html <br>
v=:<input type='text' name='qq'><br>
images=:<input type='text' name='image'><br>
title:=<input type='text' name='title2'><br>
<input type='submit' name='sub3'><br>
土豆播单url:<input type='text' name='u' value='<?php echo $_POST['u']; ?>' style='width:100%;'>
<input type='submit' name='sub4'><br>
</form>

</div>
<?php
include("fyclass.php");
function curl_get($url){
	$ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_BINARYTRANSFER, true) ;
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
	//curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    $output = curl_exec($ch);
    curl_close($ch);
return $output;
}



//if($_GET['pg']){
	
$url =$_POST['url'];
 
if(empty($url)){
echo "请输入网址";
}else{
	//$urly = "http://so.youku.com/search_video/q_".$url."?spm=a2h0k.11417342.searcharea.dbutton&_t=1531467204592&pg=".$_POST['pg']."";
//$datas = get($url); */
$datass=curl_get($url);
//var_dump($datass);
preg_match_all("/《(.*?)》/is",$datass,$m);
preg_match("/v.youku.com\/v_show\/(.*?).html/U",$datass,$mm);
//v.youku.com/v_show/id_XMzYyMjI3MjIxMg==.html\">《杀蛇成蛇人》<em class=\"hl\">
preg_match_all("/(.*?).html/U",$datass,$mmm);
//print_r($mm[0]);
$yy=preg_replace("/\\\\/","",$mm[1]);
//echo preg_replace("/[0-9]/","",$mm); 
$zz=preg_replace("/n/","",$yy);
$dd=preg_replace("/\s\S/","",$zz);
//print_r($dd[1]);
preg_match_all("/v.youku.com\/v_show\/(.*).html\">(.*)<\/a><\/h2>/U",$dd,$ddd);


	foreach($ddd[1] as $k=>$va){
		//echo $k;
     echo "<li><a href='ji.php?id={$va}'>{$k}{$ddd[2][$k]}</a></li>";
	 $fy=new Page(16,360);
                  }
		$fy->all();				 



}


if($_POST['sub2']){
$f=$_POST['q'];
$s=$_POST['title'];
$d="setshipin.php?j=10&q=".$f."&title=".$s."";
$t="<li><a href={$d}>{$s}</a></li>";
echo $t;
$jil=fopen("999.txt","a+");

fwrite($jil,$t);
fwrite($jil,"\n\r");
fclose($jil);


}
if($_POST['sub3']){
$f=$_POST['qq'];
$s=$_POST['title2'];
$image=$_POST['image'];
//<li><a href="jiangjing.html?v=6&title=星雲大師《金剛經大義》"><img width="144" height="104" src="./images/puyuan.jpg" title="星雲大師《金剛經大義》" alt="星雲大師《金剛經大義》"></a><span><a href="jiangjing.html?v=6&title=星雲大師《金剛經大義》">星雲大師《金剛經大義》</a></span></li> 
$d="jiangjing.html?v=".$f."&title=".$s."";

$t="<li><a href=".$d."><img width='144' height='104' src=".$image." title=".$s." alt=".$s."></a><span><a href=".$d.">".$s."</a></span></li>";
echo $t;
$jil=fopen("999.txt","a+");

fwrite($jil,$t);
fwrite($jil,"\n\r");
fclose($jil);


}


$u =$_POST['u'];
 
if(empty($u)){
echo "请输入网址";
}else{

$datasss=file_get_contents($u);
 
 preg_match_all("/\"videoId\":\"(.*?)\",\"title\":\"(.*?)\",/s",$datasss,$bb);
 $jiluu=fopen("999.txt","a+");
 $e="if(GetQueryString('v')==1){
document.write(";
fwrite($jiluu,$e);
fwrite($jiluu,"\n\r");
 //print_r($bb[2]);
 foreach($bb[1] as $k=>$va){
		//echo $k;
     echo "<li><a href='http://player.youku.com/embed/{$va}'>{$bb[2][$k]}</a></li>";

$t="<li><a href='http://player.youku.com/embed/{$va}' target='donghua'>{$bb[2][$k]}</a></li>";

//<li><a href="setshipin.html?j=2&title=&#20928;&#23447;&#27861;&#38376;-&#24565;&#20315;&#20813;&#27700;&#38590;&#30340;&#31639;&#21629;&#20808;&#29983;&b=XMzMyNjU5MjU3Ng==">&#20928;&#23447;&#27861;&#38376;-&#24565;&#20315;&#20813;&#27700;&#38590;&#30340;&#31639;&#21629;&#20808;&#29983;</a></li>


fwrite($jiluu,'"'.$t.'",');
fwrite($jiluu,"\n\r");



}
$s=");}";
fwrite($jiluu,$s);
fwrite($jiluu,"\n\r");
fwrite($jiluu,"<br>");
fwrite($jiluu,"<li><a href=jiangzuo/jiangjing.html?v=10005&title={$bb[2][1]}>{$bb[2][1]}</a></li>");

fclose($jiluu);
 
}



?>


</body>
</html>