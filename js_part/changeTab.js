const changeTab = (val) => {
  let tabs = document.querySelectorAll(".tab_button");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((el) => {
        el.classList.remove("tab_active");
      });
       tab.classList.add("tab_active");
    });
  });
  let sections = document.getElementsByClassName("jobs__section");
  let sections_num = sections.length;
  for (let i = 0; i < sections_num; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(val).style.display = "block";
};
