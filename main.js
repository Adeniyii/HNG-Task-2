const form = document.getElementById("my-form");

/**
 * Handle form submission.
 * @param {event} event Form onsubmit event.
 */
async function handleSubmit(event) {
  event.preventDefault();

  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);

  try {
    const response = await fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    status.classList.add("submitted");
    status.innerHTML = `Thanks for reaching out ${data.get("name")}!`;
    form.reset();
    setTimeout(() => {
      status.classList.toggle("submitted");
    }, 3000);
  } catch (error) {
    status.classList.add("submitted-error");
    status.innerHTML = "Oops! There was a problem submitting your form";
    setTimeout(() => {
      status.classList.toggle("submitted-error");
    }, 3000);
  }
}

form.addEventListener("submit", handleSubmit);
