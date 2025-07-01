const toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('change', function() {
    if (this.checked) {
      toggles.forEach(other => {
        if (other !== this) other.checked = false;
      });
    }
  });
});