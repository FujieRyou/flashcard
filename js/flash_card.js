const photoBtn = document.getElementById("photoBtn")
console.log(photoBtn);

const inputPhotoBnt = document.getElementById("inputPhotoBnt")
console.log(inputPhotoBnt);

const karuta = document.getElementById("js-karuta")
console.log(karuta);

photoBtn.addEventListener("change",(e)=>{
    const reader = new FileReader();
    reader.onload = (e) =>{
        karuta.setAttribute("src",e.target.result);
    }
    reader.readAsDataURL(e.target.files[0])
})


