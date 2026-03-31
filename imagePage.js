function setPage(){
    document.getElementById("main").src=("/assets/" + location.href.split('=')[1] + ".jpg")
    document.getElementById("imgMark").textContent=location.href.split('=')[1]
}