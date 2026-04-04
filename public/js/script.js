// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to

  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  //Wishlist

  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    btn.addEventListener("click", async function (e) {
      e.preventDefault(); //  stop default
      e.stopPropagation(); //  stop card open

      const listingId = this.dataset.id;

      const res = await fetch(`/wishlist/${listingId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
      });

      //  Not logged in → go to login
      if (res.status === 401 || res.redirected) {
        window.location.href = "/login";
        return;
      }

      //  Toggle heart
      this.classList.toggle("saved");

      //  Burst animation
      this.classList.add("burst");
      setTimeout(() => this.classList.remove("burst"), 600);
    });
  });
  setTimeout(() => {
    let alerts = document.querySelectorAll(".alert");
    for (let alert of alerts) {
      let bsAlert = new bootstrap.Alert(alert);
      bsAlert.close();
    }
  }, 3000);
})();
