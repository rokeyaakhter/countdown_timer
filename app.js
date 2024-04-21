

document.addEventListener("DOMContentLoaded", function() {
    const endDate = "2024-05-10T07:06:00";
    
    document.getElementById("end-date").innerText = endDate;
    const inputs = document.querySelectorAll("input")
    
    
    function clock(endDate) {
        const end = new Date(endDate);
        const now = new Date();
        const diff = (end - now)/1000;
        console.log(diff);

        if(diff<=0) {
            console.log('happy birthday my dear');
            clearInterval(intervalId);

        }

        else{
        // conveert into days;
        inputs[0].value = Math.floor(diff/3600/24);
        
        // convert into hours
        inputs[1].value = Math.floor(diff/3600);
     
        
        // convert intu min
        inputs[2].value = Math.floor(diff/60);


        // convert into seconds
        inputs[3].value = Math.floor(diff);
        


    }
}
     const intervalId = setInterval(
        () => {clock();

        }, 1000
     );

    // initial call
    clock(endDate);
    setInterval(() => {
        clock(endDate);
    }, 1000);
});



/* we know 
1 day = 24 hrs
1 hour = 60 min
1 hour = 3600 sec
1 min = 60 sec
*/


