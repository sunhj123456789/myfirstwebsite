var create1=function()
{


}

create1.prototype.createForm=function(){
var form=new formcreate('form','form1','contact','post');
//console.log(form);

var label1=new label('label',"Enter the name");

var name=new create('input','text','name','name');
//console.log(name);

var br=new br1();
var btn1=new create('input','button','add','btn');


document.body.appendChild(form);
form.append(label1);
form.append(name);
form.append(br);

var label2=new label('label',"Enter the rollno");

var rollno=new create('input','text','rollno','rollno');
//console.log(name);

var br=new br1();

form.append(label2);
form.append(rollno);
form.append(br);


var btn1=new create('input','button','add','btn');


form.append(btn1);

//console.log(form);


}

create1.prototype.validateform=function(){
	
var b;
console.log(b);

var btn=document.getElementById('btn');
console.log(btn);
btn.addEventListener('click',function check(){
b=document.getElementById('name').value;
c=document.getElementById('name').value;

	console.log(b);
	//alert('test');
	if((b==''&& b==null && b=='undefined') ||( c=='' && c==null && c==45))
	{
		alert('please enter the name and rollno');
	}
	
	
	
	else
		alert(b);
	
    }




,false);

};


	
	

	

