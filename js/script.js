var pathName = window.location.href

console.log(pathName)

$(".button").on("click", function() {
    var modalID = "modal" + $(this).attr('id')
    $(".mini.inverted.modal." + modalID).modal({inverted:true}).modal("show")
})

$("#nametag").on("click", function() {
    $('.ui.sidebar').sidebar('toggle')
})


if (pathName.includes("portfolio")) {
    $("#portfolio").addClass("active")
}

else {
    $("#about").addClass("active")
}



$("#about").on("click", function(res) {
    $.ajax({
        method: "GET",
        url: "/about"
    })
})

$("#portfolio").on("click", function(res) {
    $.ajax({
        method: "GET",
        url: "/portfolio"
    })
})
