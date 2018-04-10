// creates Instruction view
var initInstructionsView = function() {
    var view = {};
    view.name = 'instructions';
    view.template = $("#instructions-view").html();
    
    $('#main').html(Mustache.render(view.template, {
        title: config_views.instructions.title,
        text: config_views.instructions.text,
        button: config_views.instructions.buttonText
    }));

    // moves to the next view
    $('#next').on('click', function(e) {
        exp.findNextView();
    });

    return view;
};