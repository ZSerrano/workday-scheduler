$('.saveBtn').on('click', function() {
    var input = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, input);
});


function schedule() {
    var totalHours = moment().hours();

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

schedule();

$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));

$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm'));