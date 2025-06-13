//Page redirection here 
document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("full-name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMessage = document.getElementById("form-message");

  // Reset border styles
  [name, email, message].forEach(input => input.style.borderColor = "");

  // Validation
  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert("Please fill all fields.");
    if (!name.value.trim()) name.style.borderColor = "red";
    if (!email.value.trim()) email.style.borderColor = "red";
    if (!message.value.trim()) message.style.borderColor = "red";
    return;
  }

  const formData = new FormData(this);

  try {
    const response = await fetch("https://formsubmit.co/ajax/yogendra.gupta2023@vitstudent.ac.in", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      formMessage.style.visibility = "visible";
      formMessage.style.color = "limegreen";
      formMessage.innerText = "✅ Message sent successfully!";
      this.reset();
    } else {
      formMessage.style.visibility = "visible";
      formMessage.style.color = "red";
      formMessage.innerText = "❌ Failed to send message. Try again.";
    }
  } catch (error) {
    formMessage.style.visibility = "visible";
    formMessage.style.color = "red";
    formMessage.innerText = "❌ Network error. Try again.";
  }
});
// End of page redirection.. 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});
let mood_switch = document.getElementById("mode-switch")
let currMood = "dark"

mood_switch.addEventListener("click", function () {
    if (currMood === "dark") {
        currMood = "light"
        document.getElementById("mood").src = "imagees/moon_icon.webp";
        document.querySelector("body").style.backgroundColor = "#D4F6FF";
        document.querySelectorAll("#dumb-text, #Contact-heading, #Contact, #Intro , #rightDiv-heading , #About-text")
            .forEach(element => {
                element.style.color = "black";
            });

        document.getElementById("my-project-heading").style.setProperty("color", "black", "important");
        document.getElementById("about-me-heading").style.setProperty("color", "black", "important");
        document.getElementById("Contact").style.borderColor = "black";
        document.querySelector(".Home").style.backgroundColor = "#C6E7FF"
        document.querySelectorAll("#rightDiv, #DowmlordBtn").forEach(el => {
            el.style.backgroundColor = "floralwhite";
        });
        document.getElementById("content").style.borderColor = "black";

    }
    else if (currMood === "light") {
        currMood = "dark"
        document.getElementById("mood").src = "imagees/sun_icon.webp";
        document.querySelector("body").style.backgroundColor = "#0f172a";
        document.querySelectorAll("#dumb-text, #Contact-heading, #Contact, #Intro , #rightDiv-heading , #my-project-heading , #About-text")
            .forEach(element => {
                element.style.color = "white";
            });
        document.getElementById("about-me-heading").style.setProperty("color", "white", "important");
        document.getElementById("Contact").style.borderColor = "white";
        document.querySelector(".Home").style.backgroundColor = "#1e293b"
        document.querySelectorAll("#rightDiv, #DowmlordBtn").forEach(el => {
            el.style.backgroundColor = "white";
        });
        document.getElementById("content").style.borderColor = "white";

    }
})

document.getElementById("form").addEventListener("submit", function (e) {
    const name = document.getElementById("full-name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        e.preventDefault();
        alert("Please submit valid details.");

        if (!name.value.trim()) {
            name.style.borderColor = "red";
        }
        if (!email.value.trim()) {
            email.style.borderColor = "red";
        }
        if (!message.value.trim()) {
            message.style.borderColor = "red";
        }

    }
    else {
        let form_message = document.getElementById("form-message");
        form_message.style.visibility = "visible";
        form_message.style.display = "block"
    }
})
