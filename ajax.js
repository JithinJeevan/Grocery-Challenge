var xhr= new XMLHttpRequest();
xhr.open("get","table.json");
document.getElementById("btn").addEventListener("click",function(){
xhr.send();
})
xhr.onreadystatechange= function (){
    if (xhr.readyState==4 && xhr.status==200){

        var aj = JSON.parse(xhr.responseText);
       var its=aj.content;
      var output="";
      for(i=0;i<its.length;i++){
          var result=its[i];
          
          output= output+"<tr><td>"+result.sl+"</td><td>"+result.name+"</td><td>"+result.quant+"</td><td>"+result.unit+"</td><td>"+result.dep+"</td><td>"+result.notes+"</td></tr>";
      
      }
      
      document.getElementById("grocery").innerHTML=output;
    }
}

