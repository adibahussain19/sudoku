function practice_submit(answer, practice){

    //console.log(practice.answer.split(","))
    //console.log(answer)


    $("#practice_warning").empty()
    let valid=true

    if(practice.practice_id==1 | practice.practice_id==2){
        let answer_trim = $.trim(answer)
           
        if(answer_trim.length == 0){
            let Warning = $("<span></span>");
            Warning.html("Input cannot be empty");
            Warning.addClass("redwarning");
            $("#practice_warning").append(Warning);
            $("#practice_warning").append($("<br><br>"));
            $(".practice-input").focus();
            valid=valid & false
        }

        if(isNaN(answer_trim)){
            let Warning = $("<span></span>");
            Warning.html("Please only fill in numbers");
            Warning.addClass("redwarning");
            $("#practice_warning").append(Warning);
            $("#practice_warning").append($("<br><br>"));
            $(".practice-input").focus();
            valid=valid & false
        }

        if(valid){
            //check answer
            let Warning = $("<span></span>");
            let answer_text = ''
            if (answer == practice.answer){
                answer_text = practice.correct_statement
                Warning.addClass("greenanswer");
            }
            else{
                answer_text = practice.wrong_statement
                Warning.addClass("redanswer");
            }
    
            
            Warning.html(answer_text);
            
            $("#practice_warning").append(Warning);
            $("#practice_warning").append($("<br><br>"));
        }
            


    }

    else{
        
        for (let i = 0; i<answer.length;i++ ){
            if(answer[i] == practice.answer.split(",")[i]){
            }
            else{
                valid=valid & false
            }
        }
        if(answer.length != practice.answer.split(",").length){
            valid=valid & false
        }

        //check answer
        let Warning = $("<span></span>");
        let answer_text = ''

        if(valid){
            
            answer_text = practice.correct_statement
            Warning.addClass("greenanswer");
        }
        else{
            answer_text = practice.wrong_statement
            Warning.addClass("redanswer");
        }

        Warning.html(answer_text);
            
        $("#practice_warning").append(Warning);
        $("#practice_warning").append($("<br><br>"));
            
        

        
    
    }


    



    valid = true

}



function show_question(practice){
    id = practice.practice_id;

    if(id == 1 || id == 2){

        //because the form of the answer innput is different
        //might need to add the warning part in the section
        //graph size still a big porblem
        let question_text = $("<span id='question_text'>")
        question_text.text(practice.text)
        $("#question_box").append(question_text)

        $("#question_box").append($("<br><br>"))

        let question_answer = $("<label for='question_answer' id='question_answer'>")
        question_answer.text("Answer:")
        
        let question_input = $("<span>&nbsp;&nbsp;&nbsp;<input  name='question_answer' class='practice-input'  placeholder='Please fill in numbers' size='22'>")   
        $("#question_box").append(question_answer)
        $("#question_box").append(question_input)


    }

    else{
        //console.log(practice.question.split(",")[0])

        let question_text = $("<span id='question_text'>")
        question_text.text(practice.text)
        $("#question_box").append(question_text)

        let row = $("<div class='row'>")
        let col1 = $("<div class='col-6'>")



        let num1 = practice.question.split(",")[0]
        //let checkbox = $("<div id='checkbox'>")
        let label1 = $(" <LABEL ></LABEL>")
        label1.text(num1)
        label1.prop('for',num1) 
        let input1 = $("<INPUT TYPE='Checkbox' Name='Browser' >")
        input1.prop('id',num1) 
        input1.prop('value',num1) 
    
        $(row).append(col1)
        $("#question_box").append(row)
        $(col1).append(label1)
        $(col1).append(input1)



        let num2 = practice.question.split(",")[1]
        //let checkbox = $("<div id='checkbox'>")
        let label2 = $(" <LABEL ></LABEL>")
        label2.text(num2)
        label2.prop('for',num2) 
        let input2 = $("<INPUT TYPE='Checkbox' Name='Browser' >")
        input2.prop('id',num2) 
        input2.prop('value',num2) 

        $(col1).append(label2)
        $(col1).append(input2)


        let num3 = practice.question.split(",")[2]
        let label3 = $(" <LABEL ></LABEL>")
        label3.text(num3)
        label3.prop('for',num3) 
        let input3 = $("<INPUT TYPE='Checkbox' Name='Browser' >")
        input3.prop('id',num3) 
        input3.prop('value',num3) 

        $(col1).append(label3)
        $(col1).append(input3)



        let num4 = practice.question.split(",")[3]
        let label4 = $(" <LABEL ></LABEL>")
        label4.text(num4)
        label4.prop('for',num4) 
        let input4 = $("<INPUT TYPE='Checkbox' Name='Browser' >")
        input4.prop('id',num4) 
        input4.prop('value',num4) 

        $(col1).append(label4)
        $(col1).append(input4)



        let num5 = practice.question.split(",")[4]
        let label5 = $(" <LABEL ></LABEL>")
        label5.text(num5)
        label5.prop('for',num5) 
        let input5 = $("<INPUT TYPE='Checkbox' Name='Browser' >")
        input5.prop('id',num5) 
        input5.prop('value',num5) 

        $(col1).append(label5)
        $(col1).append(input5)



        let num6 = practice.question.split(",")[5]
        let label6 = $(" <LABEL ></LABEL>")
        label6.text(num6)
        label6.prop('for',num6) 
        let input6 = $("<INPUT TYPE='Checkbox' Name='Browser' >")
        input6.prop('id',num6) 
        input6.prop('value',num6) 

        $(col1).append(label6)
        $(col1).append(input6)



        let num7 = practice.question.split(",")[6]
        let label7 = $(" <LABEL ></LABEL>")
        label7.text(num7)
        label7.prop('for',num7) 
        let input7 = $("<INPUT TYPE='Checkbox' Name='Browser' >")
        input7.prop('id',num7) 
        input7.prop('value',num7) 

        $(col1).append(label7)
        $(col1).append(input7)



        let num8 = practice.question.split(",")[7]
        let label8 = $(" <LABEL ></LABEL>")
        label8.text(num8)
        label8.prop('for',num8) 
        let input8 = $("<INPUT TYPE='Checkbox' Name='Browser' class='practice-input'>")
        input8.prop('id',num8) 
        input8.prop('value',num8) 

        $(col1).append(label8)
        $(col1).append(input8)




        let num9 = practice.question.split(",")[8]
        let label9 = $(" <LABEL ></LABEL>")
        label9.text(num9)
        label9.prop('for',num9) 
        let input9 = $("<INPUT TYPE='Checkbox' Name='Browser' class='practice-input'>")
        input9.prop('value',num9)  
        input9.prop('id',num9) 

        $(col1).append(label9)
        $(col1).append(input9)









        let col2 = $("<div class='col-6'>")

    }

}


$(document).ready(function () {
    
})