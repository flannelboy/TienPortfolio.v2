<script>
    // noinspection JSUnresolvedReference
    AOS.init();

    // Function to check if the user is on a mobile device
    function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

    // Autoplay the video on desktop, pause it on mobile
    var videoBackground = document.getElementById("videoBackground");

    if (isMobileDevice()) {
    videoBackground.removeAttribute("autoplay"); // Remove the autoplay attribute on mobile
} else {
    videoBackground.play(); // Autoplay the video on desktop
}
</script>