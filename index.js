const input = document.getElementById('input')
const preview = document.getElementById('preview')
const previewCtx = preview.getContext('2d') //manipulation API

// const image = new Image() //image API
// const fileReader = new FileReader() //data url | File API

const worker = new Worker('worker.js')

worker.addEventListener('message',(d)=>{
    const imageData = d.data
    previewCtx.putImageData(imageData, 0, 0)
})

function applyFilter(){
  const imageData = previewCtx.getImageData(0,0,preview.width, preview.height) //its a one dimensional number, every group of 4 makes one pixel. rgbAlpha
  worker.postMessage(imageData, [imageData.data.buffer])
  
}

// image.addEventListener('load', (e)=>{
//     preview.width = image.width
//     preview.height = image.height
//     previewCtx.drawImage(image, 0,0)
//     applyFilter()
// })

// fileReader.addEventListener('load', (e)=>{
//     const base64 = e.target.result
//     image.src = base64
// })

input.addEventListener('change', (e)=>{
    const file = e.target.files[0]
    createImageBitmap(file) //allow you to pass file data and creates file data, it avoids filereader API, its a promise based
        .then((bitmap)=>{
            preview.width = bitmap.width
            preview.height = bitmap.height
            previewCtx.drawImage(bitmap, 0,0)
            applyFilter()
        })
    
    
    // fileReader.readAsDataURL(file)
})