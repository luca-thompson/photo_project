function setPage(){
    const fname = location.href.split('=')[1]
    document.getElementById("main").src=("https://media.abcphotos.xyz/" + fname[0] + '/' + fname + ".jpg");
    document.getElementById("imgMark").textContent=fname;
}