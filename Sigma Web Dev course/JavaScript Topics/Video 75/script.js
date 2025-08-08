console.log("Namit is a hacker");
console.log("Rohan is a hecker");


setTimeout(()=> {
    console.log("I am inside settimeout")
}, 0);


setTimeout(()=> {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End"); 

const fn = (params) =>{
    console.log("Nothing")
}

const callback = (arg)=> {
    console.log("arg")
    fn()
}


const loadScript = (src, callback)=>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Namit");
    document.head.append(sc);

}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)