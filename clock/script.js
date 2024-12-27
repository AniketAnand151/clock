
function setDate() {
   const now = new Date();


    const getsecond = now.getSeconds();
    const getMinute = now.getMinutes();
    const gethour = now.getHours();
 
    const secondDegree = (getsecond / 60) * 360;
    const minuteDegree = (getMinute / 60) * 360;
    const hourDegree = (gethour / 12) * 360;

    document.querySelector(".second").style.transform = `rotate(${secondDegree}deg)`;

    document.querySelector(".minute").style.transform = `rotate(${minuteDegree}deg)`;

    document.querySelector(".hour").style.transform = `rotate(${hourDegree}deg)`;



}

setInterval(setDate, 1000);

