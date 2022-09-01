var slides = document.getElementsByClassName("slide-image");

//Slider move on clicking button
var slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  if (n > slides.length) 
  {slideIndex = 1}
  if (n < 1) 
  {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//Automatic move of slider in 4 sec
var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides2, 4000); // Change image every 4 seconds
}

//Implementing Dynamically Categories part using api
fetch('https://61e51a73595afe00176e5303.mockapi.io/api/sau/Categories_list').then(
  (apidata)=> {
    return apidata.json();
  })
  .then( (cat_list)=>{
    const n=cat_list.length;
let temp=document.getElementById("Category");
let x=1;
for(let i=0; i<n ;i++)
{
  if(cat_list[i].subcat.length==0)
  {
    temp.innerHTML +=`<li class="category_items">
    <img src=${cat_list[i].image} alt="loading image" class="item_image">
    <p class="item_name">${cat_list[i].name}</p>
    </li>`;
  }
  else{
    temp.innerHTML +=`<li class="category_items">
<div class="Sub_cat" onmouseover="add(${x})" onmouseout="remove(${x})" >
 <img src=${cat_list[i].image} alt="loading image" class="item_image">
 <p class="item_name">${cat_list[i].name} <i class="change fa fa-angle-down"></i></p>
    <div class="cat_dropdown none ">
        <div class="cat_pointer"></div>
        <ul id="drop${i}" class="cat_dropdown_list">
        <li class="cat_dropdown_li"><div class="drop_box">${cat_list[3].subcat[0]}</div></li>
        </ul>
     </div>   
  </div>
</li>`
let drop=document.getElementById(`drop${i}`);
  for(let j=0;j<cat_list[i].subcat.length;j++)
   {
      drop.innerHTML +=`<li class="cat_dropdown_li"><div class="drop_box">${cat_list[i].subcat[j]}</div></li>`;
   }
 x++;  
}

}
  })
  .catch((error)=>{
    console.log(error);
  })

//Changing Arrow Direction
let change = document.getElementsByClassName("change");

function add(x){
  change[x].className="change fa fa-angle-up";
}

function remove(x){
  change[x].className="change fa fa-angle-down";
}


//Implementing Product section Dynamically using api

fetch('https://61e51a73595afe00176e5303.mockapi.io/api/sau/Produc_list').then(
  (apidata)=> {
    return apidata.json();
  })
  .then( (pro_list)=>{
    const pro_len=pro_list.length;
let product=document.getElementById("product");
for(let i=0;i<pro_len;i++)
{
  product.innerHTML +=`<div class="card">
  <div class="common-h">
      <div class="head-left">
       <h1>${pro_list[i].name}</h1>
       <h2>${pro_list[i].feature}</h2>
      </div>
      <div class="head-right">
        <button>view all</button>
      </div>
  </div>
  <div id="row${i}" class="common-row">
  </div>
  </div>`;
  const list_len=pro_list[0].list.length;
  let item=document.getElementById(`row${i}`);
  for(let j=0;j<list_len;j++)
  {
    console.log(pro_list[0].list[0].image);
    item.innerHTML +=`<div class="common-col">
    <img src="${pro_list[i].list[j].image}" alt="Product item">
    <h3>${pro_list[i].list[j].brand}</h3>
    <h4>${pro_list[i].list[j].quality}</h4>
    <h6>Now <i class="fa fa-rupee"></i>${pro_list[i].list[j].price}</h6>
    </div>`;
  }
}
  })
  .catch((error)=>{
    console.log(error);
  })

//Design Dynamically footer using api

fetch('https://61e51a73595afe00176e5303.mockapi.io/api/sau/Footer').then(
  (apidata)=> {
    return apidata.json();
  })
  .then((foot)=>{

    const about_l=foot[0].about.length;
let about=document.getElementById("about");
for(let i=0;i<about_l;i++)
{
   about.innerHTML +=`<a class="footer-a" href="#">${foot[0].about[i]}</a>`
}

const help_l=foot[0].help.length;
let help=document.getElementById("help");
for(let i=0;i<help_l;i++)
{
   help.innerHTML +=`<a class="footer-a" href="#">${foot[0].help[i]}</a>`
}

const policy_l=foot[0].policy.length;
let policy=document.getElementById("policy");
for(let i=0;i<policy_l;i++)
{
   policy.innerHTML +=`<a class="footer-a" href="#">${foot[0].policy[i]}</a>`
}

const social_l=foot[0].social.length;
let social=document.getElementById("social");
for(let i=0;i<social_l;i++)
{
   social.innerHTML +=`<a class="footer-a" href="#"><i class="fa fa-${foot[0].social[i].toLowerCase()}"></i> ${foot[0].social[i]}</a>`
}

  })
  .catch((error)=>{
    console.log(error);
  })



