fetch('videos.json')
  .then(response => response.json())  // Parse JSON data
  .then(videos => {
    // Loop through the video array and create the HTML for each video
    videos.forEach(video => {
      // Create the wrapper div around the video card
      // Get the container where the videos will be inserted
      const container = document.getElementById(video.section);
      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper");

      // Create the video card div
      const videoCard = document.createElement("div");
      videoCard.classList.add("video-card");

      // Create the div for the video element
      const videoDiv = document.createElement("div");
      const videoElement = document.createElement("video");
      videoElement.setAttribute("controls", "");
      videoElement.setAttribute("preload", "auto");
      const source = document.createElement("source");
      source.setAttribute("src", video.src);
      source.setAttribute("type", "video/mp4");
      videoElement.appendChild(source);
      videoDiv.appendChild(videoElement);  // Append the video element to its div

      // Create the div for the description
      const descriptionDiv = document.createElement("div");
      const description = document.createElement("h3");
      description.classList.add("primary-font-2", "primary-size-400");
      description.textContent = video.description;
      descriptionDiv.appendChild(description);  // Append the description to its div

      // Append the video and description divs to the video card
      videoCard.appendChild(videoDiv);
      videoCard.appendChild(descriptionDiv);

      // Append the video card to the wrapper
      wrapper.appendChild(videoCard);

      // Append the wrapper to the container
      container.appendChild(wrapper);
      
    });
  })
  .catch(error => {
    console.error("Error loading video data:", error);
  });

const sidebar = document.querySelector('.primary-navbar-laptop');
const menu = document.querySelector('#primary-nav-mobile');
const close = document.querySelector('#close-nav-mobile');

function showSidebar(){
  sidebar.style.display = 'flex';
  close.style.display = 'flex';
  close.style.zIndex = '999';
  menu.style.display = 'none';
}
function hideSidebar(){
  sidebar.style.display = 'none';
  close.style.display = 'none';
  menu.style.display = 'flex';
}
