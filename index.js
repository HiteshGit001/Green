function boxvisible(){
    let vis = document.getElementById("iteam");
    // console.log("hii")
    // console.log(vis.style.visibility);
    vis.style.display="inline";
    vis.style.width="100%";
    vis.style.height="100%";
    vis.classList.add("coll");
}

function boxhide(){
    let hvis = document.getElementById("iteam");
    // console.log("vis")
    // console.log(hvis.style.visibility);
    hvis.style.display="none";
}