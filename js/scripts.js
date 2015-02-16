$(document).ready(function() {
  $("form#add-task").submit(function(event) {
    event.preventDefault();

    var taskName = $("#task").val();

    $(".to-do-list").append("<li>" + taskName + "</li>");

    $("#task").val("");

    $(".to-do-list").last().click(function(li) {
      $(li.target).remove();

    });


  });

});
