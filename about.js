//! Select form
const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const yourName = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.yourMessage.value;

  //!alternative way to access value
  // const yourName = document.querySelector('#john-doe');

  // const email = document.querySelector('#snail-mail');

  const error = document.querySelector('#error');

  //! declare function to have a pop-up alert so user knows fields are required.
  // function alertBox() {
  //     alert('Name and Email cannot be empty');
  //   }

  //! if name field or email field is empty have a message display saying they're required
  //! alternatively pass in the previously declared function for pop-up message to show
  if (!yourName || !email || !message) {
    //! make the hidden p tag (in CSS) to display as either a block element or inline element. FYI tried both and they both work
    // error.style.display = 'inline';
    error.style.display = 'block';
    //! function being passed in if conditional is true
    // alertBox();
  } else {
    error.style.display = 'none';
  }

  form.reset();
});
