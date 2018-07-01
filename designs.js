// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
})

function makeGrid(h, w) {
// Your code goes here!
    $('tr').remove();
    for (var i = 1; i <= h; i++){
        $('#pixelCanvas').append('<tr id=tab' + i + '></tr>');
        for (var j = 1; j <= w; j++){
            $('#tab' + i).append('<td></td>');
        }
    }

//add cell color

    $('td').click(function addcolor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')){
            $(this).removeAttr('style')
        }else{
            $(this).attr('style', 'background-color:' + color);
        }
    })

}