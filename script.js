document.getElementById('surpriseButton').addEventListener('click', function() {
    let currentImageIndex = 0;
    let imageElement = document.getElementById('friendImage').querySelector('img');
    let balloonsElement = document.getElementById('balloons');
    let musicElement = document.getElementById('music');

    
    function showImage() {
        imageElement.src = images[currentImageIndex];
        document.getElementById('friendImage').classList.remove('hidden');
    }
    showImage();

   
    balloonsElement.classList.remove('hidden');
    musicElement.classList.remove('hidden');
    musicElement.loop = true;  // Set the music to loop
    musicElement.play();

   
    for (let i = 0; i < 5; i++) { 
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        balloon.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay
        balloonsElement.appendChild(balloon);
    }
});
