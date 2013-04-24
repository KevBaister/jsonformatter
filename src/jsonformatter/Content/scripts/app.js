var formatter = (function () {

    var editor;

    var init = function() {
        editor = CodeMirror.fromTextArea($('#raw-json')[0], {
            theme: 'ambiance',
            lineNumbers: true
        });

        $('#format').click(onFormatClicked);
        $('#clear').click(onClearClicked);
    };

    var onFormatClicked = function () {

        var jsonData = editor.getValue();
        
        if (jsonData !== '') {
            var spacing = $('#spacing').val();
            
            if ($.isNumeric(spacing)) {
                spacing = parseInt(spacing, 10);
            } else if(spacing === 'tab') {
                spacing = '\t';
            }

            try {
                var parsedJson = JSON.parse(jsonData);
                editor.setValue(JSON.stringify(parsedJson, null, spacing));
            } catch(e) {
                alert('The JSON you have entered does not appear to be valid.');
            } 
        }

    };

    var onClearClicked = function() {
        editor.setValue('');
    };

    return {
        init: init
    };

}());

$(function() {
    formatter.init();
});