document.getElementById('surpriseButton').addEventListener('click', function() {
    // Show the images one by one after button click
    let images = ['cutie1.png'];  // Add more images if needed
    let currentImageIndex = 0;
    let imageElement = document.getElementById('friendImage').querySelector('img');
    let balloonsElement = document.getElementById('balloons');
    let musicElement = document.getElementById('music');

    // Show images one by one
    function showImage() {
        imageElement.src = images[currentImageIndex];
        document.getElementById('friendImage').classList.remove('hidden');
    }

    // Show images
    showImage();

    // Show balloons and start music
    balloonsElement.classList.remove('hidden');
    musicElement.classList.remove('hidden');
    musicElement.loop = true;  // Set the music to loop
    musicElement.play();

    // Add fewer balloons dynamically (reduce the number to 5)
    for (let i = 0; i < 5; i++) {  // Reduced from 10 to 5
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        balloon.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay
        balloonsElement.appendChild(balloon);
    }
});
