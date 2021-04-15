$(document).ready(function () {
    $("#forma-modal").submit(function () {
        var formaId = $("#forma-modal");
        var name = formaId.find('input[name="name"]').val().trim();
        var phone = formaId.find('input[name="phone"]').val().trim();
        var errormess = formaId.find(".error");

        if(name == "") {
            errormess.text("Введите имя");
            setTimeout(function () {
                errormess.text("");
            }, 3000);
            return false;
        } else if (phone == "") {
            errormess.text("Введите номер телефона");
            setTimeout(function () {
                errormess.text("");
            }, 3000);
            return false;
        }
        errormess.text("");

        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formaId.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formaId).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formaI).html(error);         
            }
        });
        return false;
    });

    $("#forma-top").submit(function () {
        var formaId = $("#forma-top");
        // var name = formaId.find('input[name="name"]').val().trim();
        var phone = formaId.find('input[name="phone"]').val().trim();
        var errormess = formaId.find(".error");

        if (phone == "") {
            errormess.text("Введите номер телефона");
            setTimeout(function () {
                errormess.text("");
            }, 3000);
            return false;
        }
        errormess.text("");

        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formaId.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formaId).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formaI).html(error);         
            }
        });
        return false;
    });

   
    $("#forma-middle").submit(function () {
        var formaId = $("#forma-middle");
        var name = formaId.find('input[name="name"]').val().trim();
        var phone = formaId.find('input[name="phone"]').val().trim();
        var errormess = formaId.find(".error");

        if(name == "") {
            errormess.text("Введите имя");
            setTimeout(function () {
                errormess.text("");
            }, 3000);
            return false;
        } else if (phone == "") {
            errormess.text("Введите номер телефона");
            setTimeout(function () {
                errormess.text("");
            }, 3000);
            return false;
        }
        errormess.text("");

        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formaId.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formaId).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formaI).html(error);         
            }
        });
        return false;
    });

    $("#forma-bottom").submit(function () {
        var formaId = $("#forma-bottom");
        // var name = formaId.find('input[name="name"]').val().trim();
        var phone = formaId.find('input[name="phone"]').val().trim();
        var errormess = formaId.find(".error");

        if (phone == "") {
            errormess.text("Введите номер телефона");
            setTimeout(function () {
                errormess.text("");
            }, 3000);
            return false;
        }
        errormess.text("");

        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formaId.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formaId).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formaI).html(error);         
            }
        });
        return false;
    });

});








// $("#Submit").on("click", function() {
// $('#forma-modal').submit(function() {
//     var name = $("#name").val().trim();
//     var phone = $("#phone").val().trim();

//     if(name == "") {
//         $("#error").text("Введите имя");
//         return false;
//     } else if (phone == "") {
//         $("#error").text("Введите номер телефона");
//         return false;
//     }
//     $("#error").text("");

//     $.ajax({
//         type: "POST",
//         url: "mail.php",
//         cashe: false,
//         data: $(this).serialize(),
//         beforeSend: function() {
//             $("#Submit").prop("disabled", true);
//         },
//         success: function(data) {
//             // alert:(data);
//             $("#Submit").prop("disabled", false);
//             // $('.js-overlay-thank-you').fadeIn();
//             $("#error").text("Сообщение отправлено!");
//         }
//     });
////////////////////////////////////////////////////////////////////
    // .done(function() {
    //     $('.js-overlay-thank-you').fadeIn();
    //     $(this).find('input').val('');
    //     $('#form').trigger('reset');
    // });
    // return false;


// });

// $('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
//     var name = $("#name").val().trim();;
//     var phone = $("#phone").val().trim();
//     if (name == '' || phone == '' ) {

//         $("#error").text("Введите имя");
//         // valid = false;
//         // return valid;
//         return false;
//     }
//     $("#error").text("");
//     // $.ajax({
//     //     type: "POST",
//     //     url: "mail.php",
//     //     data: $(this).serialize()
//     // }).done(function() {
//     //     $('.js-overlay-thank-you').fadeIn();
//     //     $(this).find('input').val('');
//     //     $('#form').trigger('reset');
//     // });
//     // return false;
// });

$('.Slider1').owlCarousel({
    center: true,
    items:3,
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
          nav:false,
          dots: true,
          items:1,
        },
        540:{
          nav:true,
          dots: false,
          items:2,
        },
        768:{
          nav:true,
          dots: false
        }
    }
  });

  $('.Slider2').owlCarousel({
        // center: true,
        items:2,
        loop:true,
        margin:10,
        nav:true,
        dots: false
      // margin:10,
      // responsive:{
      //     600:{
      //         items:4
      //     }
      // }
  });

  $('.Slider3').owlCarousel({
        // center: true,
        items:1,
        loop:true,
        margin:10,
        nav:true,
        dots: false,
      // margin:10,
        responsive:{
          0:{
            nav:false,
            dots: true
          },
          540:{
            nav:true,
            dots: false
          }
      }
  });
  
  
  $('.bpopup').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $(href).bPopup({
                closeClass:'close'
            });
    });

$('#hamburger').click(function (e) {
    $('.dropDownMenu').fadeToggle();
    $(this).toggleClass('active');
});
    
$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#Topmenu"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 
        && $('#hamburger').hasClass('active')) 
        { // и не по его дочерним элементам
            //div.hide(); // скрываем его
        $('.dropDownMenu').fadeOut();
        $('#hamburger').removeClass("active");
        }
 });





 ymaps.ready(init);
 var myMap, 
     myPlacemark;

 function init(){ 
     myMap = new ymaps.Map("map", {
         center: [55.741233, 37.762303],
         zoom: 15
     }); 
    //  55.741233, 37.772303
    //  55.738855, 37.778569

     myPlacemark = new ymaps.Placemark([55.738855, 37.778569], 
         {balloonContent: 'Москва, ул. Кусковская 20 A, корпус А, офис 210А'},
         {preset: 'islands#redIcon'}								  
     );
     
     myMap.geoObjects.add(myPlacemark);
     myMap.behaviors.disable('drag');
     myMap.behaviors.disable('scrollZoom');
 }