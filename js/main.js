$("#Submit").on("click", function() {
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();

    if(name == "") {
        $("#error").text("Введите имя");
        return false;
    } else if (phone == "") {
        $("#error").text("Введите номер телефона");
        return false;
    }
    $("#error").text("");

    

});

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


