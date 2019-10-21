$(document).ready(function() {

  var newNameInput = $("#new-name");
  var newMessageInput = $("#new-message");

  $(document).on("submit", "#createContact", createContact, alertSender);

  getContacts();

  function createContact(event) {
    event.preventDefault();
    if (!newNameInput.val().trim() || !newMessageInput.val().trim()) {
      return;
    }
    newContact({
      name: newNameInput.val().trim(),
      message: newMessageInput.val().trim()
    });
    alert(newNameInput.val().trim());
    alert(newMessageInput.val().trim());
  }

  function newContact(userData) {
    console.log(userData)
    $.post("/api/contacts", userData)
      .then(getContacts);
    console.log(userData);
  }

  function getContacts() {
    $.get("/api/contacts", function(data) {
      newNameInput.val("");
      newMessageInput.val("");
    });
  }

  function alertSender() {
    alert("Your message has been sent.")
  };
});