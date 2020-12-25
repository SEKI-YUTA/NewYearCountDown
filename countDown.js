
const $now = document.getElementById('now');
const $newYear = document.getElementById('countDown')
console.log($newYear);
const startTime = Date.now('countDown');
const nextYear = new Date(2021,0,1,0,0,0);

let goal = nextYear.getTime();
console.log(goal);


function updateNow() {
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let diff2Days = goal - today.getTime();

  $now.innerText = "現在の日時" + year + "年" + month + "月" + day + "日" + hour + "時" + minute + "分" + second + "秒"; 

    let dDays  = diff2Days / ( 1000 * 60 * 60 * 24 );   // 日数
    diff2Days = diff2Days % ( 1000 * 60 * 60 * 24 );
    let dHour  = diff2Days / ( 1000 * 60 * 60 );   // 時間
    diff2Days = diff2Days % ( 1000 * 60 * 60 );
    let dMin   = diff2Days / ( 1000 * 60 );   // 分
    diff2Days = diff2Days % ( 1000 * 60 );
    let dSec   = diff2Days / 1000;   // 秒
    let msg2 = Math.floor(dDays) + "日"
            + Math.floor(dHour) + "時間"
            + Math.floor(dMin) + "分"
            + Math.floor(dSec) + "秒";
    console.log(msg2);
    $newYear.innerText = msg2;
}

function showDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  console.log(year + "年" + month + "月" + day + "日" + hour + "時" + minute + "分" + second + "秒");
}
setInterval(updateNow,1000);
showDate(nextYear);