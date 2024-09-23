//noakhali
document
  .getElementById("donate-noakhali-btn")
  .addEventListener("click", function () {
    const newNoaDonation = getInputFieldValueById("noakhali-donate-input");
    const noakhaliCurrentTotal = getTextFieldValueById(
      "noakhali-total-collect"
    );
    const availableBalance = getTextFieldValueById("available-balance");
    if (availableBalance > newNoaDonation) {
      const newNoaTotal = newNoaDonation + noakhaliCurrentTotal;
      document.getElementById(
        "noakhali-total-collect"
      ).innerText = `${newNoaTotal} BDT`;
    } else {
      alert("Insufficient Balance");
    }
  });

//feni
document
  .getElementById("donate-feni-btn")
  .addEventListener("click", function () {
    const newFeniDonation = getInputFieldValueById("feni-donate-input");
    const feniCurrentTotal = getTextFieldValueById("feni-total-collect");
    const availableBalance = getTextFieldValueById("available-balance");
    if (availableBalance > newFeniDonation) {
      const newFeniTotal = newFeniDonation + feniCurrentTotal;
      document.getElementById(
        "feni-total-collect"
      ).innerText = `${newFeniTotal} BDT`;
    } else {
      alert("Insufficient Balance");
    }
  });

//quota
document
  .getElementById("donate-quota-btn")
  .addEventListener("click", function () {
    const newQuotaDonation = getInputFieldValueById("quota-donate-input");
    const quotaCurrentTotal = getTextFieldValueById("quota-total-collect");
    const availableBalance = getTextFieldValueById("available-balance");
    if (availableBalance > newQuotaDonation) {
      const newQuotaTotal = newQuotaDonation + quotaCurrentTotal;
      document.getElementById(
        "quota-total-collect"
      ).innerText = `${newQuotaTotal} BDT`;
    } else {
      alert("Insufficient Balance");
    }
  });
