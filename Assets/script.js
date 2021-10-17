var button = $(".saveBtn")
var currentTime = moment().format('MMMM Do YYYY, h:mm a')
var plannerTime = parseInt($(this).attr('id'))

function scheduleTime() { 
    $(document).ready(function(){
        $('#currentTime').text(currentTime);
    });
    $(".time-block").each(function(){
        if (plannerTime < currentTime) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        } else if (plannerTime === currentTime) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })
};

  $('.saveBtn').on('click', function () {
    localStorage.setItem($(this).attr('name'), $('#' + $(this).attr('name')).val());
  });

  function storage() {
    for (var keyName in localStorage) {
        $('#value' + keyName + ' .description').val(localStorage.getItem(keyName))
    }
};

storage();
scheduleTime();