
let file = document.getElementById('file');
let preview = document.getElementById('preview');
let gallery = document.getElementById('gallery');
let uploadimg = document.getElementById('uploadimg');


file.addEventListener('change', function () {
    let photo = this.files;
    
    console.log(photo);

    for(i = 0; i< photo.length;i++){
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            // preview.src = reader.result;
            //  console.log(reader.result);
            addToGallery(reader.result);
        });
        reader.readAsDataURL(photo[i]);
    }
});

function addToGallery(src){
    // console.log(src);
    let img = new Image();
    img.src = src;
    // console.log(img.src);
    img.classList = "gallery-img";
    gallery.appendChild(img);
}





