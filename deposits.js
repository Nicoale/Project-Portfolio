const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');
function getDetails() { 
    let dname = document.getElementById("name").value; 
    let damount = document.getElementById("amount").value; 
    fetch("/deposit", {
        method:"POST",
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
        },
        body: toUrlEncoded({ name: dname, amount: damount})
    })
.then((data) => {
            console.log(data)
        })
 }