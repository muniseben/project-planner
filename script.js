//1
const add_task=()=>{
    let task= document.getElementById("add_task").value;
    return document.getElementById("task1").innerHTML= "You have selected " + task;
 }

//2
const desc_task=()=>{
    let desc_task= document.getElementById("desc_task").value;
    return document.getElementById("desc1").innerHTML= "You have selected " +desc_task;

 }

//3
function getDays(){

    var start_date = new Date(document.getElementById('start_date').value);
    var end_date = new Date(document.getElementById('end_date').value);
    //Here we will use getTime() function to get the time difference
    var time_difference = end_date.getTime() - start_date.getTime();
    //Here we will divide the above time difference by the no of miliseconds in a day
    var days_difference = time_difference / (1000*3600*24);
    //alert(days);

    document.getElementById('days').innerHTML += days_difference;
  }

//https://biplabsinha345.medium.com/how-to-calculate-javascript-difference-between-two-dates-in-days-210eeebf3bb

// 4 // iki secim yapinca calismiyor?

function getCheckboxValue() {
  var todo= document.getElementById("todo");
  var doing= document.getElementById("doing");
  var done= document.getElementById("done");
  var result= " ";
  if (todo.checked == true){
    var lg1= document.getElementById("todo").value;
    result= lg1 + " ";
  }
  else if (doing.checked == true){
    var lg2= document.getElementById("doing").value;
    result= result + lg2 + " ";
  }
  else if (done.checked == true){
  document.write(result);
    var lg3= document.getElementById("done").value;
    result= result + lg3 ;
  }
   else {
  return document.getElementById("result").innerHTML= "Select any one";
  }
  return document.getElementById("result").innerHTML= "You have selected " + result;
}

//5
// const div = document.createElement('div');
// const body = document.querySelector('body')
// const addAll=()=>{
//   let task= 'hjhjjh';
//   body.appendChild(div)
//   div.innerText=task
// }


const body = document.querySelector('body');
const buttonAll = document.getElementById("buttonAll");
let task1 = document.getElementById("task1")
let desc1 = document.getElementById('desc1')
let days = document.getElementById('days')
let result = document.getElementById('result')


  buttonAll.addEventListener('click',()=>{
    const ul = document.createElement ('ul');
    body.appendChild(ul)
    ul.innerHTML=((JSON.stringify(task1)) +desc1 + days + result )
    })



    // const foo = {
    //   foundation: "Mozilla",
    //   model: "box",
    //   week: 45,
    //   transport: "car",
    //   month: 7,
    // };

    // JSON.stringify(foo, ["week", "month"]);
    // '{"week":45,"month":7}', only keep "week" and "month" properties

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify


    //https://stackoverflow.com/questions/62978175/how-to-create-array-of-objects-with-key-value-from-dom-element




