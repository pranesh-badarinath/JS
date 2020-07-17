console.log("EVEN OR ODD FUNCTION");
let a= console.log(prompt("variable"));
a= Number(a);
let x= evenorodd(a);

if (x==true){
    console.log("even number");
}

function evenorodd(a){
    if (+a%2==0){
         return true;
    
    }
    else{ 
      return false; 
    }
    
}
