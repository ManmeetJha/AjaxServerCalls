function showTime()
{
    const date=new Date();
    return date.getHours()+":"+date.getMinutes()+": "+date.getSeconds();
}

function showSessionExpire(){
    console.log("Activity-b : your session expired at "+showTime());
}

console.log("Activity A triggering activity b at "+showTime());
setTimeout(showSessionExpire,5000);
console.log("activity a has triggered activity b at "+showTime()+" will execute after 5 seconds");