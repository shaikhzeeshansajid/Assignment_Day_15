document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("user").value.trim();
  let email = document.getElementById("mail").value.trim();
  let phone = document.getElementById("mobile").value.trim();
  let feedback = document.getElementById("feedback");
  let records = document.getElementById("records");

  let emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || phone === "") {
    feedback.textContent = "All fields must be filled.";
    feedback.style.color = "red";
  } else if (!emailFormat.test(email)) {
    feedback.textContent = "Invalid email format.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Data submitted!";
    feedback.style.color = "green";

    let div = document.createElement("div");
    div.className = "record";
    div.textContent = `Name: ${name} | Email: ${email} | Phone: ${phone}`;
    records.appendChild(div);

    document.getElementById("signupForm").reset();
    setTimeout(() => {
      feedback.textContent = "";
    }, 2500);
  }
});

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("signupForm").reset();
  document.getElementById("feedback").textContent = "Form cleared.";
  document.getElementById("feedback").style.color = "orange";
});
