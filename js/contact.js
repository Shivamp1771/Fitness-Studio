"use strict";
$(document).ready(function(){
    
    $( "#submit" ).click(function() {
//        $("span").text("");   // clear any previous error messages
        var isValid = true;   // initialize isValid flag
        
        var fname = $("#firstname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        
        if ( fname == "" || fname == NaN)
        {
            isValid = false;
            alert("Please enter your First name.")
        }
        if ( email === "" || !email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/) ) 
        {
            isValid = false;
            alert("Please enter a valid Email.");
        }
        $("#email").focus();
        if ( phone === "" || !phone.match(/^\d{3}-\d{3}-\d{4}$/) ) {
            isValid = false;
            alert("Please enter a phone number in NNN-NNN-NNNN format.");
            $("#phone").focus();
        }
        
         
    });
    
    // set focus on initial load
    $("#firstname").focus();
});

