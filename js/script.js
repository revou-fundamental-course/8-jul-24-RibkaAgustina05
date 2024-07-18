document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
    alert("Please enter valid values for weight and height.");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  localStorage.setItem("bmi", bmi);
  localStorage.setItem("gender", gender);

  // Redirect to result page or display the result
  window.location.href = "result.html";
});
