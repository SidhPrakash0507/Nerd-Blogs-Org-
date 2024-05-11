let slideIndex = 11;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change slide every 5 seconds = 5000 milliseconds
}
showSlides();

const typedTextElement = document.querySelector('.typed-text');
const textOptions = ['Computer Programming','Tech News', 'Artificial Intelligence','Data Science', 'Machine Learning', 'Robotics','Web Development', 'Computer Hardware',"Mobile Technology", 'Information Technology','CyberSecurity and Ethics','and More'];
let currentTextIndex = 0;
      
function typeWriter() {
  const currentText = textOptions[currentTextIndex];
  const textLength = currentText.length;
  let typedText = '';

  for (let i = 0; i < textLength; i++) {
    setTimeout(() => {
      typedText += currentText[i];
      typedTextElement.textContent = typedText;
    }, i * 100); // Increased duration to 200 milliseconds per character
  }

  setTimeout(() => {
    currentTextIndex = (currentTextIndex + 1) % textOptions.length;
    typeWriter();
  }, textLength * 100 + 500); // Increased duration to 200 milliseconds per character
}

typeWriter();
