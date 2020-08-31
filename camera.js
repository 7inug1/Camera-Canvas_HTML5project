let width = 320;
let height = 240;
let video = document.getElementById('video');
let photo = document.getElementById('photoOne');
let canvasOne = document.getElementById('canvasOne');
let contextOne = canvasOne.getContext('2d');
let streaming = false;
let cameraOnButton = document.getElementById('cameraOnButton');
let cameraOffButton = document.getElementById('cameraOffButton');
let cameraCaptureButton = document.getElementById('cameraCaptureButton');
let capturedPhotoSaveButton = document.getElementById('capturedPhotoSaveButton');
// data: containing a representation of the image in the format specified by the type parameter (defaults to PNG). 
let data;
let constraints = (window.constraints = {
  audio: false,
  video: true,
});

cameraOnButton.addEventListener('click', turnCameraOn);
cameraOffButton.addEventListener('click', turnCameraOff);
cameraCaptureButton.addEventListener('click', captureImage);
capturedPhotoSaveButton.addEventListener('click', saveImage);

function turnCameraOn(){
  navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
    })
    .catch(function (error) {
      console.log('Error has occured: ' + error);
    });
}

// reference: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/stop
function turnCameraOff(){
  navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {
      video.srcObject = stream;
      let tracks = stream.getTracks();
      tracks.forEach(function(track) {
        track.stop();
      });
      // srcObject is set to null to sever the link to the MediaStream object so it can be released.
      video.srcObject = null;
    })
    .catch(function (error) {
      console.log('getUserMedia() error', error);
    });
}

function captureImage(){
  if (width && height) {
    canvasOne.width = width;
    canvasOne.height = height;
    contextOne.drawImage(video, 0, 0, width, height);
    data = canvasOne.toDataURL('image/png');
    photo.setAttribute('src', data);    
  } else {
    clearImage();
  }
}
// Solve: What this is for
function clearImage(){
  contextOne.fillStyle = 'white';
  contextOne.fillRect(0, 0, canvasOne.width, canvasOne.height);

  data = canvasOne.toDataURL('image/png');
  photo.setAttribute('src', data);
}

function saveImage(){
  let key = "galleryPhoto" + (localStorage.length);    
  data = canvasOne.toDataURL('image/png');
  localStorage.setItem(key, data);
}


