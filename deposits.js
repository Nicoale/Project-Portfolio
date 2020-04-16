  function getDetails(){
    let dname = document.getElementById("name");
    let damount=document.getElementById("amount");
    fetch("/deposit", {method: "POST", {name: dname, amount: damount}}).then(()=>{})

}