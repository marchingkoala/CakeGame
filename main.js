let timer = document.getElementById('timer');
let startbaking = document.getElementsByClassName('start')[0];
let timeleft = 60;
let done = document.getElementsByClassName('done')[0];
let stop = document.getElementsByClassName('stop')[0];
let orderticket = document.getElementById('command');
let countdown;
let occasionArray = ['Birthday', 'Valentine', 'Wedding'];
let flavorArray = ['Cheese', 'Chocolate', 'Strawberry'];
let decoArray = ['Chocolate Truffle', 'Macaron', 'Fruit'];
let cakeflavor = document.getElementsByClassName("cakeflavor")[0];
let occasion = document.getElementsByClassName("occasion")[0];
let deco = document.getElementsByClassName("deco")[0];
let select1 = document.getElementById('select1');
let select2 = document.getElementsByClassName('select2')[0];
let select3 = document.getElementsByClassName('select3')[0];

let isStopped = "play";


let random = Math.floor(Math.random() * decoArray.length);

function makecake(){
    orderticket.innerHTML = `Customer wants a ${occasionArray[random]} ${decoArray[random]} ${flavorArray[random]} Cake!`
}

startbaking.addEventListener('click', function(event){
    let countdown = setInterval(function () {
        if(isStopped === "play"){
            makecake();
            timeleft -= 1;
            timer.innerHTML = timeleft;
        }
        if(isStopped === "stop"){
            location.reload();
        }
        if(isStopped === "done"){
            clearInterval(countdown);
        }
      if (timeleft <= 0) {
        timer.innerHTML = "Where is my Cake????"
        clearInterval(countdown);
      }
    }, 1000);

})

stop.addEventListener('click', function(event){
    event.preventDefault();
    isStopped = "stop";
    location.reload();
})

select1.addEventListener('change', function(event){
    let target = event.target;
    if(target.value === "Birthday"){
        occasion.src = "./image/birthdaycandle.png"
    }else if(target.value === "Wedding"){
        occasion.src = "./image/weddingcandle_true.png";
    }else if(target.value === "Valentine"){
        occasion.src = "./image/valentinecandle.png";
    }

})



select2.addEventListener('change', function(event){
     let target = event.target;
    if (target.value === "Chocolate") {
      cakeflavor.src = "./image/chocolate_cake.png";
    } else if (target.value === "Cheese") {
      cakeflavor.src = "./image/cheesecake.png";
    } else if (target.value === "Strawberry") {
      cakeflavor.src = "./image/strawberry_cake.png";
    }
})


select3.addEventListener("change", function (event) {
  let target = event.target;
  if (target.value === "Fruit") {
    deco.src = "./image/strawberry_ring.png";
  } else if (target.value === "Truffle") {
    deco.src = "./image/chocolate_truffle.png";
  } else if (target.value === "Macaron") {
    deco.src = "./image/macaron_deco.png";
  }
});

done.addEventListener('click', function(event){
    event.preventDefault();
    isStopped = "done";
    let occVal = select1.options[select1.selectedIndex].value;
    let cakeVal = select2.options[select2.selectedIndex].value;
    let decoVal = select3.options[select3.selectedIndex].value;
 
    if(orderticket.innerHTML.includes(occVal)){
      if (orderticket.innerHTML.includes(cakeVal && decoVal))
        orderticket.innerHTML = "Great work! I love this Cake!";
    }else{
        orderticket.innerHTML = "This is not the cake I ordered!"
    }
})
