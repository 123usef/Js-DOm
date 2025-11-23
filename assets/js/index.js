// console.log(document.getElementsByTagName("h2")[2].textContent);
// let h2s = document.getElementsByTagName("h2");
// console.log(h2s);
// h2s[0].innerHTML = "3nb";
// let head2 = document.getElementById("head-2");
// console.log(head2);
// head2.innerHTML = "bl7";

// let head22 = document.getElementsByClassName("head-22");
// console.log(head22);
// head22[0].innerHTML = "bl7";

// let query = document.querySelector("h2");
// let query1 = document.querySelector(".head-22");
// let query2 = document.querySelector("#head-2");
// let query3 = document.querySelectorAll(".head-22");
// let query4 = document.querySelectorAll("#head-2");
// query2.innerHTML = "<h1 class=''> hello inside javascript query 2</h1>";
// query1.textContent = "<h1> hello from text content query 1 </h1>  ";
// console.log(query);
// console.log(query1);
// console.log(query2);
// console.log(query3);
// console.log(query4);

// let head22 = document.getElementsByClassName("head-22");
// console.log(head22);

// let head22 = document.getElementsByClassName("head-22")[0];
// console.log(head22);

// let head22 = document.getElementsByClassName("head-22");
// console.log(head22);


//-----------------------------------------

// you can select the element and ask the dom 
// which childerens for the elements
let nav = document.getElementById("navbar");
let brand = document.getElementsByClassName("branding");
let btn  =  document.getElementById("nav-btn");
// console.log(nav);

// console.log(nav.childNodes);
// console.log(nav.children);

// console.log(brand);
// console.log(brand[0].parentElement.parentElement);

// console.log(nav.nextElementSibling);
// console.log(nav.previousElementSibling);


// console.log(nav.nextSibling);
// console.log(nav.previousSibling);

//fontSize , backgroundColor

btn.addEventListener("click" , (e)=>{
   console.log(e.target);
    btn.style.color = "red";
    btn.style.fontSize = "20px";
    btn.style.backgroundColor = "yellow";
    btn.textContent="مدوسش عليا انا علي اخري";
})

nav.addEventListener("click" , (e)=>{
    console.log(e.target);
})