const changeTab = (val, selectedClasses, activeClass, classesToHide) => {
  let tabs = document.querySelectorAll(selectedClasses);
  let currRole;

  const clickHandler = (tab) => {
    tabs.forEach((el) => {
      el.classList.remove(activeClass);
    });
    tab.classList.add(activeClass);
    currRole = tab.innerHTML.trim();
    console.log(currRole);
  };

  tabs.forEach((tab) => {
    tab.removeEventListener("click", () => clickHandler(tab));
    tab.addEventListener("click", () => clickHandler(tab));
  });
  if (classesToHide !== "homes") {
    let sections = document.getElementsByClassName(classesToHide);
    let sections_num = sections.length;
    for (let i = 0; i < sections_num; i++) {
      sections[i].style.display = "none";
    }
    document.getElementById(val).style.display = "block";
  } else {
    console.log(currRole);
  }
  return tabs
};
