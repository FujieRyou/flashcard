const photo = document.getElementById("photo")
console.log(photo);

const photoBnt = document.getElementById("photoBnt")
console.log(photoBnt);

const karuta = document.getElementById("karuta")
console.log(karuta);

photoBnt.addEventListener("change",(e)=>{
    const reader = new FileReader();
    reader.onload = (e) =>{
        karuta.setAttribute("src",e.target.result);
    }
    reader.readAsDataURL(e.target.files[0])
})


