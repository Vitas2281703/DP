$(function () {
      (function quantityProducts() {
          let total_cost = 0;
          let cost_headfoot = 0;
          let checkboxes = 0;


        $('input[type="checkbox"]').on('click', function() {
              var checkbox = parseInt($(this).val());
              var check_pravki = document.getElementsByName("pravki-check");
          
                

              
              if($(this).prop('checked')){
               

                if (checkbox == 1){
                  document.getElementById("total-cost-pravki").innerHTML = "Без правок";
                  if (check_pravki[1].checked==true){
                  check_pravki[1].checked = false;
                  checkboxes = checkboxes - 7000;
                  total_cost = total_cost - 7000;
                  }
                }else{
                checkboxes = checkboxes + checkbox;
                total_cost = total_cost + checkbox;

                if (checkbox == 7000){
                  document.getElementById("total-cost-pravki").innerHTML = "7000 ₽ / 1 итерация";
                  check_pravki[0].checked = false;
                }
                else{
                  cost_headfoot = cost_headfoot + checkbox;
                  document.getElementById("total-cost-redis-headfoot").innerHTML = cost_headfoot + " ₽";
                }
              }
              }
              else{
                 if (checkbox == 1){
                  document.getElementById("total-cost-pravki").innerHTML = "";
                }else{
                checkboxes = checkboxes - checkbox;
                total_cost = total_cost - checkbox;
                if (checkbox == 7000){
                  document.getElementById("total-cost-pravki").innerHTML = "";
                }
                else{
                  cost_headfoot = cost_headfoot - checkbox;
                  document.getElementById("total-cost-redis-headfoot").innerHTML = cost_headfoot + " ₽";
                }
              }
            }
                 for(i = 0; i < 5; i++){
                  document.getElementsByClassName("total-cost-out")[i].innerHTML = "&nbsp;" + total_cost + " ₽";
                }
            });


  $('input[type="radio"]').on('change', function() {
      let radio_redis = parseInt($(this).val());
      if($(this).prop('checked')){
        if(parseInt($(this).val()) == 1501){
          radio_redis = 1500;
        }
      cost_headfoot = radio_redis;
      total_cost = total_cost_redis_blocks + checkboxes + radio_redis;
      
      }

      document.getElementById("total-cost-redis-headfoot").innerHTML = cost_headfoot + " ₽";
      for(i = 0; i < 5; i++){
                  document.getElementsByClassName("total-cost-out")[i].innerHTML = "&nbsp;" + total_cost + " ₽";
                }

      
});
        var $quantityArrowMinus = $(".quantity-arrow-minus");
        var $quantityArrowPlus = $(".quantity-arrow-plus");
        
        for(i = 0; i < 5; i++){
                  document.getElementsByClassName("total-cost-out")[i].innerHTML = "&nbsp;" + total_cost + " ₽";
                }
        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);
//функция для кнопки -
        function quantityMinus() {
          var $quantityNum = $(this).siblings('.quantity-num');
          if ($quantityNum.val() > 0) {
            $quantityNum.val(+$quantityNum.val() - 1);
              let blocks = new Array();
                for(i = 0; i<3;i++){
                  blocks[i] = document.getElementsByClassName('quantity-num')[i].value;
                }
                total_cost_redis_blocks = 1500*Number(blocks[0])+3000*Number(blocks[1])+5000*Number(blocks[2]);
                total_cost = total_cost_redis_blocks + checkboxes;
                 for(i = 0; i < 5; i++){
                  document.getElementsByClassName("total-cost-out")[i].innerHTML = "&nbsp;" + total_cost + " ₽";
                }
                document.getElementById("total-cost-redis-blocks").innerHTML = total_cost_redis_blocks + " ₽";
          }
        }
//функция для кнопки +
        function quantityPlus() {
          var $quantityNum = $(this).siblings('.quantity-num');
          $quantityNum.val(+$quantityNum.val() + 1);
          let blocks = new Array();
                for(i = 0; i<3;i++){
                  blocks[i] = document.getElementsByClassName('quantity-num')[i].value;
                }
                total_cost_redis_blocks = 1500*Number(blocks[0])+3000*Number(blocks[1])+5000*Number(blocks[2]);
                total_cost = total_cost_redis_blocks + checkboxes;
                 for(i = 0; i < 5; i++){
                  document.getElementsByClassName("total-cost-out")[i].innerHTML = "&nbsp;" + total_cost + " ₽";
                }
                document.getElementById("total-cost-redis-blocks").innerHTML = total_cost_redis_blocks + " ₽";
        }
        
//обнуление формы
        $('.reset-form').click(function() {
          total_cost = 0;
          cost_headfoot = 0;
          checkboxes = 0;
          document.getElementById("total-cost-redis-blocks").innerHTML = "";
          document.getElementById("total-cost-redis-headfoot").innerHTML = "";
          document.getElementById("total-cost-pravki").innerHTML = "";
          for(i = 0; i < 3; i++){
                  document.getElementsByClassName("quantity-num")[i].value = "0";
                }
          for(i = 0; i < 5; i++){
                  document.getElementsByClassName("total-cost-out")[i].innerHTML = "&nbsp;" + total_cost + " ₽";
                }

            // Убираем атрибут checked 
            $('.calculator').find('input:checked').removeAttr('checked');
            

            return false
});

       

      })();
    });


    