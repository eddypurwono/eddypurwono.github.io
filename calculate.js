var tombol = document.querySelector(".box");
 var input = document.querySelector(".input") ;
	tombol.addEventListener('click', function(data){
       
		  var nilaiklik=data.target.innerText;
		     if(nilaiklik == "C") { input.value ="0"; }
		     else if(nilaiklik == "D") { input.value=input.value.slice('0', -1);}
               else if(nilaiklik == "=") { input.value = eval(input.value);}
		 
            else { input.value= input.value+ nilaiklik;}
		 
}); 
