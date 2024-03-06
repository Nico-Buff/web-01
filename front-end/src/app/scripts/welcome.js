import template from "../views/welcome.html";
// TODO #export-functions: remove the IIFE

 
  // TODO #class: use the ES6 class keyword
  /* class WelcomeComponent constructor  */
  export function WelcomeComponent() {
    // TODO #extends: call super(template)
    this.template = template;
  }

  
  // TODO #class: turn function into a method of WelcomeComponent
  /* method WelcomeComponent.init */
  WelcomeComponent.prototype.init = function init() {
    var form = document.querySelector("form.form-signin");

    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          var name = event.srcElement.querySelector("#nickname").value;
          var size = parseInt(event.srcElement.querySelector("#size").value);

          _startGame(name, size);
        }
      },
      false
    );

    return this;
  };

  // TODO #class: turn function into a method of WelcomeComponent
  function _startGame(name, size) {
    var gamePage = "./#game";
    window.location = `${gamePage}?name=${name}&size=${size}`;
  }

