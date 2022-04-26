function fecha (callback1){
  console.log(new Date);
  setTimeout( function () {
  let date = new Date;
  callback1(date);
  },3000)
}

function printDate (dateNow){
    console.log(dateNow);
}

date(printDate);