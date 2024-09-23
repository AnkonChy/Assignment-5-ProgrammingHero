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

      //history
      const historyItem = document.createElement("div");
      historyItem.className = "p-8 rounded-md border-2 border-gray-500";
      historyItem.innerHTML = `
      <p class="text-xl font-bold text-gray-500">${newNoaDonation} Taka is Donated for flood at Noakhali, Bangladesh</p>
      <p class="text-base font-light text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
      `;

      const historyContainer = document.getElementById("history-container");
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);
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

      //history
      const historyItem = document.createElement("div");
      historyItem.className = "p-8 rounded-md border-2 border-gray-500";
      historyItem.innerHTML = `
         <p class="text-xl font-bold text-gray-500">${newFeniDonation} Taka is Donated for flood Relief in Noakhali, Bangladesh</p>
         <p class="text-base font-light text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
         `;

      const historyContainer = document.getElementById("history-container");
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);
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

      //history
      const historyItem = document.createElement("div");
      historyItem.className = "p-8 my-6 rounded-md border-2 border-gray-500";
      historyItem.innerHTML = `
         <p class="text-xl font-bold text-gray-500">${newQuotaDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
         <p class="text-base font-light text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
         `;

      const historyContainer = document.getElementById("history-container");
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    } else {
      alert("Insufficient Balance");
    }
  });

//   history tab functionality
const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-primary");
  donationTab.classList.remove("bg-primary");
  document.getElementById("donation-container").classList.add("hidden");
  document.getElementById("history-container").classList.remove("hidden");
});

//donation tab functionality
donationTab.addEventListener("click", function () {
  donationTab.classList.add("bg-primary");
  historyTab.classList.remove("bg-primary");
  document.getElementById("donation-container").classList.remove("hidden");
  document.getElementById("history-container").classList.add("hidden");
});
