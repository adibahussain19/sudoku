function showPercent(){
    var percent = Math.round((score/17) * 100)

    $("#percent").append(percent)
    $("#percent").append("%")

    if (percent != 100) {
        $("#percent").css({"color": "red", "font-weight": "bold"})
    }

    else {
        $("#percent").css({"color": "green", "font-weight": "bold"})
    }
}

function fillUserGrid(){
    $("#input-0").attr("value", users_answers["0"]["input"])
    $("#input-5").attr("value", users_answers["1"]["input"])
    $("#input-7").attr("value", users_answers["2"]["input"])
    $("#input-9").attr("value", users_answers["3"]["input"])
    $("#input-12").attr("value", users_answers["4"]["input"])
    $("#input-13").attr("value", users_answers["5"]["input"])
    $("#input-17").attr("value", users_answers["6"]["input"])
    $("#input-19").attr("value", users_answers["7"]["input"])
    $("#input-20").attr("value", users_answers["8"]["input"])
    $("#input-21").attr("value", users_answers["9"]["input"])
    $("#input-22").attr("value", users_answers["10"]["input"])
    $("#input-24").attr("value", users_answers["11"]["input"])
    $("#input-25").attr("value", users_answers["12"]["input"])
    $("#input-31").attr("value", users_answers["13"]["input"])
    $("#input-32").attr("value", users_answers["14"]["input"])
    $("#input-33").attr("value", users_answers["15"]["input"])
    $("#input-35").attr("value", users_answers["16"]["input"])
}


function correctUser(){
    console.log("These are the users answers ", users_answers)
    console.log("This is the user answer: ", users_answers["0"]["input"])
    console.log("This is the grid answer: ", grid_answers["0"]["input"])
    
    if (users_answers["0"]["input"] != grid_answers["0"]["input"]){
        $("#input-0").css("background-color", "#ffcccb");
    }

    else {
        $("#input-0").css("background-color", "#C1E1C1");
    }

    if (users_answers["1"]["input"] != grid_answers["1"]["input"]){
        $("#input-5").css("background-color", "#ffcccb");
    }

    else {
        $("#input-5").css("background-color", "#C1E1C1");
    }

    if (users_answers["2"]["input"] != grid_answers["2"]["input"]){
        $("#input-7").css("background-color", "#ffcccb");
    }

    else {
        $("#input-7").css("background-color", "#C1E1C1");
    }

    if (users_answers["3"]["input"] != grid_answers["3"]["input"]){
        $("#input-9").css("background-color", "#ffcccb");
    }

    else {
        $("#input-9").css("background-color", "#C1E1C1");
    }

    if (users_answers["4"]["input"] != grid_answers["4"]["input"]){
        $("#input-12").css("background-color", "#ffcccb");
    }

    else {
        $("#input-12").css("background-color", "#C1E1C1");
    }

    if (users_answers["5"]["input"] != grid_answers["5"]["input"]){
        $("#input-13").css("background-color", "#ffcccb");
    }

    else {
        $("#input-13").css("background-color", "#C1E1C1");
    }

    if (users_answers["6"]["input"] != grid_answers["6"]["input"]){
        $("#input-17").css("background-color", "#ffcccb");
    }

    else {
        $("#input-17").css("background-color", "#C1E1C1");
    }

    if (users_answers["7"]["input"] != grid_answers["7"]["input"]){
        $("#input-19").css("background-color", "#ffcccb");
    }

    else {
        $("#input-19").css("background-color", "#C1E1C1");
    }

    if (users_answers["8"]["input"] != grid_answers["8"]["input"]){
        $("#input-20").css("background-color", "#ffcccb");
    }

    else {
        $("#input-20").css("background-color", "#C1E1C1");
    }

    if (users_answers["9"]["input"] != grid_answers["9"]["input"]){
        $("#input-21").css("background-color", "#ffcccb");
    }

    else {
        $("#input-21").css("background-color", "#C1E1C1");
    }

    if (users_answers["10"]["input"] != grid_answers["10"]["input"]){
        $("#input-22").css("background-color", "#ffcccb");
    }

    else {
        $("#input-22").css("background-color", "#C1E1C1");
    }

    if (users_answers["11"]["input"] != grid_answers["11"]["input"]){
        $("#input-24").css("background-color", "#ffcccb");
    }

    else {
        $("#input-24").css("background-color", "#C1E1C1");
    }

    if (users_answers["12"]["input"] != grid_answers["12"]["input"]){
        $("#input-25").css("background-color", "#ffcccb");
    }

    else {
        $("#input-25").css("background-color", "#C1E1C1");
    }

    if (users_answers["13"]["input"] != grid_answers["13"]["input"]){
        $("#input-31").css("background-color", "#ffcccb");
    }

    else {
        $("#input-31").css("background-color", "#C1E1C1");
    }

    if (users_answers["14"]["input"] != grid_answers["14"]["input"]){
        $("#input-32").css("background-color", "#ffcccb");
    }

    else {
        $("#input-32").css("background-color", "#C1E1C1");
    }

    if (users_answers["15"]["input"] != grid_answers["15"]["input"]){
        $("#input-33").css("background-color", "#ffcccb");
    }

    else {
        $("#input-33").css("background-color", "#C1E1C1");
    }

    if (users_answers["16"]["input"] != grid_answers["16"]["input"]){
        $("#input-35").css("background-color", "#ffcccb");
    }

    else {
        $("#input-35").css("background-color", "#C1E1C1");
    }

    
}

$(document).ready(function() {

    fillUserGrid()
    showPercent()
    correctUser()
     
})