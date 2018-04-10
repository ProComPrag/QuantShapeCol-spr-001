// creates the Introduction view
var initIntroView = function() {
    var view = {};
    view.name = 'intro';
    view.template = $('#intro-view').html();
    
    $('#main').html(Mustache.render(view.template, {
        title: config_views.intro.title,
        text: config_views.intro.text,
        button: config_views.intro.buttonText
    }));

    // moves to the next view
    $('#next').on('click', function(e) {
        exp.findNextView();
    });

    return view;
};
