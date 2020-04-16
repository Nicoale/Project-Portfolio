function getDetails() { 
    let dname = document.getElementById("name"); 
    let damount = document.getElementById("amount"); 
    fetch("/deposit", {method: "POST",body: { name: dname, amount: damount}}).then((data) => {console.log(data)});
 }