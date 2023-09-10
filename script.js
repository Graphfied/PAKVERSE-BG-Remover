document.getElementById('removeBackground').addEventListener('click', async function() {
    let uploadedImage = document.getElementById('uploadedImage');
    let processedImage = document.getElementById('processedImage');

    // Convert the uploaded image to a blob for sending to the API
    let imageBlob = await fetch(uploadedImage.src).then(r => r.blob());

    // Send the image to the remove.bg API
    let formData = new FormData();
    formData.append('image_file', imageBlob);
    formData.append('size', 'auto');

    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': 'RyNcM3BPNn1WSD1xi4PV8dEX'
        },
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        // Display the processed image
        processedImage.src = URL.createObjectURL(blob);
    })
    .catch(error => {
        console.error('Error removing background:', error);
        alert('Failed to remove background. Please try again.');
    });
});

document.getElementById('uploadImage').addEventListener('change', function(event) {
    let uploadedImage = document.getElementById('uploadedImage');
    uploadedImage.src = URL.createObjectURL(event.target.files[0]);
});
