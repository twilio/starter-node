// Show an information box at the top of the page
function showFlash(message) {
    $('#flash span').html(message);
    $('#flash').show();
}

// Intercept our form button click
$('form button').on('click', function(e) {
    e.preventDefault();

    // Based on the selected demo, fire off an ajax request
    // We expect just a string of text back from the server (keeping it simple)
    var url = currentDemo == 'message' ? '/message' : '/call';
    $.ajax(url, {
        method:'POST',
        dataType:'text',
        data:{
            to:$('#to').val()
        },
        success: function(data) {
            showFlash(data);
        },
        error: function(jqxhr) {
            alert('There was an error sending a request to the server :(');
        }
    })
});
