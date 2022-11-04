let myArray = [];

//1 - task1
const add_task=()=>{
    let task1= document.getElementById("task1");
    let add_task = document.getElementById('add_task').value;
    task1.innerHTML = "You have selected " + add_task;
    myArray.push(task1.innerHTML);  //console.log(task1);
 }

//2 - desc1
const desc_task=()=>{
    let desc1= document.getElementById("desc1");
    let desc_task =document.getElementById('desc_task').value;
    desc1.innerHTML = 'This project is about '+ desc_task;
    myArray.push(desc1.innerHTML)

 }

//3 - days
const get_days=()=>{

    let days = document.getElementById("days");
    var start_date = new Date(document.getElementById('start_date').value);
    var end_date = new Date(document.getElementById('end_date').value);
    //Here we will use getTime() function to get the time difference
    var time_difference = end_date.getTime() - start_date.getTime();
    //Here we will divide the above time difference by the no of miliseconds in a day
    var days_difference = time_difference / (1000*3600*24);
    document.getElementById('days').innerHTML += days_difference;
    myArray.push(days.innerHTML)
  }

//https://biplabsinha345.medium.com/how-to-calculate-javascript-difference-between-two-dates-in-days-210eeebf3bb

// 4 - result // iki secim yapinca calismiyor?

const getCheckboxValue=()=>{


  // var result=document.getElementById('result')
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
  myArray.push(document.getElementById("result").innerHTML= "Select any one"
  )}
  myArray.push(document.getElementById("result").innerHTML= "You have selected " + result)
}

//5 - add_all
const body = document.querySelector('body')
var show = document.getElementById('show');
var section = document.createElement('section')
const add_all=()=>{
  var section =
  document.createElement('div')
  body.appendChild(div)
  div.innerHTML= myArray

    // console.log(myArray)
 }



    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify


    //https://stackoverflow.com/questions/62978175/how-to-create-array-of-objects-with-key-value-from-dom-element




