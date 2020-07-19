$(function () {


$("#first").empty();

$("#submit-btn").on("click", function(event){

event.preventDefault();

 let firstName = $("#first").val().trim();
 let lastName = $("#last").val().trim();
 let email = $("#email").val().trim();

 console.log(firstName);
 console.log(lastName);
 console.log(email);

 $(".modal-title").html(`Thank you ${firstName}  ${lastName}!`);

$(".modal").modal();

empty();

});

//not working
function empty (){

    $("#close").on("click", function(event){

        event.preventDefault();
        console.log("closed");
        $("#first").html();
    })
}








})












