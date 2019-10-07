window.onload = function() {
$(function() {
    var link = $('.menulink');
    var close = $('.close-menu');
    var menu = $('.m_menu');
    link.on('click', function(event){
        event.preventDefault();
        menu.toggleClass('m_menu_active');
        
    });
    close.on('click', function(event){
        event.preventDefault();
        menu.toggleClass('m_menu_active');
        
    });
});
document.querySelector('#email').addEventListener('blur', function() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = this.value;

    if(reg.test(address) == false) {alert('Введіть коректний E-mail'); return false;}
}, false);
document.querySelector('#name').addEventListener('blur', function() {
    var reg = /[0-9]/;
    var name = this.value;

    if(reg.test(name) == true) {alert("Введіть ім'я без цифер"); return false;}
}, false);
document.querySelector('#done').addEventListener('click', function() {
    if (document.contact_form.contact_name.value == "") {alert ("Напишіть ваше ім'я");}
    else if (document.contact_form.contact_e_mail.value == "") {alert ("Напишіть E-Mail");}
    else if (document.contact_form.contact_subj.value == "") {alert ("Напишіть повідомлення");}
}, false);
var but = $('.button');
var main = $('.main');
but.on('click',function(event){
    event.preventDefault();
    main.toggleClass('mainB');
    $('.header').toggleClass('headerB');
    $('.online').toggleClass('onlineB');
    $('.offer').toggleClass('offerB');
    $('.menuA').toggleClass('menuB');
    $('.dropdown-child').toggleClass('dropdown-childB');
    $('.about_server').toggleClass('about_serverB');
    $('.ui-form').toggleClass('ui-formB');
    $('.m_menu').toggleClass('m_menuB');
    $('.logoimg').toggleClass('logoimgB');
    $('.book').toggleClass('bookB');
    $('.bookfooter').toggleClass('bookfooterB');
})
document.querySelector('.logo').addEventListener('dblclick', function() {
    alert('Привіт гравець Playcraft`y');
}, false);
}