console.log ("your index.js is uploaded correctly");

$(".menuitems").hover(function(){
    $ (this).css("color","#356353",)
   
});
$(".menuitems").mouseleave(function(){ 
    $ (this).css("color","#333333")
});

$(".menuitems").hover(function(){
    $ (this).css("text-decoration","underline") 
});
$(".menuitems").mouseleave(function(){ 
    $ (this).css("text-decoration", "none")
});


$(".resumebutton").hover(function(){
    $(this).css("background-color","white");
  });

  $(".resumebutton").mouseleave(function(){ 
    $ (this).css("background-color","#356353")
});
$(".resumebutton").hover(function(){
    $(this).css("color","#356353");
  });

  $(".resumebutton").mouseleave(function(){ 
    $ (this).css("color","white")
});
