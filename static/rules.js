$(function () {
  $(document).ready(function () {
    $("#next_button").click(function () {
      if (rule.next_rule == "end") {
        window.location.href = "/practice/1";
      } else {
        window.location.href = "/rules/" + rule.next_rule;
      }
    });
  });
});
