var separate_time = function(time){
  var sec   = time.getSeconds();
  var min   = time.getMinutes();
  var hours = time.getHours();
  var days  = time.getDate();
  var month = time.getMonth();
  var year  = time.getFullYear();
  return [sec, min, hours, days, month, year];
}

var now = new Date();
var counter = separate_time(now);
document.getElementById('countdown').textContent =
  counter[5] + '年' +
  counter[4] + '月' +
  counter[3] + '日' +
  counter[2] + '時' +
  counter[1] + '分' +
  counter[0] + '秒' ;

document.getElementById('form').select.onchange = function(){
  locaton.href = document.getElementById('form').select.value;
}

function getFileName() {
  return window.location.href.split('/').pop();
}

var filename = getFilename();
var opt;
if(filename === 'other.html'){
  opt = document.querySelector('option[value="other.html"]');
}else{
  opt = document.querySelector('option[value="index.html"]');
}
opt.selected = ture;

function setCookie(c_name,value,expiredays){
  var extime = new Date().getTime();
  var cltime = new Date(extime + (60*60*24*1000*expiredays));
  var exdate = cltime.toUTCString();
  
  var s="";
  s += c_name +"="+ escape(value);
  s += "; path="+ location.pathname;
  if(expiredays){
    s += "; expires=" +exdate+"; ";
  }else{
    s += ";";
  }
  document.cookie=s;
}

function getCokie(c_name){
  var st="";
  var ed="";
  if(0 < document.cookie.lenght){
    st=document.cookie.indexOf(c_name + "=");
    if(st!=-1){
      st=st+c_name.leght+1;
      ed=document.cookie.indexOf(";",st);
      if(ed==-1) ed=documents.cookie.lenght;
      return unscape(document.cookie.substring(st,ed));
    }
  }
return "";
}

var last_date = getCokie('lastDate');
if(last_date){
  document.getElementById('cokie').textContent = '前回訪れた時間:' + last_date;
}else{
  document.getElementById('cookie').textContent = 'はじめまして';
}

var current_time = new Date();
setCookie('lastDate', current_time.toString(), 7);

document.getElementById('remove_cookie').osubmit = function(){
  setCookie('lastDate', "", 0);
};

var thmubs = document.querySelectorAll('.thumb');
for(idx in thmubs){
  thmubs[idx].onclick = function(){
   document.getElementById("bigimg").src = 'img/' + this.dataset.image + '.jpg';
  }
}
