
//
//Author: Wei He
//

//const salesperson = ["Badger Madison"]
//new server functions

/////////////////////////////////////////////////////////////////////////////
//new functions
/*
let warnings=["#namewarning", "#imagewarning","#yearwarning",
                 "#mottowarning", "#affiliationwarning", "#typewarning",
                 "#systemwarning","#introductionwarning"] */


function post(){
    
    //messy but tried
    $("#namewarning").empty();
    $("#imagewarning").empty();
    $("#yearwarning").empty();
    $("#mottowarning").empty();
    $("#affiliationwarning").empty();
    $("#studentwarning").empty();
    $("#typewarning").empty();
    $("#systemwarning").empty();
    $("#introductionwarning").empty();
    $("landscapewarning").empty();
    $("ratingwarning").empty();

    let name_input = $('#name-input').val()
    let name_input_trim = $.trim(name_input)

    let image_input = $('#image-input').val()
    let image_input_trim = $.trim(image_input)

    let landscape_input = $('#landscape-input').val()
    let landscape_input_trim = $.trim(landscape_input)

    let year_input = $('#year-input').val()
    let year_input_trim = $.trim(year_input)

    let motto_input = $('#motto-input').val()
    let motto_input_trim = $.trim(motto_input)

    let affiliation_input = $('#affiliation-input').val()
    let affiliation_input_trim = $.trim(affiliation_input)

    let student_input = $('#student-input').val()
    let student_input_trim = $.trim(student_input)

    let type_input = $('input[name=type-input]:checked').val()
    let type_input_trim = $.trim(type_input)

    let system_input = $('input[name=system-input]:checked').val()
    let system_input_trim = $.trim(system_input)

    let rating_input = $('input[name=rating-input]:checked').val()
    let rating_input_trim = $.trim(rating_input)

    let intro_input = $('#intro-input').val()
    let intro_input_trim = $.trim(intro_input)

    let valid=true

    if(name_input_trim.length == 0){
        let Warning = $("<span></span>");
        Warning.html("Please fill in name");
        Warning.addClass("redwarning");
        $("#namewarning").append(Warning);
        $("#name-input").focus();
        valid=valid & false
    }

    if(image_input_trim.length == 0){
        let Warning = $("<span></span>");
        Warning.html("Please fill in image link");
        Warning.addClass("redwarning");
        $("#imagewarning").append(Warning);
        $("#image-input").focus();
        valid=valid & false
    }

    if(landscape_input_trim.length == 0){
        let Warning = $("<span></span>");
        Warning.html("Please fill in landscape link");
        Warning.addClass("redwarning");
        $("#landscapewarning").append(Warning);
        $("#landscape-input").focus();
        valid=valid & false
    }

    if( isNaN(year_input_trim) || year_input_trim.length==0){
        let Warning = $("<span></span>");
        Warning.html("Please fill in valid year");
        Warning.addClass("redwarning");
        $("#yearwarning").append(Warning);
        $("#year-input").focus();
        valid=valid & false
    }

    if(motto_input_trim.length == 0){
        let Warning = $("<span></span>");
        Warning.html("Please fill in motto");
        Warning.addClass("redwarning");
        $("#mottowarning").append(Warning);
        $("#motto-input").focus();
        valid=valid & false
    }

    if(affiliation_input_trim.length == 0){
        let Warning = $("<span></span>");
        Warning.html("Please fill in affiliation");
        Warning.addClass("redwarning");
        $("#affiliationwarning").append(Warning);
        $("#affiliation-input").focus();
        valid=valid & false
    }

    if(isNaN(student_input_trim) || student_input_trim.length==0){
        let Warning = $("<span></span>");
        Warning.html("Please fill in valid student number");
        Warning.addClass("redwarning");
        $("#studentwarning").append(Warning);
        $("#student-input").focus();
        valid=valid & false
    }

    if(type_input_trim.length == 0){
        let Warning = $("<span></span>");
        Warning.html("Please select school type");
        Warning.addClass("redwarning");
        $("#typewarning").append(Warning);
        $("#type-input").focus();
        valid=valid & false
    }

    if(system_input_trim.length == 0){
        let Warning = $("<span></span>");
        Warning.html("Please select academic system");
        Warning.addClass("redwarning");
        $("#systemwarning").append(Warning);
        $("#system-input").focus();
        valid=valid & false
    }

    if(isNaN(rating_input_trim) || rating_input_trim.length==0){
        let Warning = $("<span></span>");
        Warning.html("Please select a rating");
        Warning.addClass("redwarning");
        $("#ratingwarning").append(Warning);
        $("#rating-input").focus();
        valid=valid & false
    }


    if(intro_input_trim.length == 0){
        let Warning = $("<span></span>");
        Warning.html("Please fill in introduction");
        Warning.addClass("redwarning");
        $("#introductionwarning").append(Warning);
        $("#intro-input").focus();
        valid=valid & false
    }

    console.log(valid)
    if(valid){
        $(".congras").empty();
        let array = affiliation_input_trim.split(",");

        let new_school = {
            "name": name_input_trim,
            "image": image_input_trim,
            "landscape": landscape_input_trim,
            "summary": intro_input,
            "founded_year": year_input_trim,
            "Motto": motto_input_trim,
            "Academic_affiliation":array, 
            "Students":student_input_trim,
            "Type":type_input_trim,
            "System":system_input_trim,
            "rating":rating_input_trim
        }
        console.log(new_school)
        save_school (new_school)

        $('#name-input').val("")
        $('#image-input').val("")
        $('#landscape-input').val("")
        $('#year-input').val("")
        $('#motto-input').val("")
        $('#affiliation-input').val("")
        $('#student-input').val("")

        $('#intro-input').val("")

        $('#name-input').focus()
        $('input[type="radio"]').prop('checked', false);
    }

    $(".congras").empty();
    $(".here").empty();
    valid=true

}

function createLink(id){

    let newbox=$("<span class='item here' >")
    let newlink=$("<a class='link here' href=''>")
    let newUrl = '/view/'+id
    newlink.attr("href", newUrl)
    newlink.html("see it here!")
    newbox.append(newlink)

    $(".here").append(newbox)
                
}



function save_school(new_school){
    let data_to_save = new_school   
    $.ajax({
        type: "POST",          //data upload post                    
        url: "save_school",     //link to server function  // ajax is used            
        dataType : "json",     //datatype 
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_to_save),
        //result return from ajax server
        success: function(result){
            $(".congras").empty();
            $(".here").empty();

            let all_data = result["datas"]
            let new_school = result["new_school"]

            let Warning = $("<span></span>");
            Warning.html("New item successfully created.");
            $(".congras").append(Warning);   
            
            createLink(new_school['id'])
        },

        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}



function redirect_search(search_input) {
    let content = search_input
    if ($.trim(content)==""){
        $("#university-input").val("")
        $('#university-input').focus();
    }
    else{
        $("#university-input").val("")
        console.log("/search_results/"+content)
        window.location.href="/search_results/"+content;
    }    
  }







//sales passed in obj
$(document).ready(function(){
    $(".congras").empty();
    $(".here").empty();
    
    $("#name-input").focus();
    
    $('#clear-button').on('click',function(){
        $('.input').val("");

    })

    $('#submit-button').on('click',function(){
        post()
    })


    $('#university-input').on('input keyup',function(e){
        if(e.which == 13){
            let content=$("#university-input").val()
            redirect_search(content)
        }
    });

    $('#go-button').on('click',function(){
        //console.log($("#university-input").val())
        let content=$("#university-input").val()
        redirect_search(content)
    })



})