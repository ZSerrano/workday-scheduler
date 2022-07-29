
// Clicking the Save Button assigns the textarea input to variable input and assigns the number ID for the row to variable time
$('.saveBtn').on('click', function() {
    var input = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
// Sets time and input in the user's local storage
    localStorage.setItem(time, input);
});

// Function that will color rows based on time utilizing Moment.js and CSS classes
function schedule() {
    // Aggregates the number of hours in the day that have passed so far
    var totalHours = moment().hours();
    // Sets each time block row to a certain color(CSS class) based on what hour in the day it is and how that relates mathematically to the number of hours that have passed
    $('.time-block').each(function () {
        var hourNow = parseInt($(this).attr('id'));

        if (hourNow < totalHours) {
            $(this).addClass('past');
        } else if (hourNow === totalHours) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}
// Calls function
schedule();
// Grabs the value of the input at each hour number that has been saved in local storage and ensures that the input stays on the page even after refresh
// as long as the save button has been pressed.
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));

// Displays current day/time on the page utilizing moment.js
$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm'));