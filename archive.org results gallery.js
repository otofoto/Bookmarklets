javascript:var%20sHTML="<html><head><title>gallery</title><body><center><table%20border=0>";var%20y=0;for(x=0;x<document.links.length;x++){a=document.links[x].href;%20if%20(a.match(/jpe|jpeg|jpg|bmp|tiff|tif|bmp|gif|png/i)){sHTML+='<td%20style="border-style:solid;border-width:1px"><a%20target="_new"%20href="'+a.replace("/*/", "/1000/")+'"><img%20border="0"%20width="100"%20src="'+a.replace("/*/", "/1000/")+'"></a></td>';%20if%20(!((x+1)%5))%20sHTML+="</tr><tr>"}};this.innerHTML=sHTML+"</table></center></body></html>";
