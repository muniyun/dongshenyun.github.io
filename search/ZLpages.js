/**
*ZL添加
*适用于v9分页
*在模板要分页的列表div上，添加id="idData_0"，id中的0是参数变量
*分页位置添加<div id="barcon_0"></div>
*然后在模板中写js方法调用
  goPage(1,20,0,"Goto");    //1是当前页数，20是每页显示行数，0是idData_0上的0，Goto是跳到当前页面的id=GotoHere位置上（省略不写就不会跳）
*/
  function goPage(pno,psize,m,Goto){
	var itable = document.getElementById("idData_"+m);
	var num =document.getElementById("idData_"+m).getElementsByTagName("li").length;//li个数
	var totalPage = 0;//总页数
	var pageSize = psize;//每页显示行数
        if(typeof(Goto) == "undefined"){
                Goto='';
        }
        if(num<=pageSize){
                document.getElementById("barcon_"+m).innerHTML ="<li>一共 "+num+" 条";
   		return false;
        }
	if((num)/pageSize > parseInt((num)/pageSize)){   
   		totalPage=parseInt((num)/pageSize)+1;   
   	}else{   
   		totalPage=parseInt((num)/pageSize);   
   	}   
	var currentPage = pno;//当前页数
	var startRow = (currentPage - 1) * pageSize;//开始显示的行   
   	var endRow = currentPage * pageSize;//结束显示的行   
   	endRow = (endRow > num)? num : endRow;
	for(var i=0;i<num;i++){
		var irow = document.getElementById("idData_"+m).getElementsByTagName("li")[i];
		if(i>=startRow&&i<endRow){
			irow.style.display = "block";	
		}else{
			irow.style.display = "none";
		}
	}
	var tempStr = "<a class=\"a1\" href=\"#\" target=\"_self\">"+(num)+"条</a> ";
	if(currentPage>1){
		tempStr += "<a class=\"a1\" href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+","+m+",'"+Goto+"')\" target=\"_self\">上一页</a> "
	}else{
		tempStr += "<a class=\"a1\" href=\"#\" target=\"_self\">上一页</a> ";	
	}
	if(totalPage<=7){
		for(var j=1;j<=totalPage;j++){
		    if(j!=currentPage){
		       tempStr += "<a href=\"#\"  onClick=\"goPage("+j+","+psize+","+m+",'"+Goto+"')\" target=\"_self\">"+j+"</a> ";
	        }else{
		       tempStr += "<span>"+j+"</span> ";
	        }
		}
	}else{
		if(currentPage>=7){
			tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+psize+","+m+",'"+Goto+"')\" target=\"_self\">1</a> .. ";
		}
		if(currentPage<7){
		    for(var j=1;j<=7;j++){
			    if(j!=currentPage){
			       tempStr += "<a href=\"#\"  onClick=\"goPage("+j+","+psize+","+m+",'"+Goto+"')\" target=\"_self\">"+j+"</a> ";
		        }else{
			       tempStr += "<span>"+j+"</span> ";
		        }
			}
		}
		if(currentPage>=7&&currentPage<totalPage-2){
		    for(var j=currentPage-3;j<=currentPage+3;j++){
			    if(j!=currentPage){
			       tempStr += "<a href=\"#\"  onClick=\"goPage("+j+","+psize+","+m+",'"+Goto+"')\" target=\"_self\">"+j+"</a> ";
		        }else{
			       tempStr += "<span>"+j+"</span> ";
		        }
			}
		}
		if(currentPage>=7&&currentPage>=totalPage-2){
		    for(var j=totalPage-6;j<=totalPage;j++){
			    if(j!=currentPage){
			       tempStr += "<a href=\"#\"  onClick=\"goPage("+j+","+psize+","+m+",'"+Goto+"')\" target=\"_self\">"+j+"</a> ";
		        }else{
			       tempStr += "<span>"+j+"</span> ";
		        }
			}
		}
		if(totalPage-currentPage>=4){
			tempStr += " .. <a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+","+m+",'"+Goto+"')\" target=\"_self\">"+totalPage+"</a> ";
		}
		if(totalPage==8){
			if(currentPage==5||currentPage==6){
				tempStr += " .. <a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+","+m+",'"+Goto+"')\" target=\"_self\">"+totalPage+"</a> ";
			}
		}
		if(totalPage==9){
			if(currentPage==6){
				tempStr += " .. <a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+","+m+",'"+Goto+"')\" target=\"_self\">"+totalPage+"</a> ";
			}
		}
	}
	if(currentPage<totalPage){
		tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+","+m+",'"+Goto+"')\" target=\"_self\">下一页</a> ";
	}else{
		tempStr += "<a class=\"a1\" href=\"#\" target=\"_self\">下一页</a></li>";	
	}
	document.getElementById("barcon_"+m).innerHTML = tempStr;

        //跳到页面指定位置(迁就已写的碎片)
        if(Goto=="Goto"){
            $("#barcon_"+m+" a").each(function(){
              var thishref=$(this).attr("href")+"GotoHere";
              $(this).attr("href",thishref);
            });
        }
        
        /*按左右键翻页
        document.onkeydown=function(e){
          e=window.event||e;
          switch(e.keyCode){
            case 37: //左键
              if(currentPage>1)
              goPage(currentPage-1,psize,m,Goto);
              break;
            case 39: //右键
              if(currentPage<totalPage)
              goPage(currentPage+1,psize,m,Goto);
              break;
            default:
              break;
          }
        }*/

}
