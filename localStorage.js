// keywords: indexedDB, cookies

let localStorageList = document.getElementById('localStrorageList');
let str="";
let savedImageContainer = document.getElementById('savedImageContainer');
let savedImage = document.getElementById('savedImage');
let imgNode= document.createElement("img");

getLocalStorageList();

function getLocalStorageList(){
  if(localStorage.length > 0){
    for(let i = 0; i<localStorage.length; i++){  
      str+="<li id='galleryPhoto" + i + "' ondblclick='previewImage(this)'>" + "galleryPhoto" + i + "</li>";
    }
  }else{
      str="LocalStorage is empty";
  }
    localStorageList.innerHTML=str;
}

function previewImage(element){
  let data;

  if((savedImageContainer.children.length==0)){
    savedImageContainer.appendChild(loadImage());
    data = localStorage.getItem(element.id);
    imgNode.setAttribute('src', data);
  }
  else if(savedImageContainer.children.length==1){
    data = localStorage.getItem(element.id);
    imgNode.setAttribute('src', data);
    savedImageContainer.appendChild(imgNode);
  }
}

function loadImage(){
  imgNode.setAttribute('id', 'savedImage');
  imgNode.setAttribute('alt', 'Saved images in local storage to be dragged and dropped to the #galleryArea dropReceivers');
  imgNode.setAttribute('draggable', 'true');
  imgNode.setAttribute('ondragstart', 'drag(event)');
  return imgNode;
}