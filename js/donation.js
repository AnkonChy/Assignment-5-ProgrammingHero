//noakhali
document
  .getElementById("donate-noakhali-btn")
  .addEventListener("click", function () {
    const newNoaDonation = getInputFieldValueById("noakhali-donate-input");
    const noakhaliCurrentTotal = getTextFieldValueById(
      "noakhali-total-collect"
    );
    const availableBalance = getTextFieldValueById("available-balance");
    if (availableBalance >= newNoaDonation && newNoaDonation > 0) {
      const newNoaTotal = newNoaDonation + noakhaliCurrentTotal;
      const newAvailableBalance = availableBalance - newNoaDonation;

      document.getElementById(
        "noakhali-total-collect"
      ).innerText = `${newNoaTotal} BDT`;

      document.getElementById(
        "available-balance"
      ).innerText = `${newAvailableBalance} BDT`;

      //history
      const historyItem = document.createElement("div");
      historyItem.className = "p-8 my-6  rounded-md border-2 border-gray-500";
      historyItem.innerHTML = `
      <p class="text-xl font-bold text-gray-500">${newNoaDonation} Taka is Donated for flood at Noakhali, Bangladesh</p>
      <p class="text-base font-light text-gray-500">Date: ${new Date().toString()}</p>
      `;

      const historyContainer = document.getElementById("history-container");
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);

      document.getElementById("noakhali-donate-input").value = "";

      // add modal
      document
        .getElementById("donate-success-modal")
        .classList.remove("hidden");

      // remove modal
      document
        .getElementById("close-modal")
        .addEventListener("click", function () {
          document
            .getElementById("donate-success-modal")
            .classList.add("hidden");
        });
    } else {
      alert("Failed to donate.Please try again");
    }
  });

//feni
document
  .getElementById("donate-feni-btn")
  .addEventListener("click", function () {
    const newFeniDonation = getInputFieldValueById("feni-donate-input");
    const feniCurrentTotal = getTextFieldValueById("feni-total-collect");
    const availableBalance = getTextFieldValueById("available-balance");
    if (availableBalance >= newFeniDonation && newFeniDonation > 0) {
      const newFeniTotal = newFeniDonation + feniCurrentTotal;
      const newAvailableBalance = availableBalance - newFeniDonation;
      document.getElementById(
        "feni-total-collect"
      ).innerText = `${newFeniTotal} BDT`;

      document.getElementById(
        "available-balance"
      ).innerText = `${newAvailableBalance} BDT`;

      //history
      const historyItem = document.createElement("div");
      historyItem.className = "p-8 my-6  rounded-md border-2 border-gray-500";
      historyItem.innerHTML = `
         <p class="text-xl font-bold text-gray-500">${newFeniDonation} Taka is Donated for flood Relief in Feni, Bangladesh</p>
         <p class="text-base font-light text-gray-500">Date: ${new Date().toString()}</p>
         `;

      const historyContainer = document.getElementById("history-container");
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);

      //   for clear field
      document.getElementById("feni-donate-input").value = "";

      // add modal
      document
        .getElementById("donate-success-modal")
        .classList.remove("hidden");

      // remove modal
      document
        .getElementById("close-modal")
        .addEventListener("click", function () {
          document
            .getElementById("donate-success-modal")
            .classList.add("hidden");
        });
    } else {
      alert("Failed to donate.Please try again");
    }
  });

//quota
document
  .getElementById("donate-quota-btn")
  .addEventListener("click", function () {
    const newQuotaDonation = getInputFieldValueById("quota-donate-input");
    const quotaCurrentTotal = getTextFieldValueById("quota-total-collect");
    const availableBalance = getTextFieldValueById("available-balance");
    if (availableBalance >= newQuotaDonation && newQuotaDonation > 0) {
      const newQuotaTotal = newQuotaDonation + quotaCurrentTotal;
      const newAvailableBalance = availableBalance - newQuotaDonation;
      document.getElementById(
        "quota-total-collect"
      ).innerText = `${newQuotaTotal} BDT`;

      document.getElementById(
        "available-balance"
      ).innerText = `${newAvailableBalance} BDT`;

      //history
      const historyItem = document.createElement("div");
      historyItem.className = "p-8 my-6 rounded-md border-2 border-gray-500";
      historyItem.innerHTML = `
         <p class="text-xl font-bold text-gray-500">${newQuotaDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
         <p class="text-base font-light text-gray-500">Date: ${new Date().toString()}</p>
         `;

      const historyContainer = document.getElementById("history-container");
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);

      //   for clear field
      document.getElementById("quota-donate-input").value = "";

      // add modal
      document
        .getElementById("donate-success-modal")
        .classList.remove("hidden");

      // remove modal
      document
        .getElementById("close-modal")
        .addEventListener("click", function () {
          document
            .getElementById("donate-success-modal")
            .classList.add("hidden");
        });
    } else {
      alert("Failed to donate.Please try again");
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
