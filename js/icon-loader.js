// Asynchronous Font Awesome icon loading

// This script dynamically loads Font Awesome icons only when needed
// to reduce initial page load time and eliminate render blocking

function loadFontAwesome() {
  // Create a link element for Font Awesome
  const fontAwesomeLink = document.createElement('link');
  fontAwesomeLink.rel = 'stylesheet';
  fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
  fontAwesomeLink.type = 'text/css';
  
  // Append to head
  document.head.appendChild(fontAwesomeLink);
}

// Load Font Awesome after page content is loaded
if (window.requestIdleCallback) {
  // Use requestIdleCallback if available (modern browsers)
  requestIdleCallback(() => {
    loadFontAwesome();
  });
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(() => {
    loadFontAwesome();
  }, 1);
}