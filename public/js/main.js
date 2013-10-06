$(document).ready(function() {
    //urlバーを隠す
    window.scrollTo(0,1);

    $('.delete').click(function() {
        var el = $(this).parent();
        if (confirm('taskは完了しましたか？')) {
            $.post('/delete', {
                id: el.data('id')
            }, function() {
                el.fadeOut(400);
            });
        }
    })
});
