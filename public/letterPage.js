async function loadImages(){

    const letter = location.href.split('=')[1]

    document.getElementById("letterLabel").textContent = letter

    const response = await fetch('media.abcphotos.xyz/' + letter + '/manifest.json');

    if (!response.ok) {
        console.error('Failed to load manifest:', response.status, response.statusText);
        return;
    }

    const filenames = await response.json();

    console.log('/media/' + letter +  '/manifest.json');

    console.log(filenames);

    filenames.forEach(fname => {
        const a = document.createElement('a')
        const gallery = document.getElementById('gallery');
        const img = document.createElement('img');

        a.href = "/imagePage.html?img=" + fname
        a.textContent = '/media/' + letter + '/' + fname + '.jpg';

        img.src = '/media/' + letter + '/' + fname + '.jpg';
        
        a.appendChild(img)
        gallery.appendChild(a);

        console.log(img.src);
    });
}