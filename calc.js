var screenElement = document.querySelector('.screen');
var buttonsElement = document.querySelector('.buttons');
var btnElement = document.querySelector('.btn');



var numbers = [];
var signs = [];
buttonsElement.addEventListener('click',function(evt){

  var elementClicked = evt.target;
  //alert(clickedElemelent.dataset.value);
  if(elementClicked.dataset.value === 'c'){
    screenElement.innerHTML = "";
  }
  if(elementClicked.dataset.type === "number"){
     numbers.push(elementClicked.dataset.value);
     screenElement.innerHTML += elementClicked.dataset.value;
  }
  else if(elementClicked.dataset.type === "sign" && elementClicked.dataset.value !== "=" && elementClicked.dataset.value !== "c"){

    signs.push(elementClicked.dataset.value);
    screenElement.innerHTML += elementClicked.dataset.value;
  }

  if(elementClicked.dataset.value === "="){
  var answer = Number(numbers[0]);

  for(var i = 1;i<numbers.length;i++){
    var currentValue = Number(numbers[i]);
    var currentSign = signs[i-1];
    if(currentSign === '+'){
      answer = answer + currentValue;
    }
    else if(currentSign=== '-'){
      answer = answer - currentValue;
    }
    else if(currentSign=== '*'){
      answer = answer * currentValue;
    }
    else if(currentSign === '/'){
       answer = answer / currentValue;
    }

  }

  screenElement.innerHTML = answer;
}
});
