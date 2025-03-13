function submit_data(answers){
    $.ajax({
        type: "POST",
        url: "/submit_data",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(answers),
        success: function (result) {
            console.log("sent");
            console.log(result)
            // let final_score = result["score"]
            // score = final_score
            // console.log("this is the final score: ", score)
        },
        error: function (request, status, error) {
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}




$(document).ready(function(){
    
    valid_keycodes = [49, 50, 51, 52, 53, 54, 55, 56, 57]

    $(".fill-in").keypress(function(event) {
        
        $("#grid-warning").empty();
        keycode = event.which

        if(($.inArray(keycode,valid_keycodes)) != -1){
            console.log(keycode)
            console.log("This is a valid keycode")
            $("#grid-warning").empty();
        }

        else {
            console.log(keycode)
            console.log("This is not valid keycode")
            let Warning = $("<span></span>");
            Warning.html("Please enter a number from 1 - 9");
            Warning.addClass("redwarning");
            $("#grid-warning").append(Warning);
        }

    });

    $("#submit").click(function(){
        let users_answers = {
            "0": {
                "input": $("#input-0").val(),
            },
        
            "1": {
                "input": $("#input-5").val(),
            },
        
            "2": {
                "input": $("#input-7").val(),
            },
        
            "3": {
                "input": $("#input-9").val(),
            },
        
            "4": {
                "input": $("#input-12").val(),
            },
        
            "5": {
                "input": $("#input-13").val(),
            },
        
            "6": {
                "input": $("#input-17").val(),
            },
        
            "7": {
                "input": $("#input-19").val(),
            },
        
            "8": {
                "input": $("#input-20").val(),
            },
        
            "9": {
                "input": $("#input-21").val(),
            },
        
            "10": {
                "input": $("#input-22").val(),
            },
        
            "11": {
                "input": $("#input-24").val(),
            },
        
            "12": {
                "input": $("#input-25").val(),
            },
        
            "13": {
                "input": $("#input-31").val(),
            },
        
            "14": {
                "input": $("#input-32").val(),
            },
        
            "15": {
                "input": $("#input-33").val(),
            },
        
            "16": {
                "input": $("#input-35").val(),
            },
        }

        console.log("These are the users answers: " , users_answers)
        submit_data(users_answers)

        window.location.href = "http://127.0.0.1:5000/finalscore"


    })
})
