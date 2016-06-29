function checkOffset() {
    if($('.product_detail_des_content').offset().top + $('.product_detail_des_content').height() 
                                           >= $('.combine_products').offset().top)
        $('.product_detail_des_content').css('position', 'absolute');
    if($(document).scrollTop() + window.innerHeight < $('.combine_products').offset().top)
        $('.product_detail_des_content').css('position', 'fixed'); // restore when you scroll up
}