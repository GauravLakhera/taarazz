import { annotate } from "https://unpkg.com/rough-notation?module";

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}
function handleScroll() {
  if (isInViewport(Partner)) {
    const annotation = annotate(highlight, {
      type: "underline",
      color: "#3066b1",
    });

    annotation.show();
    window.removeEventListener("scroll", handleScroll);
  } else {
  }
}


// Listen for scroll events
window.addEventListener("scroll", handleScroll);

// Initial check in case section3 is already in viewport on page load
handleScroll();

const buttons = document.querySelectorAll(".expertise_btn");
const heading = document.getElementById("heading_expertise");
const description = document.getElementById("description_expertise");
const img = document.getElementById("expertise_img");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active_expertise"));

    button.classList.add("active_expertise");

    switch (button.id) {
      case "corporate":
        heading.textContent =
          "Elevate Your Business Meetings with Exquisite Cuisine";
        description.textContent =
          "From boardroom lunches to large-scale conferences, our corporate catering services ensure your business events are professionally managed with gourmet meals tailored to your needs.";
        img.src = "./images/dummy.jpg";
        break;
      case "special":
        heading.textContent = "Make Your Special Events Even More Memorable";
        description.textContent =
          "Whether it’s a wedding, anniversary, or any other special occasion, our catering services provide the perfect culinary experience to make your event unforgettable.";
        img.src = "./images/dummy2.jpg";
        break;
      case "birthday":
        heading.textContent = "Celebrate Birthdays with Delectable Dishes";
        description.textContent =
          "Our birthday party catering services offer a wide range of delicious options that will make your celebration truly special.";
        img.src = "./images/dummy3.jpg";
        break;
      case "outdoor":
        heading.textContent = "Outdoor & Picnic Catering Like Never Before";
        description.textContent =
          "Enjoy a perfect picnic or outdoor event with our specially crafted menus that are designed to complement the great outdoors.";
        img.src = "./images/dummy4.jpg";
        break;
    }
  });
});


const slider = document.getElementById('slider');

    // Duplicate the images for smooth infinite scroll
    let clone = slider.innerHTML;
    slider.innerHTML += clone;

    // Adjust scroll duration dynamically based on the number of images
    const imageCount = slider.querySelectorAll('img').length / 2;
    const scrollDuration = imageCount * 5; // Adjust time for smooth scroll

    slider.style.animationDuration = `${scrollDuration}s`;


    const menus = [
      {
        heading: "Silver Menu",
        description: "Curated with passion, crafted with excellence. A menu that elevates your dining experience with Indian flavors.",
        starterItems: ["Paneer Tikka", "Vegetable Samosa", "Chicken Malai Tikka", "Aloo Tikki"],
        saladItems: ["Kachumber Salad", "Green Salad", "Masala Chana Salad", "Cucumber Raita"],
        mainCourseItems: ["Dal Makhani", "Paneer Butter Masala", "Chicken Curry", "Jeera Rice", "Tandoori Roti"],
        dessertItems: ["Gulab Jamun", "Rasgulla", "Ice Cream", "Kheer"],
        beverageItems: ["Masala Chai", "Jal Jeera", "Buttermilk", "Lassi"],
      },
      {
        heading: "Gold Menu",
        description: "Experience fine Indian dining with carefully selected dishes that offer a premium taste.",
        starterItems: ["Tandoori Chicken", "Hara Bhara Kabab", "Mutton Seekh Kebab", "Paneer Pakora"],
        saladItems: ["Beetroot Salad", "Sprout Salad", "Pineapple Raita", "Boondi Raita"],
        mainCourseItems: ["Butter Chicken", "Shahi Paneer", "Rogan Josh", "Veg Biryani", "Garlic Naan"],
        dessertItems: ["Rasmalai", "Phirni", "Gajar Ka Halwa", "Kulfi"],
        beverageItems: ["Fresh Lime Soda", "Aam Panna", "Thandai", "Masala Chai"],
      },
      {
        heading: "Platinum Menu",
        description: "A luxury Indian dining experience, crafted to perfection for those with refined tastes.",
        starterItems: ["Fish Amritsari", "Dahi Ke Kebab", "Mutton Galouti Kebab", "Paneer Shashlik"],
        saladItems: ["Russian Salad", "Fruit Chaat", "Mint Raita", "Mixed Sprouts Salad"],
        mainCourseItems: ["Hyderabadi Biryani", "Laal Maas", "Malai Kofta", "Mutton Dum Biryani", "Roomali Roti"],
        dessertItems: ["Jalebi with Rabri", "Moong Dal Halwa", "Malpua", "Paan Ice Cream"],
        beverageItems: ["Rose Sharbat", "Cold Coffee", "Nimbu Pani", "Kesar Milk"],
      },
    ];
    
    let currentMenuIndex = 0;
    
    function updateMenuContent() {
      const menu = menus[currentMenuIndex];
    
      // Fade out the current content
      document.getElementById("menu-content").classList.add("fade-out");
      document.getElementById("menu-description").classList.add("fade-out");
    
      setTimeout(() => {
        // Update menu description
        document.getElementById("menu-description").textContent = menu.description;
    
        // Update menu items
        updateList("starter-items", menu.starterItems);
        updateList("salad-items", menu.saladItems);
        updateList("main-course-items", menu.mainCourseItems);
        updateList("dessert-items", menu.dessertItems);
        updateList("beverage-items", menu.beverageItems);
    
        // Fade-in the updated content
        document.getElementById("menu-content").classList.remove("fade-out");
        document.getElementById("menu-content").classList.add("fade-in");
        document.getElementById("menu-description").classList.remove("fade-out");
        document.getElementById("menu-description").classList.add("fade-in");
      }, 500); 
    }
    
    function updateHeadings() {
      const headings = ["silver-heading", "gold-heading", "platinum-heading"];
      headings.forEach((id, index) => {
        const heading = document.getElementById(id);
        if (index === currentMenuIndex) {
          heading.classList.add("active-heading");
          heading.classList.remove("inactive-heading");
        } else {
          heading.classList.remove("active-heading");
          heading.classList.add("inactive-heading");
        }
      });
    }
    
    function updateList(listId, items) {
      const ul = document.getElementById(listId);
      ul.innerHTML = ""; // Clear the current items
      items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
    }
    
    document.getElementById("prev-btn").addEventListener("click", () => {
      currentMenuIndex = (currentMenuIndex - 1 + menus.length) % menus.length;
      updateMenuContent(); 
      updateHeadings();
    });
    
    document.getElementById("next-btn").addEventListener("click", () => {
      currentMenuIndex = (currentMenuIndex + 1) % menus.length;
      updateMenuContent();
      updateHeadings();
    });
    
    // Initial render
    updateMenuContent();
    updateHeadings();
    
    // Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const heroText = document.querySelector('.hero_text');

  // Create Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroText.classList.add('animate');
    
         
        } else {
          // Optionally remove the class if you want to re-trigger the animation
          // heroText.classList.remove('animate');
        }
      });
    },
    { threshold: 0.3 } // Triggers when 50% of the section is in view
  );

  // Observe the section containing the text
  observer.observe(document.querySelector('section'));
});

const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const bookNow=document.getElementById("book_now");
const closeButton = document.querySelector(".close-btn");


function openPopup() {
  popup.style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent background scrolling

}

// Function to close the popup
function closePopup() {
  popup.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable background scrolling
 
}

bookNow.addEventListener("click",openPopup);
closeButton.addEventListener("click", closePopup);


const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
