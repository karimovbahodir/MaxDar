document.addEventListener("DOMContentLoaded", function () {
  const clientId = document.getElementById("thanks-name");

  let nameClient = localStorage.getItem("lpg3746_name");
  clientId.innerHTML = nameClient + ",";
  document.title = nameClient + ", спасибо! Ваша заявка принята";
});
