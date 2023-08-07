// JavaScript to toggle the visibility of the biography section
document.getElementById("toggleBiography").addEventListener("click", function () {
    var biographySection = document.querySelector(".biography_section");
    biographySection.classList.toggle("hidden");
  
    var toggleButton = document.getElementById("toggleBiography");
    if (biographySection.classList.contains("hidden")) {
      toggleButton.textContent = "Show Biography";
    } else {
      toggleButton.textContent = "Hide Biography";
    }
  });
  