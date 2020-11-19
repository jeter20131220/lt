const header = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

// 隱藏彈跳區塊

// 按鈕一
$("#box-item").hide();
$("#box-item3").hide();
$("#box-item2").hide();
$("#box-item4").hide();
$("#menu").hide();
$("#menu-box").hide();

$("#Square1").fadeOut(0);
$("#Square3").fadeOut(0);
$("#Square2").fadeOut(0);
$("#Square4").fadeOut(0);


// box1彈跳視窗
$("#btn1").click(function () {
    $("#box-item").slideDown(500);
    $("#Square1").fadeIn("fast");
});

$("#box-item").click(function () {
    $("#box-item").slideUp(500);
    $("#Square1").fadeOut("fast");
});

// box3彈跳視窗
$("#btn3").click(function () {
    $("#box-item3").slideDown(500);
    $("#Square3").fadeIn("fast");
});


$("#box-item3").click(function () {
    $("#box-item3").slideUp(500);
    $("#Square3").fadeOut("fast");
});

// box2彈跳視窗

$("#btn2").click(function () {
    $("#box-item2").slideDown(500);
    $("#Square2").fadeIn("fast");
});


$("#box-item2").click(function () {
    $("#box-item2").slideUp(500);
    $("#Square2").fadeOut("fast");
});

// box4彈跳視窗
$("#btn4").click(function () {
    $("#box-item4").slideDown(500);
    $("#Square4").fadeIn("fast");
});


$("#box-item4").click(function () {
    $("#box-item4").slideUp(500);
    $("#Square4").fadeOut("fast");
});

// menu彈跳視窗

$("#menu-btn1").click(function () {
    $("#menu").slideDown(500);
    $("#menu-box").fadeIn("fast");
});


$("#menu").click(function () {
    $("#menu").slideUp(500);
    $("#menu-box").fadeOut("fast");
});


// 公告分類
// 選取分類
$('.list').on('click', function () {
    $('.list').removeClass('active');
    $(this).addClass('active');
});