cart = [{}];

var MenuItems = document.getElementById("menu-items");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

document.querySelectorAll(".js-btn-cart").forEach((button) => {
  button.addEventListener("click", () => {
    let cartQuantity = 0;
    cartQuantity += 1;

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
    console.log(cartQuantity);
  });
});
