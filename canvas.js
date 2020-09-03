// let photoTwo = document.getElementById('photoTwo'); 
let canvas = document.getElementById('canvasTwo');
let context = canvas.getContext('2d');
// let capturedDrawingSaveButton = document.getElementById('capturedDrawingSaveButton');
let painting = false;
// let dataTwo;

// canvas.addEventListener('mousedown', startPosition);
// canvas.addEventListener('mouseup', finishPosition);
// canvas.addEventListener('mousemove', draw);
// canvasButton.addEventListener('click', saveDrawing);
// capturedDrawingSaveButton.addEventListener('click', saveImage);

// function startPosition(event) {
//   painting = true;
//   draw(event); //for drawing dots
// }
  
// function finishPosition() {
//   painting = false;
//   context.beginPath(); //to start new lines after one another
// }

// function draw(event) {  
//   if (!painting) return;    
//   context.lineWidth = 2;  
//   context.lineCap = 'round';
//   context.lineTo(event.offsetX, event.offsetY);  context.stroke();  context.beginPath();  context.moveTo(event.offsetX, event.offsetY);
//   // console.log(event.offsetX+" "+event.offsetY) //for testing coordinates
// }

// function saveDrawing(){ 
//   event.preventDefault(); 
//   dataTwo = canvas.toDataURL('image/png');  
//   photoTwo.setAttribute('src', dataTwo);
// }

// function saveImage(){
//   let key = "galleryPhoto" + (localStorage.length);     
//   dataTwo = canvas.toDataURL('image/png');
//   localStorage.setItem(key, dataTwo);
// }

