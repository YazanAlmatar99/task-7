
$("#button").on("click",function() {
    if ($("#text-input").val()){
        var text = `<p>${$("#text-input").val()}</p>`;
        $("#tasks").prepend(text);
    }
})