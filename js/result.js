document.addEventListener("DOMContentLoaded", function () {
  const bmi = localStorage.getItem("bmi");
  const gender = localStorage.getItem("gender");

  if (!bmi) {
    alert("BMI not found. Please calculate your BMI first.");
    window.location.href = "index.html";
    return;
  }

  document.getElementById("bmiValue").textContent = bmi;

  let status, description, advice;

  if (bmi < 18.5) {
    status = "Kekurangan berat badan";
    description = "Anda memiliki berat badan kurang.";
    advice = "Disarankan untuk meningkatkan asupan kalori dan nutrisi.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Normal (ideal)";
    description = "Anda memiliki berat badan normal.";
    advice = "Pertahankan pola makan dan gaya hidup sehat.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = "Kelebihan berat badan";
    description = "Anda memiliki berat badan berlebih.";
    advice = "Disarankan untuk mengatur pola makan dan rutin berolahraga.";
  } else {
    status = "Kegemukan (Obesitas)";
    description = "Anda memiliki berat badan berlebih.";
    advice = "Disarankan untuk berkonsultasi dengan ahli gizi.";
  }

  document.getElementById("bmiStatus").textContent = status;
  document.getElementById("bmiDescription").textContent = description;
  document.getElementById("bmiAdvice").textContent = advice;
});
