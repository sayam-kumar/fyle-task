function onLoad() {
    $(".box").css("transform","scale(1)").css('transition','1s').css("background","white");
    $("label").css("opacity","1").css('transition','3s');

    // testimonidata
    var slide=1;
    $('#t1').html(testimonials[slide][1]);
    $('#t2').html(testimonials[slide][2]);
    $('#t3').html(testimonials[slide][3]);
    $('#t4').html(testimonials[slide][4]);
    $("#tImg").attr("src","drawable/images/testimonials/"+testimonials[slide][0]+"?"+rand);
}
function  showAllCat() {
    $(".box.h").removeClass("hidden");
    $(".catButton.show").css('display','none');
    $(".catButton.hide").css('display','block');
}
function  hideCat() {
    $(".box.h").addClass("hidden");
    $(".catButton.show").css('display','block');
    $(".catButton.hide").css('display','none');
}
var slide=1,max=3,rand;
function prevTestimoni() {
    if(slide==0){
        slide=max-1;
    }else{
        slide=(slide-1)%max;
    }
    rand = Math.floor(Math.random() * 101);
    // console.log(slide);
    $('#t1').html(testimonials[slide][1]);
    $('#t2').html(testimonials[slide][2]);
    $('#t3').html(testimonials[slide][3]);
    $('#t4').html(testimonials[slide][4]);
    $("#tImg").attr("src","drawable/images/testimonials/"+testimonials[slide][0]+"?"+rand);
}
function nextTestimoni() {
    slide=(slide+1)%max;
    rand = Math.floor(Math.random() * 101);
    // console.log(slide);
    $('#t1').html(testimonials[slide][1]);
    $('#t2').html(testimonials[slide][2]);
    $('#t3').html(testimonials[slide][3]);
    $('#t4').html(testimonials[slide][4]);
    $("#tImg").attr("src","drawable/images/testimonials/"+testimonials[slide][0]+"?"+rand);
}