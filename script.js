$(function () {
    $('.divTab .ulTab li').on('click', function () {
        //defining tab
        var $tab = $(this).closest('.divTab');
        //switching tab to active
        $tab.find('li.active').removeClass('active');
        $(this).addClass('active');
        //show tab on click
        var tabShow = $(this).attr('rel');
        //tab hide
        $tab.find('.text.active').hide(100, tabNext)
        
        //tab next
        function tabNext() {
            $(this).removeClass('active');
            $('#' + tabShow).show(100, function () {
                $(this).addClass('active');
                
            })
        }
    })
});
