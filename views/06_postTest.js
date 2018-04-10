// creates Subject Info View
var initPostTestView = function() {
    var view = {};
    view.name = 'subjInfo';
    view.template = $('#subj-info-view').html();

    $('#main').html(Mustache.render(view.template, {
        title: config_views.subjInfo.title,
        text: config_views.subjInfo.text,
        buttonText: config_views.subjInfo.buttonText
    }));

    $('#next').on('click', function(e) {
        // prevents the form from submitting
        e.preventDefault();

        // records the post test info
        exp.data.out.age = $('#age').val();
        exp.data.out.gender = $('#gender').val();
        exp.data.out.education = $('#education').val();
        exp.data.out.languages = $('#languages').val();
        exp.data.out.comments = $('#comments').val().trim();

        // moves to the next view
        exp.findNextView();
    })

    return view;
};