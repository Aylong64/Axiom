const open = document.querySelector("#open_search"),
  close = document.querySelector(".icon2 i"),
  searchbox = document.querySelector(".search-box"),
  eInput = document.querySelector(".eInput input"),
  mails = document.querySelectorAll(".mails .mail"),
  messages = document.querySelectorAll(".mail"),
  slots = document.querySelector(".mail-slot"),
  chat = document.querySelector(".button button");

open.addEventListener("click", (e) => {
  searchbox.classList.add("active"); //adding the class active once search icon is clicked
});
close.addEventListener("click", (e) =>{
  searchbox.classList.remove("active"); //removing the class active once close icon is clicked
  eInput.value = ""; //returning the input value to it's default value once searchBox is closed
});
eInput.addEventListener("keyup", (e) => {
  const q = e.target.value.toLowerCase();
  mails.forEach((names) => { //selecting all mails div inside another div
    names.querySelector(".name").textContent.toLowerCase().startsWith(q) //if textContent contains the shown name in the div filter it and only the typed name will be shown
    ? (names.style.display = "")
    : (names.style.display = "none")
  });
});
window.onload = () =>{
  // once window load
  slots.onclick = (selectedItem) => {
    // when user clicks the slots div
    if(selectedItem.target.classList.contains("slot")) {
      // if user selectedItem which is also slot element has a classList of .slot
      slots.querySelector(".active").classList.remove("active"); //remove the active class of the first item
      selectedItem.target.classList.add("active"); //add active class on user selected item
      let dataName = selectedItem.target.getAttribute("data-name"); //getting image data-name value
      messages.forEach((message) =>{
        let dataImages = message.getAttribute("data-name"); //getting image data-name value
        // if user selected item data-name value is equal to the images data-name value
        //or user selected item data-name value is equal to "all"
        if(dataImages == dataName || dataName == "all") {
          message.classList.remove("hide"); //first remove the hide class from the image
          message.classList.add("show"); //add show class in image
        } else { //else if dataImage match dataName show the selected dataName and hide others
          message.classList.add("hide");
          message.classList.remove("show");
        }
      });
    }
  }
}
chat.addEventListener("click", (e) => {
  window.location.href = "/chat/chat.html";
});