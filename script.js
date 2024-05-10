// This script will update links for GitHub and YouTube

// Input links here
const githubLink = "https://github.com/Peter-210/Hotdogs-Magic-VR";
const youtubeDemo = "wFi-kkt3EA4";
const youtubeTutorial = "o35lE4WKDtE";



// GitHub Project
const projectLink = document.querySelector("#project-link");
projectLink.setAttribute("href", githubLink);

// YouTube Demo Video
const videoDemo = document.querySelector("#youtube-demo");
createVideo(videoDemo, youtubeDemo, "youtube-demo-iframe", "Link to Video Demo");

// YouTube Tutorial Video
const videoTutorial = document.querySelector("#youtube-tutorial");
createVideo(videoTutorial, youtubeTutorial, "youtube-tutorial-iframe", "Link to Tutorial Video");



function createVideo(videoContainer, videoSource, videoId, linkTitle) {
    // YouTube Player iframe placeholder
    let videoWindow = document.createElement("div");
    videoWindow.setAttribute("id", videoId);
    videoContainer.appendChild(videoWindow);

    // YouTube Link (Will load before YouTube Player API)
    let videoLink = document.createElement("a");
    videoLink.textContent = linkTitle;
    videoLink.setAttribute("href", "https://youtu.be/" + videoSource + "?feature=shared");
    videoLink.setAttribute("target", "_blank");
    videoContainer.appendChild(videoLink);

    // YouTube Player API
    var player;
    onYouTubeIframeAPIReady = () => {
        player = new YT.Player(videoId, {
            videoId: videoSource,
            playerVars: {
                "playsinline" : 1,
                "rel" : 0
            }
        });
    }

    // Lazy Load the Youtube iframe Video
    document.addEventListener("scroll", onYouTubeIframeAPIReady);
    window.addEventListener("resize", onYouTubeIframeAPIReady);
    window.addEventListener("orientationChange", onYouTubeIframeAPIReady);
}
