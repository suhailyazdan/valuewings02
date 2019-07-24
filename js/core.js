$(document).ready(function(){
    $("#myCarousel").carousel({
        interval : 4000
    });


    var FormReader = 
    {
        init: function()
        {
            theFormObj = $('#contactForm');
            return (FormReader._checkValidation(theFormObj))

        },
        _checkValidation: function(FormObj)
        {
            return(FormObj.validator('checkform', FormObj));
        },

    };
    $('#contactSubmit').click(function(){
        if(FormReader.init())
        {
// alert(FormReader.init());
$('form').submit();
}
else
    return false;
});


});