function changeTab(event, val, selectedClasses, activeClass, classesToHide) {
  let tabs = document.querySelectorAll(selectedClasses);

  tabs.forEach((el) => {
    el.classList.remove(activeClass);
  });
  let clickedButton = event.currentTarget;
  

  if (classesToHide !== "homes") {
    let sections = document.getElementsByClassName(classesToHide);
    let sections_num = sections.length;
    for (let i = 0; i < sections_num; i++) {
      sections[i].style.display = "none";
    }
    document.getElementById(val).style.display = "block";
  }
}
