function loadContent(file, elementId) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Error loading content:', error));
  }
  

document.addEventListener('DOMContentLoaded', function() {
    loadContent('header.html', 'header');
    loadContent('footer.html', 'footer');
    const stylesheet = document.getElementById('styleSheet');
    const mobilestylesheet = document.getElementById('mobileStyleSheet');
    const version = new Date().getTime(); 
    stylesheet.href = `styles.css?v=${version}`;
    mobilestylesheet.href = `mobiles-styles.css?v=${version}`;
  });
  


 