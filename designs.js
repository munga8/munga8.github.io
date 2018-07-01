$(function () {

    let height = $('#inputHeight');
    let width = $('#inputWidth');// Select color
    let colorPicker = $('#colorPicker');// Select canvas
    const canvas = $('#pixelCanvas');
    
    function makeGrid() {
    canvas.find('tbody').remove();// Submits the user's inputs to make the Grid
    let gridHeight = $('#inputHeight').val();
    let gridWidth = $('#inputWidth').val();
    canvas.append('<tbody></tbody>');let canvasBody = canvas.find('tbody');// add rows
     for (let x = 0; x < gridWidth; x++) {
       canvasBody.append('<tr></tr>');
    }// add columns
    for (y = 0; y < gridHeight; y++) {
       canvas.find('tr').append('<td></td>');
    }
    }cell = canvas.find('td');
    canvas.on('click', "td", function(){
         var color = $('#colorPicker').val();
            $(this).attr("bgcolor", color);
    });
    $(document).ready(function () {

     $('button[type="button"]').on('click', function (e) {    // Click the submit button to make the Grid
     e.preventDefault();
       makeGrid();
     });
    });
    
    $("td").click(function() {
      $(this).css("bgcolor", color.val());
    
     });
    
    });