// Style and Ux related

$(document).on("click", ".check--large", function (e) {
   e.stopPropagation();
   e.preventDefault();
   let $checkbox = $(e.target).closest(".check--large").find("input");
   if ($checkbox.prop("checked")) {
      $checkbox.prop("checked", false).change();
      $(e.target).closest(".check--large").removeClass("checked");
   }
   else {
      $checkbox.prop("checked", true).change();
      $(e.target).closest(".check--large").addClass("checked");
   }
});


const $steps = [
   $("#step-1"),
   $("#step-2"),
   $("#step-3"),
   $("#step-4")
];

let currentStep = 0;
let checkedServices = [];
// let currentStep = 1;
// let checkedServices = ["other"];


function init_form() {
   $steps.forEach($step => {
      $step.hide();
   });
   $steps[currentStep].show();

   $(".js-service").hide().removeClass("enabled");
   $(".js-service").find(".required").prop("required", false)
   checkedServices.forEach(element => {
      $(".js-service.form-" + element).show().addClass("enabled");
      $(".js-service.form-" + element).find(".required").prop("required", true);
   });

   console.log("form init");
}

function submit_step(e, step) {
   e.preventDefault();
   console.log("step submitted:", $steps[step]);
   switch (step) {
      case 0:
         handle_step_0();
         break;

      case 1:
         handle_step_1();
         break;

      case 2:

         break;

      case 3:

         break;

      default:
         console.log("error", "step non existent", step);
         break;
   }
   return;
}

function handle_step_0() {
   checkedServices = [];
   $steps[0].find(".submit-error").text("");

   $steps[0].find("input:checked").each(function (index) {
      console.log($(this).prop("id"), this);
      checkedServices.push($(this).prop("id"))
   })
   if (checkedServices.length > 0) {
      console.log(checkedServices);
      currentStep = 1;
      init_form();
   } else {
      $steps[0].find(".submit-error").text("Please select at least one service");
   }
}

function handle_step_1() {
   $steps[1].find(".submit-error").text("");
   $steps[1].find(".error").removeClass("error");
   $steps[1].find(".text-error").text("");

   checkedServices.forEach(element => {
      $(".js-service.form-" + element).find("input").each(function () {
         // if (!$(this).parsley().isValid()) {
         //    $(this).addClass("error");
         // }
      });
      $(".js-service.form-" + element).find("textarea").each(function () {
         // if (!$(this).parsley().isValid()) {
         //    $(this).addClass("error");
         // }
      });
      $(".js-service.form-" + element).find("select[required]").each(function () {
         if ($(this).find("option:selected").prop("value") == "null") {
            $(this).addClass("error");
         }
      });
      if ($(".js-service.form-" + element).find(".js-graphics:checked").length < 1) {
         $(".text-error.graphics").text("Please select at least one.")
      }
   });

   currentStep = 2;
   init_form();
}


$(function () {

   init_form();

});