// creates Begin experiment view
var initBeginExpView = function() {
    var view = {};
    view.name = 'beginExp';
    view.template = $('#begin-exp-view').html();

    $('#main').html(Mustache.render(view.template, {
        text: config_views.beginExp.text
    }));

    // moves to the next view
    $('#next').on('click', function(e) {
        exp.findNextView();
    });

    return view;
};