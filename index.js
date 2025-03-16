const ramens = [
  {
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "https://moringa.instructure.com/courses/967/files/517797/preview",
    rating: 5,
    comment: "Delicious!",
  },
  {
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "https://moringa.instructure.com/courses/967/files/517800/preview",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "https://moringa.instructure.com/courses/967/files/517799/preview",
    rating: 9,
    comment: "Rich and creamy broth!",
  },
];

function displayRamens() {
  const menu = document.getElementById("ramen-menu");
  menu.innerHTML = ""; // Clear any existing images

  ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;

    img.addEventListener("click", () => handleClick(ramen));

    menu.appendChild(img);
  });
}

/**
 * Updates the #ramen-detail section to show the clicked ramen's details.
 * @param {Object} ramen - The ramen object with name, restaurant, image, rating, comment
 */
function handleClick(ramen) {
  document.getElementById("detail-image").src = ramen.image;
  document.getElementById("detail-image").alt = ramen.name;
  document.getElementById("detail-name").textContent = ramen.name;
  document.getElementById("detail-restaurant").textContent = ramen.restaurant;
  document.getElementById("detail-rating").textContent = ramen.rating || "N/A";
  document.getElementById("detail-comment").textContent =
    ramen.comment || "No comment";
}

function addSubmitListener() {
  const form = document.getElementById("new-ramen");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page refresh

    const newName = document.getElementById("new-name").value;
    const newRestaurant = document.getElementById("new-restaurant").value;
    const newImage = document.getElementById("new-image").value;
    const newRating = document.getElementById("new-rating").value;
    const newComment = document.getElementById("new-comment").value;

    const newRamen = {
      name: newName,
      restaurant: newRestaurant,
      image: newImage,
      rating: parseInt(newRating, 10),
      comment: newComment,
    };

    ramens.push(newRamen);

    displayRamens();

    form.reset();
  });
}

function main() {
  displayRamens();
  addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);
