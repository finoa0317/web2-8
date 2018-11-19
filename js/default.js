var separate_time = funcition(time){
  var sec   = time.getSeconds();
  var min   = time.getMinutes();
  var hours = time.getHours();
  var days  = time.getDate();
  var month = time.getMonth();
  var year  = time.getFullYear();
  return [sec, min, hours, days, month, year];
}

var now = new Date();
varcounter = separate_time(now);
document.getElementById('form').select.onchange = function(){
  locaton.href = document.getElementById('form').select.value;
}
document.getElementById('countdown').textCountent =
  counter[5] + '年' +
  counter[4] + '月' +
  counter[3] + '日' +
  counter[2] + '時' +
  counter[1] + '分' +
  counter[0] + '秒' ;
