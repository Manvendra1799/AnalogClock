setInterval(()=>{

   
    //creating new Date object, which holds the current date and time
    date = new Date();
    //This gets the current hour(0 to 23)
    htime = date.getHours();
    //This gets the current minutes(0 to 59)
    mtime = date.getMinutes();
    //This gets the current seconds(0 to 59)
    stime = date.getSeconds();

    //rotation logic
    Hrotation = 30*htime + mtime/2;//hour hand
    Mrotation = 6*mtime;//minute hand
    Srotation = 6*stime;//second hand


    //This is finally applying rotation to the clock hands.
    hourHand.style.transform = `rotate(${Hrotation}deg)`;
    minuteHand.style.transform = `rotate(${Mrotation}deg)`;
    secondHand.style.transform = `rotate(${Srotation}deg)`;






},1000);