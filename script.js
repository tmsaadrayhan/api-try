function doSomething(){
    fetch("https://randomuser.me/api/")
    .then(res=> res.json())
    .then(data=> {
        const name= data.results[0].name;
        document.getElementById("name").innerText= `${name.title} ${name.first} ${name.last}`;
        console.log(data);
        
    })
}
doSomething();
/*setInterval(() => {
    doSomething();
}, 2000)*/