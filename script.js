//1
const add_task=()=>{
    let task= document.getElementById("add_task").value;
    console.log(task)
 }

//2
const desc_task=()=>{
    let desc_task= document.getElementById("desc_task").value;
    console.log(desc_task)
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
    document.getElementById('days').value = days_difference;
  }

//https://biplabsinha345.medium.com/how-to-calculate-javascript-difference-between-two-dates-in-days-210eeebf3bb

// 4
