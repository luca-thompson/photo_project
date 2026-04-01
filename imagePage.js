function setPage(){
    const fname = location.href.split('=')[1]
    document.getElementById("main").src=("/media/" + fname[0] + '/' + fname + ".jpg");
    document.getElementById("imgMark").textContent=fname;
}