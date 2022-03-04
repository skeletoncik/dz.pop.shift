//Начало

//Подключаем id 
let shift1 = document.getElementById("shift");
let unshift1 = document.getElementById("unshift");
let push1 = document.getElementById("push")
let pop1 = document.getElementById("pop")
let output = document.getElementById("output")

//создаём массив
let list = [1,2,3,44,44]

//функция кнопки shift
shift1.addEventListener("click", ()=>{
    list.shift()
    console.log(list);
    output.innerHTML = list
});

//функция кнопки pop
pop1.addEventListener("click", ()=>{
    list.pop()
    output.innerHTML = list 
});

//input functions
window.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    // output.innerHTML += ;
    output.innerHTML += list;
    unshift1.value = "";
  }
});
window.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
      output.innerHTML += list;
      push1.value = "";
    }
  });

output.innerHTML = list