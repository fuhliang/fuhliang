jQuery(function ($) {
    $.ajaxSetup({
        beforeSend(xhr) {
            this.url = 'http://120.76.247.5:2003/api' + this.url
        }
    })
})