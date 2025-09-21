  // Select all sections and their children except hero
      document.querySelectorAll('section:not(#hero), .feature-card, .testimonial').forEach((el, index) => {
        el.setAttribute('data-aos', 'fade-up');        
        el.setAttribute('data-aos-duration', '1000');  
        el.setAttribute('data-aos-delay', index * 500); 
      });

      // Re-initialize AOS after dynamic changes
      AOS.refresh();


      AOS.init({
        duration: 1000,
        once: true,
      });
       // Pricing card selection effect
      const cards = document.querySelectorAll(".pricing-card");
      cards.forEach(card => {
        card.addEventListener("click", () => {
          cards.forEach(c => c.classList.remove("border-indigo-600", "shadow-lg"));
          card.classList.add("border-indigo-600", "shadow-lg");
        });
      });
      // enable Tailwind class dark-mode if using CDN
      if (window.tailwind) tailwind.config = { darkMode: 'class' };

      const themeToggle = document.getElementById('themeToggle');
      const html = document.documentElement;

      // Initialize based on existing class (optional)
      if (html.classList.contains('dark')) {
        themeToggle.innerHTML = '&#9728; Light';
      } else {
        themeToggle.innerHTML = '&#127769; Dark'; 
      }
    
      themeToggle.addEventListener('click', () => {
        const isDark = html.classList.toggle('dark');
        if (isDark) {
          themeToggle.innerHTML = '&#9728; Light'; 
        } else {
          themeToggle.innerHTML = '&#127769; Dark'; 
        }
      });
    
      // Mobile Menu Toggle
      const menuBtn = document.getElementById("menuBtn");
      const mobileMenu = document.getElementById("mobileMenu");
    
      menuBtn.addEventListener("click", () => {
        if (mobileMenu.classList.contains("max-h-0")) {
          mobileMenu.classList.remove("max-h-0");
          mobileMenu.classList.add("max-h-screen");
          menuBtn.innerHTML = "&#10005;"; 
        } else {
          mobileMenu.classList.add("max-h-0");
          mobileMenu.classList.remove("max-h-screen");
          menuBtn.innerHTML = "&#9776;"; 
        }
      });
    
      // Toggle Customer Stories
      document.getElementById("customerStoriesBtn").addEventListener("click", function() {
        const stories = document.getElementById("customerStories");
        stories.classList.toggle("hidden");
        this.textContent = stories.classList.contains("hidden") 
          ? "Read Customer Stories" 
          : "Hide Stories";
      });