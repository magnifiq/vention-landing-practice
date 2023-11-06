const changeTab = (val, selectedClasses, activeClass) => {
  let tabs = document.querySelectorAll(selectedClasses);
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((el) => {
        el.classList.remove(activeClass);
      });
       tab.classList.add(activeClass);
    });
  });
  let sections = document.getElementsByClassName("jobs__section");
  let sections_num = sections.length;
  for (let i = 0; i < sections_num; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(val).style.display = "block";
};
