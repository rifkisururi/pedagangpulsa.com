// Font loading optimization script

// This script uses the Font Loading API to optimize font loading
// and reduce render blocking

if ('fonts' in document) {
  // Preload and optimize Poppins font loading
  Promise.all([
    document.fonts.load('300 1em Poppins'),
    document.fonts.load('400 1em Poppins'),
    document.fonts.load('500 1em Poppins'),
    document.fonts.load('600 1em Poppins'),
    document.fonts.load('700 1em Poppins')
  ]).then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
}