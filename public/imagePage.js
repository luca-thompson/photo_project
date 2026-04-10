function setPage(){
    const fname = location.href.split('=')[1]
    document.getElementById("main").src=("https://media.abcphotos.xyz/" + fname[0] + '/' + fname + ".jpg");
    document.getElementById("imgMark").textContent=fname;

    document.getElementById("currentLetter").textContent = fname[0];
    document.getElementById("currentLetter").href = "/letterPage.html?letter=" + fname[0];
    document.getElementById("currentImage").textContent=fname;

}