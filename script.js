// Button ripple effect
const loginBtn = document.querySelector('.login-btn');
const inputs = document.querySelectorAll('.form-input');

loginBtn.addEventListener('click', function(e) {
  if (e.target === this) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.height, rect.width);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
});

// Form validation + fake login
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = inputs[0].value.trim();
  const password = inputs[1].value.trim();

  if (username && password) {
    loginBtn.textContent = 'Logging in...';
    loginBtn.style.background = 'linear-gradient(45deg, #90EE90, #32CD32)';

    setTimeout(() => {
      // ✅ Instead of alert, redirect to intro.html
      window.location.href = "intro.html";
    }, 1500);
  } else {
    alert('Please fill in both username and password.');
  }
});

// Input focus effects
inputs.forEach(input => {
  input.addEventListener('focus', function() {
    this.style.transform = 'scale(1.02)';
  });

  input.addEventListener('blur', function() {
    this.style.transform = 'scale(1)';
  });
});
