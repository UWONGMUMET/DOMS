// Function to copy text from input field
const copyText = (inputId) => {
    const inputElement = document.getElementById(inputId);
  
    if (inputElement) {
      inputElement.select();
      inputElement.setSelectionRange(0, 99999); 
  
      try {
        const successful = document.execCommand('copy');
        
        if (successful) {
          alert("Text copied: " + inputElement.value); 
        } else {
          alert("Unable to copy text");
        }
      } catch (err) {
        console.error("Error copying text: ", err);
      }
    }
  };
  
document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      copyText(targetId); 
    });
});
  