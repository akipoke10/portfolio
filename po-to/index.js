$(function () {
    $('.openBtn').click(function () {  
        var btnIndex = $(this).index();
        //���Ԗڂ̃��[�_���{�^�������擾
        $('.modalArea').eq(btnIndex).addClass('is-open');
        //�N���b�N�������[�_���{�^���Ɠ����Ԗڂ̃��[�_����\������B
        $('html, body').css('overflow', 'hidden');
    });
    $('.modalBg').click(function () { 
        $('.modalArea').removeClass('is-open');
        $('html, body').removeAttr('style');
    });

});