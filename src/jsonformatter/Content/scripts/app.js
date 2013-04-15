var formatter = (function () {

    var $editor;

    var init = function() {
        $editor = $('#raw-json');

        $('#format').click(onFormatClicked);
        $('#clear').click(onClearClicked);
    };

    var onFormatClicked = function () {

        var jsonData = $editor.val();
        
        if (jsonData !== '') {
            var spacing = $('#spacing').val();
            
            if ($.isNumeric(spacing)) {
                spacing = parseInt(spacing, 10);
            } else if(spacing === 'tab') {
                spacing = '\t';
            }

            try {
                var parsedJson = JSON.parse($editor.val());
                $editor.val(JSON.stringify(parsedJson, null, spacing));
            } catch(e) {
                alert('The JSON you have entered does not appear to be valid.');
            } 
        }

    };

    var onClearClicked = function() {
        $editor.val('');
    };

    return {
        init: init
    };

}());

$(function() {
    formatter.init();
});