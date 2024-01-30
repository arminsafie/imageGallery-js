// Store uploaded images in an array
let images = [];

// Function to display images in the gallery
const displayImages = () => {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  images.forEach((imageUrl, index) => {
    const imageContainer = document.createElement("div");

    // Create image element
    const imageEl = document.createElement("img");
    imageEl.src = imageUrl;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("d-btn");
    deleteButton.addEventListener("click", () => deleteImage(index));

    // Append image and delete button to the container
    imageContainer.appendChild(imageEl);
    imageContainer.appendChild(deleteButton);

    // Append container to the gallery
    gallery.appendChild(imageContainer);
  });
};

// Function to handle image upload
const uploadImage = () => {
  const input = document.getElementById("imageInput");

  // Check if a file is selected
  if (input.files.length > 0) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageUrl = e.target.result;
      images.push(imageUrl);
      displayImages();
    };

    reader.readAsDataURL(file);
  }
};

// Function to delete an image at a specific index
const deleteImage = (index) => {
  images.splice(index, 1); // Remove the image at the specified index
  displayImages(); // Update the gallery
};

const deleteAllHandeler = () => {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "<h1>Empty Gallery</h1>";
};

const deleteAll = document.getElementById("delete-all");
deleteAll.addEventListener("click", deleteAllHandeler);
