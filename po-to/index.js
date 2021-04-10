$(function () {
    $('.openBtn').click(function () {  
        var btnIndex = $(this).index();
        //何番目のモーダルボタンかを取得
        $('.modalArea').eq(btnIndex).addClass('is-open');
        //クリックしたモーダルボタンと同じ番目のモーダルを表示する。
        $('html, body').css('overflow', 'hidden');
    });
    $('.modalBg').click(function () { 
        $('.modalArea').removeClass('is-open');
        $('html, body').removeAttr('style');
    });

});