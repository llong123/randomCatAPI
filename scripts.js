window.onload = function() {
    newPicture();
}

function newPicture() {
    getCatData().then(data => {
        const imgContainer = document.getElementById("imgContainer");
        imgContainer.src = data[0].url
    });

}

async function getCatData() {
  
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = response.json();
    return data;
}