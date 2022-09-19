function India(){
var counter = document.getElementById('counter')
for(let i=1; i<12; i++){
setTimeout(function(){
//    i= i+1;
    counter.innerText= i
    counter.style.color="fuchsia" // Count design and show
    counter.style.margin="50px"

    if(i <=10){
        console.log(i)}
        else{
        console.log("HAPPY INDEPENDENCE DAY")
        counter.innerText="HAPPY INDEPENDENCE DAY"
        counter.style.color="red"                   // INDEPENDENCE DAY Design and show
        counter.style.margin="20px"

        image() // calling a function using call back
    }
},1000*i)
}
}

function image(){
    var img = document.getElementById("img")
    img.innerHTML='<img src="./india.gif" alt="India">'  // image show
    img.style.margin="20px"

}