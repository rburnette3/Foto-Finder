var titleInput = document.getElementById('title_input');
var captionInput = document.getElementById('caption_input');
var addToAlbumButton = document.getElementById('saveButton');
var fileImageChooserButton = document.getElementById('choose-file-button');
var imageTitle = document.getElementById('image_title');
var userImageCaption = document.getElementById('user_image_caption');
var userImage = document.getElementById('user_image');


function fileChooser(filepath) {
  return filepath.split('\\').pop();
};


addToAlbumButton.addEventListener('click', function() {
  console.log("I've been clicked");
  imageTitle.innerText = titleInput.value;
  userImageCaption.innerText = captionInput.value;
  userImage.value = "photos/" + fileChooser(fileImageChooserButton.value);
  console.log(fileChooser(fileImageChooserButton.value));
// var imageTitle.innerText = titleInput.value;
// var userImageCaption.innerText = captionInput.value;
})
