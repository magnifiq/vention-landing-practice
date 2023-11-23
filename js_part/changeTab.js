const changeTab = (val, selectedClasses, activeClass, classesToHide) => {
  let tabs = document.querySelectorAll(selectedClasses);
  let currRole;
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((el) => {
        el.classList.remove(activeClass);
      });
      tab.classList.add(activeClass);
      currRole = tab.innerHTML.trim();
      console.log(currRole);
    });
  });
  if (classesToHide !== "homes") {
    let sections = document.getElementsByClassName(classesToHide);
    let sections_num = sections.length;
    for (let i = 0; i < sections_num; i++) {
      sections[i].style.display = "none";
    }
    document.getElementById(val).style.display = "block";
  } else {
    return currRole;
  }
};
