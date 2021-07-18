// Style and Ux related

$(document).on("click", ".check--large", function (e) {
   e.stopPropagation();
   e.preventDefault();
   let $checkbox = $(e.target).closest(".check--large").find("input");
   if ($checkbox.prop("checked")) {
      $checkbox.prop("checked", false);
      $(e.target).closest(".check--large").removeClass("checked");
   }
   else {
      $checkbox.prop("checked", true);
      $(e.target).closest(".check--large").addClass("checked");
   }
});
