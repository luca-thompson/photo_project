async function loadImages(){

    const letter = location.href.split('=')[1]

    document.getElementById("letterLabel").textContent = letter

    const response = await fetch('/media/' + letter +  '/manifest.json');
    const filenames = await response.json();

    filenames.forEach(fname => {
        const a = document.createElement('a')
        const gallery = document.getElementById('gallery');
        const img = document.createElement('img');

        a.href = "/imagePage.html?img=" + fname
        a.textContent = '/media/' + letter + '/' + fname + '.jpg';

        img.src = '/media/' + letter + '/' + fname + '.jpg';
        
        a.appendChild(img)
        gallery.appendChild(a);
    });
}