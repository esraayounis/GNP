$('.nav-link').click(function(e){
    $('.nav-link').removeClass("active");
    $(this).addClass("active");
});


// close Menu when click outside it
window.addEventListener('mouseup', function(event){
    var box = document.getElementById('sidebar-menu');
    if (event.target != box && event.target.parentNode != box){
         box.style.display = 'none';
    }
});
