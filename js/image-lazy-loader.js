// Image lazy loading script

document.addEventListener('DOMContentLoaded', function() {
  // Check if browser supports Intersection Observer
  if ('IntersectionObserver' in window) {
    // Select all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        // If image is in viewport
        if (entry.isIntersecting) {
          const img = entry.target;
          // Replace src with data-src
          img.src = img.dataset.src;
          // Remove data-src attribute
          img.removeAttribute('data-src');
          // Stop observing the image
          imageObserver.unobserve(img);
        }
      });
    });
    
    // Observe each lazy image
    lazyImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    // Fallback for browsers that don't support Intersection Observer
    // Load all images immediately
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(function(img) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
});