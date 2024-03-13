function getCatImages() {
  return fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(response => response.json());
}

function printCatImages(images) {
  document.write('<h2>Gatos</h2>');

  images.forEach(image => {
      const imageUrl = image.url;
      document.write(`<img src='${imageUrl}' width='150' />`);
  });
}

getCatImages()
  .then(printCatImages)
  .catch(error => {
      console.error('Error:', error);
  });