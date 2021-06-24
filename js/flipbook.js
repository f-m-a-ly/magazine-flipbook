$('#flipbook').turn({
    acceleration: true, gradients: true,
    width: 980,
    height: 650,
    page: 1,
    duration: 750
});

function getCurrentYear() {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("currentYear").innerHTML = year;
}

getCurrentYear();