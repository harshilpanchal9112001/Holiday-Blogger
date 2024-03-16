$(window).on("load",function(){
    $(".loader-container").fadeOut(1000);
});

$(document).ready(function(){

    $("input").focus(function(){
        $(this).css("cursor","pointer");
    });

    $("#argentina").hide();
    $("#show_1").click(function(){
        $("#argentina").slideToggle()
    });

    $("#peru").hide();
    $("#show_2").click(function(){
        $("#peru").slideToggle()
    });

    $("#australia").hide();
    $("#show_3").click(function(){
        $("#australia").slideToggle()
    });

    $("#newzealand").hide();
    $("#show_4").click(function(){
        $("#newzealand").slideToggle()
    });

    $("#india").hide();
    $("#show_5").click(function(){
        $("#india").slideToggle()
    });

    $("img").dblclick(function(){
        $(".all_image");
        alert("Image width is: " + $("img").attr("width"));
    });

    $("ul").click(function(){
        $("li").each(function(){
            if($(this).text() == 'Home')
            {
                alert("Want to leave ? and go to in next page ?");
            }
            else
            {
                return false;
            }
        });
    });
    
    $(".fa-map-marker-alt").mouseenter(function(){
        $(this).css({"color": "black",
            "transform": "scale(1.05)",
            "transition":"all 0.7s",
            "z-index": "5",
            "position": "relative",
            "text-shadow": "0px 2px 11px black"})
    })

    $(".fa-map-marker-alt").mouseleave(function(){
        $(this).css({"color": "orange","text-shadow":"none"})
    })

});

function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}
function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;	
}
function validateForm(){
    var returnval = true;
    clearErrors();
    var name = document.forms['myForm']["fname"].value;
    if (name.length<2){
        seterror("name", "* Name is too short");
        returnval = false;
    }
    var email = document.forms['myForm']["femail"].value;
    if (email.length>25){
        seterror("email", "* Email is too long");
        returnval = false;
    }
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "* Phone number should be of 10 digits!");
        returnval = false;
    }
    var message = document.forms['myForm']["fmessage"].value;
    if (message.length<10){
        seterror("message", "* Message is too short");
        returnval = false;
    }
    if(returnval == true){
        alert("Message sent successfully");
    }
    return returnval;
}
