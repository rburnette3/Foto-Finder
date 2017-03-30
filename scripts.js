var titleInput = document.getElementById('title_input');
var captionInput = document.getElementById('caption_input');
var addToAlbumButton = document.getElementById('saveButton');
var fileImageChooserButton = document.getElementById('choose-file-button');
var imageTitle = document.getElementById('image_title');
var userImageCaption = document.getElementById('user_image_caption');
var userImage = document.getElementById('user_image');
var bottomSection = document.getElementById('bottom_section');
var favButton = document.getElementById('favorite_button')

function fileChooser(filepath) {
  return filepath.split('\\').pop();
};


addToAlbumButton.addEventListener('click', function() {
  console.log("I've been clicked");
  addPhotoCard();
})

favButton.addEventListener('click', function() {
  console.log("click click");
})

function addPhotoCard() {
  var newPhotoCard = document.createElement('div');
  newPhotoCard.className = 'photo-card'

  var title = titleInput.value;
  var caption  = captionInput.value;
  var chosenPhoto = "photos/" + fileChooser(fileImageChooserButton.value);

  newPhotoCard.innerHTML =
  '<h5 id="image_title" class="image-title">' + title + '</h5>' +
  '<img src="' + chosenPhoto + '" alt="User uploaded image." id="user_image" class="user-image"/>' +
  '<p id="user_image_caption">' + caption + '</p>' +
  '<div id="card_footer" class="card-footer"><button class="card_buttons" type="button" name="button">' +
  '<img src="svg/delete.svg"/>' +
    '</button>' +
    '<button id="favorite_button" class="card_buttons" type="button" name="button"></button>'
  '</div>'
  bottomSection.appendChild(newPhotoCard);
}
