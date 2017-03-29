var titleInput = document.getElementById('title_input');
var captionInput = document.getElementById('caption_input');
var fileImageChooserButton = document.getElementById('choose-file-button');
var addToAlbumButton = document.getElementById('saveButton');
var imageTitle = document.getElementById('image_title');
var userImageCaption = document.getElementById('user_image_caption');
var userImage = document.getElementById('user_image');

addToAlbumButton.addEventListener('click', function() {
  console.log("I've been clicked");
  imageTitle.innerText = titleInput.value;
  userImageCaption.innerText = captionInput.value;
// var imageTitle.innerText = titleInput.value;
// var userImageCaption.innerText = captionInput.value;
})
