$(document).ready(function(){
        /*function all(){*/
          var i = 20;
          var j = 10;
          var time = setInterval(function(){
            i += 5;
            $('#maDiv').height(i + "px").width(i+"px");
            if($('#maDiv').innerHeight() > window.innerHeight / 2){
              clearInterval(time);
              var time2 = setInterval(function(){
                i -= 5;
                $('#maDiv').height(i + "px").width(i+"px");
              },1000);
            }
          }, 1000);

          
          var pad = setInterval(function(){
            j -= 5;
            $('#maDiv').css('padding', j + 'px');
            $('#maDiv').css('border-radius', j + '%');
            if($('#maDiv').innerHeight() > window.innerHeight / 2){
              var time3 = setInterval(function(){
                j -= 5;
                $('#maDiv').css('padding', j + 'px');
              },10000);
            }
          },10000);
            
        /*});*/
      });