const featureBtn = document.getElementById("feature-btn");
const companyBtn = document.getElementById("company-btn");
const featureDropdown = document.getElementById("feature-dropdown");
const companyDropdown = document.getElementById("company-dropdown");

featureBtn.addEventListener("mouseover", function () {
  featureDropdown.classList.remove("hidden");
});

featureBtn.addEventListener("mouseout", function () {
  featureDropdown.classList.add("hidden");
});

companyBtn.addEventListener("mouseover", function () {
  companyDropdown.classList.remove("hidden");
});

companyBtn.addEventListener("mouseout", function () {
  companyDropdown.classList.add("hidden");
});
