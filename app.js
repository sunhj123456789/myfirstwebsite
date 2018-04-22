function formcreate(form1,id,name,action)
{
 var element=document.createElement('form1');
 element.id=id;
 element.setAttribute(name,name);
 element.setAttribute(id,id);
 element.setAttribute(action,action);
 return element;
}

var create=function(input,type,name,id){

//var br=document.createElement('br');
 
 var element=document.createElement('input');
 element.type=type;
 element.id=id;
 //element.value=name;
 //element.setAttribute(name,name);
 element.setAttribute(id,id);
 //element.appendChild(br);
 return element;
	
}

var label=function(label,id){
	
	var element=document.createElement('label');
	element.innerHTML=id;
	element.setAttribute("for",id);
	return element;
}

var br1=function()
{
	var element=document.createElement('br');
	return element;
}
