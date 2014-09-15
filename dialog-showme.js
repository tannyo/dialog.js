/*
 * Simple form validations since html 5 input types are not always available.
 */
var form_validate = {
  email: function (email) {
    return this.required(email) && (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.trim()));
  },
  required: function (value) {
    return value.trim().length ? true : false;
  }
};

/*
 * When ready add click behavior to the buttons.
 */
$(document).ready(function () {
  $("#simple-alert").click(function (event) {
    event.stopPropagation();
    $.dialog.alert("Hello World");
  });

  $("#multi-line-alert").click(function (event) {
    event.stopPropagation();
    $.dialog.alert("Thank you for your request to join our\ncommunity. We will get back to you soon.");
  });

  $("#auto-close-alert").click(function (event) {
    event.stopPropagation();
    $.dialog.alert("This alert will automatically close in 5 seconds.").autoClose(5000);
  });

  $("#simple-confirm").click(function (event) {
    event.stopPropagation();
    $.dialog.confirm("Are you sure?").onClose(function (response) {
      if (response) {
        $.dialog.alert("You clicked OK or pressed the Enter/Return key.").autoClose(5000);
      } else {
        $.dialog.alert("You clicked Cancel or pressed the Esc key.").autoClose(5000);
      }
    });
  });

  $("#three-btn-confirm").click(function (event) {
    event.stopPropagation();
    $.dialog.confirm("Document has changes, do you want to save the changes?", {ok: "Yes", cancel: "No", option: "Don't Save"}).onClose(function (response) {
      if ($.dialog.isOk(response)) {
        $.dialog.alert("You clicked Yes or pressed the Enter/Return key.").autoClose(5000);
      } else if ($.dialog.isCancel(response)) {
        $.dialog.alert("You clicked No or pressed the Esc key.").autoClose(5000);
      } else {
        $.dialog.alert("You clicked the Don't Save button").autoClose(5000);
      }
    });
  });

  $("#contact-us").on("click", function (event) {
    event.stopPropagation()

    function onSubmit(event) {
      event.preventDefault();
      form = $(this);

      var email = form.find("#contact-email").val(),
      subject = form.find("#contact-topic").val(),
      body = form.find("#contact-body").val();

      form.find("input, button").blur();
      if (!form_validate.email(email)) {
        $("#contact-form .error").removeClass("hidden").text("Please enter your email address.");
        form.find("input").focus();
        return;
      }

      if (!form_validate.required(subject)) {
        $("#contact-form .error").removeClass("hidden").text("Please select an topic.");
        form.find("select").focus();
        return;
      }

      if (!form_validate.required(body)) {
        $("#contact-form .error").removeClass("hidden").text("Please enter a description.");
        form.find("textarea").focus();
        return;
      }

      $.dialog.close("contact-form");
      $.dialog.alert("Thank you for contacting us.\nWe will get back to you soon.\n\nThis alert will automatically close in 5 seconds.").autoClose(5000);
    }

    function open(dialog) {
      dialog.find("form").on("submit", onSubmit);
      dialog.find("#contact-email").focus();
    }

    $.dialog.open("contact-form").onOpen(open);
  });
});
