function idealWeight(){
    var  gender = document.querySelector('input[name="genders"]:checked').value; 
    var temp1 = document.getElementById("feet");
    var feet = temp1.options[temp1.selectedIndex].value;
    var temp2 = document.getElementById("inches");
    var inch = temp2.options[temp2.selectedIndex].value;
    if(gender=="1"){
        
        switch(feet){
            case "5" :
                var w = (56.2+((1.41)*inch)).toFixed(2);
                document.getElementById("weightCalculated").value = w + "kgs";
                break;
            case "6" :
                alert(feet);
                var w = (73.12+((1.41)*inch)).toFixed(2);
                document.getElementById("weightCalculated").value = w + "kgs";
                break;
            case "7" :
                var w = (90.0+((1.41)*inch)).toFixed(2);
                document.getElementById("weightCalculated").value = w + "kgs";
                break;
            case "8" :
                var w = (106+((1.41)*inch)).toFixed(2);
                document.getElementById("weightCalculated").value = w + "kgs";
                break;
        
    }
}
    else 
    {       
        switch(feet){
        case "5" :
                var w = (53.1+((1.36)*inch)).toFixed(2);
                document.getElementById("weightCalculated").value = w + "kgs";
                 break;
            case "6" :
                var w = (72.2+((1.36)*inch)).toFixed(2);
                document.getElementById("weightCalculated").value = w + "kgs";
                 break;
            case "7" :
                var w = (88.5+((1.36)*inch)).toFixed(2);
                document.getElementById("weightCalculated").value = w + "kgs";
                 break;
            case "8" :
                var w = (104.8+((1.36)*inch)).toFixed(2);
                document.getElementById("weightCalculated").value = w + "kgs";
                 break;
        
    }
}
}
function clearWeight(){
    document.getElementById("weightCalculated").value = " ";
}