  function GetQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
    var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则
    var context = "";  
    if (r != null)  
         context = r[2];  
    reg = null;  
    r = null;  
    return context == null || context == "" || context == "undefined" ? "" : context;  
}
if(GetQueryString("v")==1){
document.write("<li><a href='http://player.youku.com/embed/XMzA2NDg5OTQ2OA==' target='donghua'>星雲大師《金剛經大義》【全集】</a></li>");
}
if(GetQueryString("v")==2){
document.write("<li><a href='http://player.youku.com/embed/XMjYzMzMzODAyNA==' target='donghua'>《金刚经》 第一讲</a></li>",
"<li><a href='http://player.youku.com/embed/XMjYzMzM0MDYwOA==' target='donghua'>《金刚经》 第二讲</a></li>",
"<li><a href='http://player.youku.com/embed/XMjYzMzM0MTE4OA==' target='donghua'>《金刚经》 第三讲</a></li>",
"<li><a href='http://player.youku.com/embed/XMjYzMzM0MTY4NA==' target='donghua'>《金刚经》 第四讲</a></li>",
"<li><a href='http://player.youku.com/embed/XMjYzMzQ2NTk3Ng==' target='donghua'>《金刚经》 第五讲</a></li>",
"<li><a href='http://player.youku.com/embed/XMjYzMzY5NzY2OA==' target='donghua'>《金刚经》 第六讲</a></li>",
"<li><a href='http://player.youku.com/embed/XMjYzMzkwNTYwMA==' target='donghua'>《金刚经》 第七讲</a></li>",
"<li><a href='http://player.youku.com/embed/XMjYzNDAzODQ0MA==' target='donghua'>《金刚经》 圆满讲</a></li>"
);
}
if(GetQueryString("v")==3){
document.write("<li><a href='http://player.youku.com/embed/XMjgyNjM4MzUwNA==' target='donghua'>断烦恼的金刚经（第一讲）--妙华法师_高清</a></li>",

"<li><a href='http://player.youku.com/embed/XMjgyNjI5NjIxNg==' target='donghua'>断烦恼的金刚经（第二讲）---妙华法师_高清</a></li>",

"<li><a href='http://player.youku.com/embed/XMjY4Nzk4NDE3Mg==' target='donghua'>断烦恼的金刚经（第三讲）--妙华法师</a></li>",

"<li><a href='http://player.youku.com/embed/XMjgyNjM1ODUyOA==' target='donghua'>断烦恼的金刚经（第四讲）---妙华法师_高清</a></li>",

"<li><a href='http://player.youku.com/embed/XMzYxNTYyNDUxNg==' target='donghua'>断烦恼的金刚经（第五讲）--妙华法师_高清</a></li>",

"<li><a href='http://player.youku.com/embed/XMjgyNjMwMDExNg==' target='donghua'>断烦恼的金刚经（第六讲）--妙华法师_高清</a></li>",

"<li><a href='http://player.youku.com/embed/XMjY4ODAwNTcwOA==' target='donghua'>断烦恼的金刚经（第七讲）---妙华法师</a></li>",

"<li><a href='http://player.youku.com/embed/XMjY4ODAxMTg2MA==' target='donghua'>断烦恼的金刚经（第八讲）---妙华法师</a></li>");
}
if(GetQueryString("v")==4){
document.write("<li><a href='http://player.youku.com/embed/XMjY0MDk0MDQzNg==' target='donghua'>北京大学 刘丰教授《金刚经与科学》完整版_佛学讲座_超清</a></li>");
}
if(GetQueryString("v")==5){
document.write(
"<li><a href='http://player.youku.com/embed/XMzYyODgxMTkyMA==' target='donghua'>金刚经讲记 第1集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgxNDE2NA==' target='donghua'>金刚经讲记 第2集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgxNDg3Ng==' target='donghua'>金刚经讲记 第3集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgxNDkxMg==' target='donghua'>金刚经讲记 第4集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgxNDk4OA==' target='donghua'>金刚经讲记 第5集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgxNTA2NA==' target='donghua'>金刚经讲记 第6集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgxNTE0OA==' target='donghua'>金刚经讲记 第7集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgxNTIxMg==' target='donghua'>金刚经讲记 第8集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgxNTMxMg==' target='donghua'>金刚经讲记 第9集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgxNTM4MA==' target='donghua'>金刚经讲记 第10集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgzMjExNg==' target='donghua'>金刚经讲记 第11集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgzMjM0MA==' target='donghua'>金刚经讲记 第12集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgzNDQ1Mg==' target='donghua'>金刚经讲记 第13集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgzNDUyMA==' target='donghua'>金刚经讲记 第14集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgzNDU2OA==' target='donghua'>金刚经讲记 第15集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgzNDY3Ng==' target='donghua'>金刚经讲记 第16集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgzNTY5Ng==' target='donghua'>金刚经讲记 第17集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgzNTc3Mg==' target='donghua'>金刚经讲记 第18集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgzNTkwNA==' target='donghua'>金刚经讲记 第19集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyODgzNzY0NA==' target='donghua'>金刚经讲记 第20集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyOTI2MjgyMA==' target='donghua'>金刚经讲记 第21集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyOTI2MzMxMg==' target='donghua'>金刚经讲记 第22集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MjgxNzExMg==' target='donghua'>金刚经讲记 第23集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MTk0MTY4NA==' target='donghua'>金刚经讲记 第24集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MjEzMzU4MA==' target='donghua'>金刚经讲记 第25集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MjE4NTUxMg==' target='donghua'>金刚经讲记 第26集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MjIzNDMxNg==' target='donghua'>金刚经讲记 第27集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MjgxODEyMA==' target='donghua'>金刚经讲记 第28集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MjgxODkzMg==' target='donghua'>金刚经讲记 第29集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MjgxOTkyOA==' target='donghua'>金刚经讲记 第30集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MjgzOTU3Ng==' target='donghua'>金刚经讲记 第31集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MjgzOTkyNA==' target='donghua'>金刚经讲记 第32集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1Mjg0MDE0MA==' target='donghua'>金刚经讲记 第33集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1Mjg0MDQyMA==' target='donghua'>金刚经讲记 第34集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyOTU0NTcxNg==' target='donghua'>金刚经讲记 第35集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MjkyMTI3Ng==' target='donghua'>金刚经讲记 第36集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MjkyMjIzNg==' target='donghua'>金刚经讲记 第37集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MjkyMzEzNg==' target='donghua'>金刚经讲记 第38集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1MjkyNDA2MA==' target='donghua'>金刚经讲记 第39集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyOTc2MDIwNA==' target='donghua'>金刚经讲记 第40集</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1Mjk2MTU2MA==' target='donghua'>金刚经讲记 第41集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1Mjk2MTc2OA==' target='donghua'>金刚经讲记 第42集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1Mjk2MjAyNA==' target='donghua'>金刚经讲记 第43集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1Mjk2MjE4NA==' target='donghua'>金刚经讲记 第44集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1Mjk2MjYyOA==' target='donghua'>金刚经讲记 第45集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODI4NTU2MA==' target='donghua'>金刚经讲记 第46集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODI4NzQ2NA==' target='donghua'>金刚经讲记 第47集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODI4ODQwOA==' target='donghua'>金刚经讲记 第48集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODI4OTEwMA==' target='donghua'>金刚经讲记 第49集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODI5MDQ1Ng==' target='donghua'>金刚经讲记 第50集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODI5MTg4MA==' target='donghua'>金刚经讲记 第51集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODI5MTk3Mg==' target='donghua'>金刚经讲记 第52集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODI5MjAzMg==' target='donghua'>金刚经讲记 第53集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODI5MjExMg==' target='donghua'>金刚经讲记 第54集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODI5MjE3Mg==' target='donghua'>金刚经讲记 第55集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODMyMjc3Ng==' target='donghua'>金刚经讲记 第56集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODMyMzQ4MA==' target='donghua'>金刚经讲记 第57集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODMyMzU0NA==' target='donghua'>金刚经讲记 第58集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODMyMzYxMg==' target='donghua'>金刚经讲记 第59集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODMyMzY1Ng==' target='donghua'>金刚经讲记 第60集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODMyMzc3Mg==' target='donghua'>金刚经讲记 第61集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODMyMzg3Ng==' target='donghua'>金刚经讲记 第62集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODMyMzk3Mg==' target='donghua'>金刚经讲记 第63集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODMyNDA2NA==' target='donghua'>金刚经讲记 第64集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODMyNDE4MA==' target='donghua'>金刚经讲记 第65集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM2NDk4MA==' target='donghua'>金刚经讲记 第66集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM2NTA1Ng==' target='donghua'>金刚经讲记 第67集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM2NTEyNA==' target='donghua'>金刚经讲记 第68集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM2NTIxNg==' target='donghua'>金刚经讲记 第69集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM2NTM1Mg==' target='donghua'>金刚经讲记 第70集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyOTc0MjI4OA==' target='donghua'>金刚经讲记 第71集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyOTc0MjY4OA==' target='donghua'>金刚经讲记 第72集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM2OTI5Ng==' target='donghua'>金刚经讲记 第73集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyOTc0Mjg0MA==' target='donghua'>金刚经讲记 第74集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM2OTg2OA==' target='donghua'>金刚经讲记 第75集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM3ODQyOA==' target='donghua'>金刚经讲记 第76集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM3ODc4MA==' target='donghua'>金刚经讲记 第77集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM4MTEwNA==' target='donghua'>金刚经讲记 第78集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM4MTIxNg==' target='donghua'>金刚经讲记 第79集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM4MTM0OA==' target='donghua'>金刚经讲记 第80集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyOTgyMjE0OA==' target='donghua'>金刚经讲记 第81集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM5NTgwOA==' target='donghua'>金刚经讲记 第82集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM5NjAwNA==' target='donghua'>金刚经讲记 第83集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODM5NjY2OA==' target='donghua'>金刚经讲记 第84集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyOTgyMzA0NA==' target='donghua'>金刚经讲记 第85集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyOTgyNzMxNg==' target='donghua'>金刚经讲记 第86集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQwMDE2MA==' target='donghua'>金刚经讲记 第87集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQwMDI4OA==' target='donghua'>金刚经讲记 第88集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQwMDQ0MA==' target='donghua'>金刚经讲记 第89集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQwMDg1Ng==' target='donghua'>金刚经讲记 第90集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ0MTczNg==' target='donghua'>金刚经讲记 第91集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ0MTg0MA==' target='donghua'>金刚经讲记 第92集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ0MTkwOA==' target='donghua'>金刚经讲记 第93集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ0MjAwNA==' target='donghua'>金刚经讲记 第94集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ0MjAzMg==' target='donghua'>金刚经讲记 第95集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ0MjE0MA==' target='donghua'>金刚经讲记 第96集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ0NjIwMA==' target='donghua'>金刚经讲记 第97集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ0Njg1Mg==' target='donghua'>金刚经讲记 第98集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ0NzE2NA==' target='donghua'>金刚经讲记 第99集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ0OTEwOA==' target='donghua'>金刚经讲记 第100集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyOTkzMzA5Mg==' target='donghua'>金刚经讲记 第101集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ1MDU3Mg==' target='donghua'>金刚经讲记 第102集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ1MDgyNA==' target='donghua'>金刚经讲记 第103集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ1MTA4MA==' target='donghua'>金刚经讲记 第104集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODQ1Mjg1Mg==' target='donghua'>金刚经讲记 第105集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODg3NTMxMg==' target='donghua'>金刚经讲记 第106集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODg3NTM0NA==' target='donghua'>金刚经讲记 第107集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODg3NTQ1Ng==' target='donghua'>金刚经讲记 第108集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODg3NTU5Mg==' target='donghua'>金刚经讲记 第109集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODg3NTYxNg==' target='donghua'>金刚经讲记 第110集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODg3NTY4OA==' target='donghua'>金刚经讲记 第111集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODg3NTcxNg==' target='donghua'>金刚经讲记 第112集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODg3NTc1Mg==' target='donghua'>金刚经讲记 第113集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODg3NTgxMg==' target='donghua'>金刚经讲记 第114集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc1ODg3NTg2MA==' target='donghua'>金刚经讲记 第115集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc2MDI3NjA4NA==' target='donghua'>金刚经讲记 第116集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc2MDI3NjE0NA==' target='donghua'>金刚经讲记 第117集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc2MDI3NjI0NA==' target='donghua'>金刚经讲记 第118集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc2MDI3NjQwMA==' target='donghua'>金刚经讲记 第119集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc2MDI3NjUyNA==' target='donghua'>金刚经讲记 第120集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc2MTkyMTY0MA==' target='donghua'>金刚经讲记 第121集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc2MDI3NzUyOA==' target='donghua'>金刚经讲记 第122集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzYyOTk4NTc0NA==' target='donghua'>金刚经讲记 第123集--净空法师</a></li>",
"<li><a href='http://player.youku.com/embed/XMzc2MDI3NzU4NA==' target='donghua'>金刚经讲记 第124集--净空法师</a></li>");
}
if(GetQueryString("v")==6){
document.write(
"<li><a href='http://player.youku.com/embed/XNzQ4MDEzMDA4' target='donghua'>金刚经讲解第一集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzQ5MzUxODMy' target='donghua'>金刚经讲解第二集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzUwMzI0MjAw' target='donghua'>金刚经讲解第三集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzUwOTIxMTYw' target='donghua'>金刚经讲解第四集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzUyMTgwMDIw' target='donghua'>金刚经讲解第五集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzUzMTE0OTAw' target='donghua'>金刚经讲解第六集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzUzNjMwMDQ0' target='donghua'>金刚经讲解第七集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzU0NDM0MjA4' target='donghua'>金刚经讲解第八集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzU2NjcyMDI0' target='donghua'>金刚经讲解第九集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzU3NjAxMjg4' target='donghua'>金刚经讲解第十集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzU4NjU5MTY4' target='donghua'>金刚经讲解第十一集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzU5Njg2NjY0' target='donghua'>金刚经讲解第十二集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzYwOTY1NzQ0' target='donghua'>金刚经讲解第十三集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzYyMTc2MzIw' target='donghua'>金刚经讲解第十四集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzYzNjkwOTg4' target='donghua'>金刚经讲解第十五集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzY0NzQ5MDA0' target='donghua'>金刚经讲解第十六集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzcwMzQ3MTI0' target='donghua'>金刚经讲解第十七集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzczMzMzMzEy' target='donghua'>金刚经讲解第十八集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzc2OTE4Mzgw' target='donghua'>金刚经讲解第十九集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzc3NzM4OTcy' target='donghua'>金刚经讲解第二十集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzgyOTE4MzUy' target='donghua'>金刚经讲解第二十一集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzgzODQ3NTYw' target='donghua'>金刚经讲解第二十二集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzg2Nzk4ODE2' target='donghua'>金刚经讲解第二十三集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzg4MjYwNTgw' target='donghua'>金刚经讲解第二十四集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzkwNDY0NTUy' target='donghua'>金刚经讲解第二十五集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzkzMzA5MTcy' target='donghua'>金刚经讲解第二十六集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzk1ODEwNjAw' target='donghua'>金刚经讲解第二十七集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzk3MzAwMjY0' target='donghua'>金刚经讲解第二十八集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzk4NDU2MTcy' target='donghua'>金刚经讲解第二十九集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XNzk5NzExNzYw' target='donghua'>金刚经讲解第三十集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XODAyMzQxNzg4' target='donghua'>金刚经讲解第三十一集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XODAyNTY3MDM2' target='donghua'>金刚经讲解第三十二集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XODAzOTg4MTI0' target='donghua'>金刚经讲解第三十三集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XODA1MTg4ODYw' target='donghua'>金刚经讲解第三十四集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XODA2MDk3ODMy' target='donghua'>金刚经讲解第三十五集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XODA3OTYwNzky' target='donghua'>金刚经讲解第三十六集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XODA5MDY1ODg0' target='donghua'>金刚经讲解第三十七集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XODEwOTM2MDEy' target='donghua'>金刚经讲解第三十八集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XODEyNjcwNDEy' target='donghua'>金刚经讲解第三十九集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XODEzMjU1NzQw' target='donghua'>金刚经讲解第四十集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XODE1MDI2NjQ4' target='donghua'>金刚经讲解第四十一集（普愿讲堂）</a></li>",
"<li><a href='http://player.youku.com/embed/XODE2NDMwNjgw' target='donghua'>金刚经讲解第四十二集（普愿讲堂）</a></li>");
}