$(document).ready(function() {
    $("#heartrate").submit(function(e) {
        e.preventDefault();
        var age = $("#age").val();
        if(age == "" || age == NaN){
            alert("Please enter a valid Age");
        }
        else{
        
        var hrLow = sixtySecondRate(age, '.50');
        var hrHigh = sixtySecondRate(age, '.85');
        var rHigh = tenSecondRate(age, '.85');
        var rLow = tenSecondRate(age, '.50');
        var ideal = idealRate(age, '.85');
        var maxRate = 220 - age;
    }
        $("#result1").val(maxRate);
        $("#result3").val(hrLow+' - '+hrHigh);
        $("#result2").val(rLow+' - '+rHigh);
        $("#result4").val(ideal);
    });
    function sixtySecondRate(age, intensity) {
    var hrMax = 220 - age;
    var hrRest = 70;
    var result = (((hrMax - hrRest) * intensity) + hrRest).toFixed(1);

    return result;
}
    function tenSecondRate(age, intensity){
        var rMaxim = 220 - age;
        var rRest = 70;
        var result = ((((rMaxim - rRest) * intensity) + rRest)/6).toFixed(1);
        return result;
    }
    function idealRate(age, intensity){
        var maxRate = 220 - age;
        var result = (maxRate * intensity).toFixed(1);
        return result;
    }
});