# Foto-Finder readme.md

How to operate Foto-Finder:
Foto-Finder is is designed to collect stored photographs from users PC and and allows user to organize photos with title, caption, and mark as favorite.  User will select stored photograph from file on PC by using the "Choose File" button.  User has option to insert a "Title" and "Caption" is designated input fields.  upon completion user can add selected photograph to album by clicking "Add To Album" button.

#### Included Files:

index.html	readme.md	styles.css
photos		scripts.js	svg

### HTML layout:

HTML layout was composed from top to bottom, breakdown composition into individual sections based on expected user interface.
Header includes page title "FotoFinder" with provided SVG logo.  "Caption" and "Title" input fields follow in the "top section" ``<section>`` with the "Choose File" and "Add to Album" ``<button>`` beneath.  The "bottom section" ``<section>`` has been designated for the photo album of user selected photographs.

### CSS:

Elements, Classes and ID's were targeted and styled accordingly based on color and font specs provided.  Sections and elements were resized based on comp and then adjusted further with responsive design.

#### Color and Font Specs include:

Text:  Open Sans Extra-Bold 800 and Semibold 600.

Dark background-color: #3E2A35
Light background-color: #C2B2B4
Font color(logo): #FFFFFF
button color: #5B4447
button hover: #938284
photo-card font color: #3E2A35
photo-card border: #938284

### Javascript:

Javascript was built by first mapping out variables that would be used throughout.  Event listeners then added to interact with buttons.
