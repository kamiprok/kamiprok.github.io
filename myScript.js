$(document).ready(function() {
    $("#button1").click(function() {
        $('html, body').animate({
            scrollTop: $("#page1").offset().top
        }, 400);
})});

$(document).ready(function() {
    $("#toIndex2,#kalk1").click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 400);
})});

$(document).ready(function(){

    $('#1, #2, #3, #4, #5, #6, #7, #8, #9, #zero, #dodaj, #odejmij, #mnoz, #dziel, #kropka').click(function(){
            var v = $(this).val();
        var total = $('textarea').val($('textarea').val() + v); 
        });
    
    $('#wynik').click(function(){
        $('textarea').val(eval($('textarea').val()));
        });
    
    $('#kasuj').click(function(){
        $('textarea').val('');
        });
    
    $('#usun').click(function(){
        $('textarea').val($('textarea').val().substring(0, $('textarea').val().length - 1));
        });
    });

$(".kalk button").mousedown(function() {
    $(this).css({"background-color": "#1f1f1f", "color": "#daa54e"})
});


$(document).ready(function()
{
  $('#przycisk').click(function() {
    if($(this).css("margin-left") == "1000px")
    {
        $('.kalk').animate({"margin-left": '-=1000'},300);
        $('#przycisk').animate({"margin-left": '-=1000'},300);
    }
    else
    {
        $('.kalk').animate({"margin-left": '+=1000'},300);
        $('#przycisk').animate({"margin-left": '+=1000'},300);
    }
  });
});

function myFunction(x) {
    x.classList.toggle("change");
};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("navbar2").style.top = "0";
  } else {
    document.getElementById("navbar2").style.top = "-200px";
  }
};

/* kalk-stary */

    function addChar(input, character) { 
        if(input.value == null || input.value == "0") input.value = character
        else
        input.value += character
        }
        function sqrt(form) {form.display.value = Math.sqrt(form.display.value);}
        function deleteChar(input) {input.value = input.value.substring(0, input.value.length - 1)}
        function changeSign(input) {
        if(input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
        else
        input.value = "-" + input.value
        }
        function compute(form)  {form.display.value = eval(form.display.value)}
        function square(form)  {form.display.value = eval(form.display.value) * eval(form.display.value)}
        function checkNum(str)  {
        for (var i = 0; i < str.length; i++) {
        var ch = str.substring(i, i+1)
        if (ch < "0" || ch > "9") {
        if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "." && ch != "(" && ch!= ")") {alert("Przesadziles :(")
        return false
                    }
                }
            }
        return true
        };

/* end */