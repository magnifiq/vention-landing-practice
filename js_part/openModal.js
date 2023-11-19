const openModal = (modalName, btnName,closeBtnName) => {
  const modal = document.getElementsByClassName(modalName)[0];
  const btn = document.getElementsByClassName(btnName)[0];
  const closeBtn = document.getElementsByClassName(closeBtnName)[0];
  const overlay = document.getElementsByClassName("overlay__for__modal")[0];
  btn.onclick = () => {
    modal.style.display = "block";
    overlay.style.display = "block";
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  };
};
