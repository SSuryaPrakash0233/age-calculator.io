let daysH = document.getElementById("date");
let monthH = document.getElementById("month");
let yearH = document.getElementById("year");

let showAge = document.getElementById("show-age");

const btn = document.getElementById("calc-btn");

var today = new Date();



let d = today.getDate();
let m = today.getMonth() ;
let y = today.getFullYear();

let maxDays = 0;
let monthNum = 1;

btn.addEventListener("click", (days, month, year) => {

    days = daysH.value;
    month = monthH.value ;
    year = yearH.value;

    

    if(daysH.value == "" || monthH.value == "" || yearH.value == "" ){

        return alert("Please enter your date of birth properly to calculate your age");
    }

    


    if(m == 1){ //JANUARY
        maxDays = 31;
        monthNum = 1;
    }

    else if(m == 2){ //FEBRUARY
        if(yearH.value % 4 == 0 || (yearH.value % 100 == 0 && yearH.value % 400 == 0))
        
        {
            maxDays = 29;
        }
        else {
            maxDays = 28;
        }
        monthNum = 2;
    }

    else if(m == 3){ //MARCH
        maxDays = 31;
        monthNum = 3;
    }

    else if(m == 4){ //APRIL
        maxDays = 30;
        monthNum = 4;
    }

    else if(m == 5){ //MAY
        maxDays = 31;
        monthNum = 5;
    }

    else if(m == 6){ //JUNE
        maxDays = 30;
        monthNum = 6;
    }

    else if(m == 7){ //JULY
        maxDays = 31;
        monthNum = 7;
    }

    else if(m == 8){ //AUGUST
        maxDays = 31;
        monthNum = 8;
    }

    else if(m == 9){ //SEPTEMBER
        maxDays = 30;
        monthNum = 9;
    }

    else if(m == 10){ //OCTOBER
        maxDays = 31;
        monthNum = 10;
    }

    else if(m == 11){ //NOVEMBER
        maxDays = 30;
        monthNum = 11;
    }

    else if(m == 12){ //DECEMBER
        maxDays = 31;
        monthNum = 12;
    }

    var ageYears = y - year;

    if(m <= month){
        m = m + 12;
    }

    var ageMonths = m - month;

    if(daysH.value >= d){
    var ageDays = (maxDays -d -2);
    }
    else if(daysH.value < d){
        var ageDays = (d -daysH.value );
    }

    

    
       
    

    console.log(`Your age is ${ageYears} y , ${ageMonths} m and ${ageDays} d`);
    

    showAge.innerHTML = `Your age is ${ageYears} y , ${ageMonths} m and ${ageDays} d`;

    

})

