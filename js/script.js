function forredesignquestion() {
  var cloud1 = document.getElementsByClassName("cloud1")
  if (cloud1[0].style.opacity == "0"){
    cloud1[0].style.opacity = "1";
  }else{
    cloud1[0].style.opacity = "0";
  }
}


//модальное окно
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
         
         if(modalId == 1){
          var total_cost = 0;
          var cost_headfoot = 0;
          var checkboxes = 0;
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
            
            
                  document.getElementById("name").value = "";
                  document.getElementById("email").value = "";
                  document.getElementById("telegram").value = "";

          document.getElementsByClassName('first-screen-calc')[0].style.display = 'block';
          document.getElementsByClassName('second-screen-calc')[0].style.display = 'none';
          document.getElementsByClassName('third-screen-calc')[0].style.display = 'none';
          document.getElementsByClassName('fourth-screen-calc')[0].style.display = 'none';
          document.getElementsByClassName('fifth-screen-calc')[0].style.display = 'none';
          document.getElementsByClassName('sixth-screen-calc')[0].style.display = 'none';
          document.getElementsByClassName('seventh-screen-calc')[0].style.display = 'none';

            return false
         }
            if(modalId == 2){
                  document.getElementsByClassName('sixth-screen-calc')[1].style.display = 'block';
                  document.getElementsByClassName('seventh-screen-calc')[1].style.display = 'none';
                  document.getElementById("name1").value = "";
                  document.getElementById("email1").value = "";
                  document.getElementById("telegram1").value = "";
            return false
            }

      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         e.preventDefault();
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');

      });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); 



