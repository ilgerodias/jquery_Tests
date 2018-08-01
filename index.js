$(document).ready(function(){

  console.log('ready and waiting!')

  $(".test").click(function(event){
    console.log(event)
    $(this).fadeOut();

  })

})
