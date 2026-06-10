async function loadImages(){

  const letter = location.href.split('=')[1]

  document.getElementById("currentLetter").textContent = letter

  const response = await fetch('https://media.abcphotos.xyz/' + letter + '/manifest.json', { cache: 'no-store' });;

  const filenames = await response.json();

  console.log(filenames);

  filenames.sort();

  filenames.forEach(fname => {
      const a = document.createElement('a')
      const gallery = document.getElementById('gallery');
      const img = document.createElement('img');

      a.href = 'https://media.abcphotos.xyz/' + letter + '/' + fname + '.jpg'
      a.textContent = 'https://media.abcphotos.xyz/' + letter + '/' + fname + '.jpg';

      img.src = 'https://media.abcphotos.xyz/' + letter + '/' + fname + '.jpg';
      
      a.appendChild(img)
      gallery.appendChild(a);

      console.log(img.src);
  });
}

window.addEventListener('load', () => {
    const gallery = document.getElementById('gallery');
    
    gallery.addEventListener('wheel', (e) => {
        e.preventDefault();
        gallery.scrollBy({ left: e.deltaY * 2, behavior: "smooth" });
    }, { passive: false });
});