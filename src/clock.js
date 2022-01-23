// clock
const clock = document.querySelector('#clock-show');
const tick = () => {
    //console.log("hello world")
    const now = new Date;
    const show = `The time is : ${now.getHours()}h ${now.getMinutes()}m ${now.getSeconds()}s`
    clock.innerText = show;
    //console.log(now.getHours(), now.getMinutes(), now.getSeconds());
}

setInterval(tick, 1000); // clock
// clock
