document.cookie = "ai_session=value; SameSite=None; Secure";

document.addEventListener("DOMContentLoaded", function() {
    var updateButton = document.getElementById("updateButton");
    if (updateButton) {
        updateButton.addEventListener("click", function() {
            var selectedValue = document.getElementById("editorfilter").value;

            // Show all videos initially
            var videos = document.querySelectorAll(".videos");
            videos.forEach(function(video) {
                video.style.display = "block";
            });

            // Filter videos based on selection
            if (selectedValue === "1") {
                hideEditorsExcept(".editedbylily, .editedbydee");
            } else if (selectedValue === "2") {
                hideEditorsExcept(".editedbysam, .editedbydee");
            } else if (selectedValue === "3") {
                hideEditorsExcept(".editedbysam, .editedbylily");
            }
        });
    }
});

function hideEditorsExcept(classNames) {
    var videos = document.querySelectorAll(".videos");
    videos.forEach(function(video) {
        if (!video.classList.contains(classNames)) {
            video.style.display = "none";
        } else {
            video.style.display = "block";
        }
    });
}