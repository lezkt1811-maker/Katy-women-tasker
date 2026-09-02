/* =========================================================================
   WOMEN HELPING WOMEN TASK SERVICE KC — SCRIPT.JS
   No frameworks, no build step. Plain vanilla JavaScript.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* -----------------------------------------------------------------------
     1. MOBILE NAV TOGGLE
     ----------------------------------------------------------------------- */
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the mobile menu after a link is tapped
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* -----------------------------------------------------------------------
     2. FOOTER COPYRIGHT YEAR (auto-updates every year, no manual editing)
     ----------------------------------------------------------------------- */
  var yearSpan = document.getElementById("copyrightYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* -----------------------------------------------------------------------
     3. TASK REQUEST FORM: validation + Formspree submission
     -------------------------------------------------------------------------
     HOW THIS WORKS:
     - The form's "action" attribute in index.html points to a Formspree
       endpoint. Until you replace "YOUR_FORM_ID" with your real Formspree
       form ID, this script detects that placeholder and shows a friendly
       message instead of pretending the submission worked.
     - Once connected, the script submits the form data with fetch() and
       shows an on-page confirmation message instead of redirecting away
       from your site.
     ----------------------------------------------------------------------- */
  var form = document.getElementById("taskRequestForm");
  var formError = document.getElementById("formError");
  var formConfirmation = document.getElementById("formConfirmation");
  var notConnectedNote = document.getElementById("formNotConnectedNote");

  if (form) {
    var isFormspreeConnected = form.action.indexOf("YOUR_FORM_ID") === -1;

    // Only show the "not connected yet" note if it truly isn't connected
    if (isFormspreeConnected && notConnectedNote) {
      notConnectedNote.hidden = true;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      hideError();

      // Honeypot check: if the hidden "website" field has a value,
      // silently treat this as spam and stop.
      var honeypot = form.querySelector("#website");
      if (honeypot && honeypot.value.trim() !== "") {
        return;
      }

      // Native HTML5 validation first
      if (!form.checkValidity()) {
        markInvalidFields();
        showError("Please fill in all required fields marked with *.");
        return;
      }

      // If Formspree isn't connected yet, explain clearly instead of
      // pretending the request was sent.
      if (!isFormspreeConnected) {
        showError(
          "This form isn't connected to a submission service yet. " +
          "The site owner needs to add a Formspree endpoint — see README.md."
        );
        return;
      }

      // Submit to Formspree via fetch so we can show an in-page confirmation
      var submitButton = form.querySelector(".btn-submit");
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending…";
      }

      var formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            form.hidden = true;
            formConfirmation.hidden = false;
            formConfirmation.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            response.json().then(function (data) {
              var message =
                data && data.errors && data.errors.length
                  ? data.errors.map(function (e) { return e.message; }).join(" ")
                  : "Something went wrong sending your request. Please try again, or reach out by phone or email instead.";
              showError(message);
            }).catch(function () {
              showError("Something went wrong sending your request. Please try again, or reach out by phone or email instead.");
            });
          }
        })
        .catch(function () {
          showError("Something went wrong sending your request. Please check your connection and try again.");
        })
        .finally(function () {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = "Send My Task Request";
          }
        });
    });
  }

  function showError(message) {
    if (!formError) return;
    formError.textContent = message;
    formError.hidden = false;
    formError.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function hideError() {
    if (!formError) return;
    formError.hidden = true;
    formError.textContent = "";
  }

  function markInvalidFields() {
    var fields = form.querySelectorAll("input, select, textarea");
    fields.forEach(function (field) {
      field.classList.add("touched");
    });
  }
});
