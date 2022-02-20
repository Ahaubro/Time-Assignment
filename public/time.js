const display = document.getElementById('clock');
const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;


//Function that formats time
function formatTime(time) {
    
    if ( time < 10 ) {

        return '0' + time;
    }
    return time;
}

//Something
//Updates time & displays
function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    display.innerText=`${hour} : ${minutes} : ${seconds}`
}



//Updates time every 1000ms (1 sec)
setInterval(updateTime, 1000);


//Function that sets an alarm - takes value
function setAlarmTime(value) {
    alarmTime = value;
}


// Function that show when you have set and alarm, and what will happen 
function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}


// Function that clears the alarm
function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}


