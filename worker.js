
addEventListener('message', (d) => {
    const imageData = d.data
    const w = imageData.width
    const h = imageData.height
    const data = imageData.data

    for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
            let index = (x + (y * w)) * 4
            data[index] = data[index] * 1.2 //increasing "r" value zeroth index

            //   imageData.data[index + 3] = 127 //opacity
        }
    }
    postMessage(imageData, [imageData.data.buffer])
})