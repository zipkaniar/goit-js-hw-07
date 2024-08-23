// 1. Kategorilerin sayısını hesaplayalım
const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

// 2. Her bir kategori için başlığı ve içerdiği öğelerin sayısını bulalım
categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('ul li').length;
  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});