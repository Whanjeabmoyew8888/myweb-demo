<script>
document.addEventListener("DOMContentLoaded", function() {
  // เปิด/ปิดเมนูมือถือ
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", function() {
    if (navbar.style.display === "flex") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "flex";
    }
  });

  // Dropdown คลิกสำหรับมือถือ
  const dropdownParents = document.querySelectorAll(".has-dropdown > a");

  dropdownParents.forEach(function(parentLink) {
    parentLink.addEventListener("click", function(e) {
      e.preventDefault(); // ป้องกันลิงก์ไปหน้าอื่น
      const dropdown = this.nextElementSibling;
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      } else {
        dropdown.style.display = "block";
      }
    });
  });
});
</script>

