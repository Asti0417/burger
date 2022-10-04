//show1
let btn1=document.querySelector("#show1");
let infoModal01=document.querySelector("#infoModal01");
let close1=document.querySelector("#close1");
btn1.addEventListener("click", function(){
    infoModal01.showModal();
})
close1.addEventListener("click", function(){
    infoModal01.close();
})
//show2
let btn2=document.querySelector("#show2");
let infoModal02=document.querySelector("#infoModal02");
let close2=document.querySelector("#close2");
btn2.addEventListener("click", function(){
    infoModal02.showModal();
})
close2.addEventListener("click", function(){
    infoModal02.close();
})
//show3
let btn=document.querySelector("#show3");
let infoModal=document.querySelector("#infoModal03");
let close=document.querySelector("#close3");
btn.addEventListener("click", function(){
    infoModal.showModal();
})
close.addEventListener("click", function(){
    infoModal.close();
})