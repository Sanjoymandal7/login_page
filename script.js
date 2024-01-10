$(document).ready(function(){
 $("#register-link").click(function(){

 $(".form-box register").show();
 $(".form-box login").hide();
 
});

$("#login-link").click(function(){

 $(".form-box register").hide();
 $(".form-box login").show();

});
});