$.fn.dictionary = function(text, radio1, radio2, errorInput) {
    $(this).click(function(){
        var word = $(text).val();
        var error = $(errorInput);

        //dependiendo de si un radiobutton esta checked o no vamos al diccionario español o al ingles
        if($(radio1).is(':checked') && word != "" && $(radio1).prop('checked', true)) {
            window.open("http://www.wordreference.com/definicion/"+word,null,
                        "height=500,width=600,left=500,status=yes,toolbar=no,menubar=no,location=no");
            error.text("");
        }else if ($(radio2).is(':checked') && word != "" && $(radio2).prop('checked', true)) {
            window.open("http://dictionary.cambridge.org/dictionary/english/"+word,null,
                        "height=500,width=600,left=500,status=yes,toolbar=no,menubar=no,location=no");
            error.text("");
        }else{
            error.text("Please enter a word or select a language!").css({"color":"red","fontSize":"25px"});
        }
    });
};
