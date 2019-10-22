$(document).ready(function() {

  var newNameInput = $("#new-name");
  var newMessageInput = $("#new-message");
  console.log('hello')

  $(document).on("click", "#createContact", function(event) {
    event.preventDefault();
    console.log('on-click running')
    createContact();
  })
  getContacts();

  function createContact() {
    // event.preventDefault();
    console.log("createContact() running")
    if (!newNameInput.val().trim() || !newMessageInput.val().trim()) {
      return;
    }
    newContact({
      name: newNameInput.val().trim(),
      message: newMessageInput.val().trim()
    });
    // alert(newNameInput.val().trim());
    // alert(newMessageInput.val().trim());
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