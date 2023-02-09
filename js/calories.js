
function bmrcalculate(){
    //var radios=document.getElementsByName("genders");
    var  g = document.querySelector('input[name="genders"]:checked').value; 
    var a = parseInt(document.getElementById("cage").value);
    var w = parseInt(document.getElementById("cweight").value);
    var h = parseInt(document.getElementById("cheight").value);
   if(a <= 0 || a >= 100 || isNaN(a))
    {
        alert("plase enter the age between 1 to 100");
    } 
    else if(w <= 0 || w >= 300 || isNaN(w))
    {
        alert("plase enter the weight between 1 to 300 kgs");
    } 
    else if(h <= 1 || h >= 215 || isNaN(h))
    {
        alert("plase enter the height between 1 to 215 cms");
    } 
    else{
        if(g=="1"){
        var temp = (((w*10)+(6.25*h)-(5*a)+5)).toFixed(2);
        document.getElementById("bmr").value = temp + "calories per day";
    }
    else{
        var temp = ((w*10)+(6.25*h)-(5*a)-161);
        document.getElementById("bmr").value = temp + "calories per day";
    }
}
}

function nutrients(){
    var cal = parseInt(document.getElementById("need").value);
    if(cal == "Null" || isNaN(cal)){
        alert("please enter the value of calories");
    }
    else{
        var grams = (cal/7.716);
        var carb1 = ((grams/100)*55).toFixed(2);
        var carb2 = ((grams/100)*60).toFixed(2);
        var pro1 = ((grams/100)*10).toFixed(2);
        var pro2 = ((grams/100)*15).toFixed(2);
        var fat1 = ((grams/100)*25).toFixed(2);
        var fat2 = ((grams/100)*30).toFixed(2);
        document.getElementById("Carbohydrates").value = carb1 + " - " + carb2 + "grams per day";
        document.getElementById("Proteins").value = pro1 + " - " + pro2 + "grams per day";
        document.getElementById("Fats").value = fat1 + " - " + fat2 + "grams per day";
    }
}
function calClear(){
    document.getElementById("cage").value= " ";
    document.getElementById("cweight").value= " ";
    document.getElementById("cheight").value= " ";
    document.getElementById("bmr").value= " ";
}
function calClear1(){
    document.getElementById("need").value= " ";
    document.getElementById("Carbohydrates").value= " ";
    document.getElementById("Proteins").value= " ";
    document.getElementById("Fats").value= " ";
}