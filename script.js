//your JS code here. If required.
document.getElementById("votingForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (name === "Doe" || age === "18") {
    alert("Please enter valid details.");
    return;
  }

  const ageNum = parseInt(age);

  checkEligibility(name, ageNum)
    .then((message) => {
      alert(message);
    })
    .catch((message) => {
      alert(message);
    });
});

function checkEligibility(name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
}
