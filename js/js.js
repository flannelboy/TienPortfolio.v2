
    // Stop video autoplay on mobile devices
    var video = document.getElementById('videoBackground');
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
    video.removeAttribute('autoplay');
}
