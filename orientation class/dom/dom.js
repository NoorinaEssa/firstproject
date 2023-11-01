// const main= document.getElementById("main");
// const add=document.getElementById("add");
// const remove=document.getElementById("remove");

// add.addEventListener("click",()=>{

//     main.style.color="white"
//     main.style.backgroundColor="black"
//     main.style.textAlign="center"
//     main.style.display="block"
// })
// remove.addEventListener("click",()=>{
//     main.classList.remove("main")
//     main.style.display="none"
// })



//mouseover text change

// const heading =document.createElement("h1")
// heading.innerHTML="Ansar lose"


// heading.addEventListener("mouseover",()=>{
//     heading.innerHTML="ArsaLan Akmal sir wins"
//     heading.style.color="red"
//     heading.style.backgroundColor="black"
//     heading.style.textAlign="center"
// })
// heading.addEventListener("mouseleave",()=>{
//     heading.innerHTML="Ansar Ali lose"
// })
// document.body.appendChild(heading);


// //print array

// const students= ["Noorina","sohail","shams","Marina","samina"];

// students.forEach((student)=>{
// const heading =document.createElement("h2");
// heading.innerHTML=students;


// })
// doument.body.appenChild(heading);





//image 

// const image = document.getElementById("image");

// const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54PaOVhyDKyh8or76IA_cHiw7TSIf7I9PSg&usqp=CAU";
// const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Yy8hnobx9XhFNvYV5Y68hBc0jKi8elZBKg&usqp=CAU";

// image.addEventListener("click",function(){
//     if(image.src === img1){
//         image.src = img2;
//         }else{
//             image.src = img1;
//         }
// });






//on off bulb

// const bulbs = document.querySelectorAll('.bulb');

// bulbs.forEach((bulb, index) => {
//     bulb.addEventListener('click', function () {
       
//         bulbs.forEach((otherBulb) => {
//             otherBulb.src = 'https://hyundaipower.com.pk/wp-content/uploads/2023/03/Bulb-Light.jpg';
//         });
//  bulb.src = 'data:image/jpeg;base64,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';
//     });
// });



//print array

// const days= ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday", "Saturday"]

// days.forEach((day)=>{
// const heading =document.createElement("h3");
// heading.innerHTML = day;

// document.body.appendChild(heading);
// })

//print 2 table
// const table= ["1*2=2","2*2=4","3*2=6","4*2=8","5*2=10", "6*2=12", "7*2=14", "8*2=16","9*2=18", "10*2=20"]

// table.forEach((table)=>{
// const heading =document.createElement("h3");
// heading.innerHTML = table;

// document.body.appendChild(heading);
// })




//API FUNCIONS

// const add = async()=>{
//     const data=fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(json=>{
//         return json;
//     })
//     data.forEach((item)=>{
//         const title=document.createElement("h1")
//         const image=document.createElement("img");
//         title.innerHTML=item.title;
//         image.src=item.image;
//         document.body.appendChild(title);
//         document.body.appendChild(image);
        
//     })
//     // console.log(data,"this is from data")
// }
// add();



// const add = async()=>{
//      const data=await fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(json=>{
//    return json;
//      })
//    data.forEach((item)=>{
//     const title=document.createElement("h1")
//     const image=document.createElement("img");
//     title.innerHTML=item.title;
//     image.src=item.image;
//     image.classList.add("img")
    
//     document.body.appendChild(title);
//     document.body.appendChild(image);
//    })
    
//     }


//PROMISE

function mydisplayer(some){
    document.getElementById("demo").innerHTML = some;
}
    let myPromise = new Promise(function(myResolve, myReject) {
let x = 0;
if(x==0){
    myResolve("here is successful");
}else{
    myReject("there is an error");
}


    });
    myPromise.then(
        function(value) {mydisplayer(value);},
        function(error) {mydisplayer(error);},

    )