let photoTwo = document.getElementById('photoTwo'); 
let canvasTwo = document.getElementById('canvasTwo');
let contextTwo = canvasTwo.getContext('2d');
let capturedDrawingSaveButton = document.getElementById('capturedDrawingSaveButton');
let painting = false;
let dataTwo;

canvasTwo.addEventListener('mousedown', startPosition);
canvasTwo.addEventListener('mouseup', finishPosition);
canvasTwo.addEventListener('mousemove', draw);
canvasButton.addEventListener('click', saveDrawing);
capturedDrawingSaveButton.addEventListener('click', saveImage);

function startPosition(event) {
  painting = true;
  draw(event); //for drawing dots
}
  
function finishPosition() {
  painting = false;
  contextTwo.beginPath(); //to start new lines after one another
}

function draw(event) {  
  if (!painting) return;    
  contextTwo.lineWidth = 2;  
  contextTwo.lineCap = 'round';
  contextTwo.lineTo(event.offsetX, event.offsetY);  contextTwo.stroke();  contextTwo.beginPath();  contextTwo.moveTo(event.offsetX, event.offsetY);
  // console.log(event.offsetX+" "+event.offsetY) //for testing coordinates
}

function saveDrawing(){ 
  event.preventDefault(); 
  dataTwo = canvasTwo.toDataURL('image/png');  
  photoTwo.setAttribute('src', dataTwo);
}

function saveImage(){
  let key = "galleryPhoto" + (localStorage.length);     
  dataTwo = canvasTwo.toDataURL('image/png');
  localStorage.setItem(key, dataTwo);
}

