const menuBtn = document.querySelector(".menu-btn");
const sideMnu = document.querySelector("aside");
const closeBtn = document.querySelector(".close-icon");
const themeToggle = document.querySelector(".theme-toggle");
menuBtn.addEventListener("click", () => {
  sideMnu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMnu.style.display = "none";
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark__theme-variables");
  themeToggle.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggle.querySelector("span:nth-child(2)").classList.toggle("active");
});

orders.map((order) => {
  const tr = document.createElement("tr");
  const trContent = `
                  <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${order.shipping === 'Declined'? 'danger' : order.shipping === 'pending'? 'warning' : 'primary'}">${order.shipping}</td>
                <td class="primary">Details</td>
  `
  tr.innerHTML = trContent
  document.querySelector("table tbody").appendChild(tr)
});
