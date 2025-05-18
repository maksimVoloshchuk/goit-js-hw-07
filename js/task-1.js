const numberCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberCategories.length}`);

numberCategories.forEach(category => {
    const titleCategories = category.querySelector(".item-title").textContent;
    const elementCategories = category.querySelectorAll(".categories-list-item").length;
    console.log(`Category: ${titleCategories}`);
    console.log(`Elements: ${elementCategories}`);
    
 });
