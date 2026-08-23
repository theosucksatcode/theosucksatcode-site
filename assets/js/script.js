document.addEventListener("DOMContentLoaded", () => {
  const user = "theosnyman.dev";
  const domain = "gmail.com";
  const emailAddress = `${user}@${domain}`;
  document.querySelectorAll("[data-link-email]").forEach((el) => {
    el.href = `mailto:${emailAddress}`;
    if (!el.textContent.trim()) el.textContent = email;
  });

  const phone = "+27824930488";
  const phoneDisplay = "+27 82 493 0488";
  document.querySelectorAll("[data-link-phone]").forEach((el) => {
    el.href = `tel:${phone}`;
    if (!el.textContent.trim()) el.textContent = phoneDisplay;
  });
});
