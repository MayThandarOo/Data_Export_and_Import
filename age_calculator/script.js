function getDOB(){

    //Getting input from html input element
    let data= document.getElementById("inputDob").value;

    // Convert input data to usable format
    // as day,month and year
    let dob = new Date(data);
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();

    //Getting current date and calculation the difference
    let now = 
        new Date(document.getElementById("cdate").value);
    console.log(now);
    let yearDiff = now.getFullYear() - year;
    let monDiff = now.getMonth() - month;
    let dateDiff = now.getDay()-day;

    //Calculation the Age
    if(yearDiff < 0) console.log("invalid date");
    else if(monthDiff > 0){
        
    }

}