const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = '#ff6347'; 
  });

  item.addEventListener('mouseleave', () => {
    item.style.backgroundColor = '#eaeaea';     
  });
});
