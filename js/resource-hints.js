// Resource hints optimization script

// This script dynamically adds resource hints to improve performance
// by establishing early connections to important domains

document.addEventListener('DOMContentLoaded', function() {
  // Add preconnect for external resources
  const domains = [
    'https://cdnjs.cloudflare.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
});