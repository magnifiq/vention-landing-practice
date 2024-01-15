const chooseRole = () => {
  let currRole = document.getElementsByClassName("tab_active__second")[0];
  let currRoleInnerHTML = currRole.textContent.trim();

  console.log(currRoleInnerHTML);

  switch (currRoleInnerHTML) {
    case "Candidate":
      return 1;
    case "Employers":
      return 2;
    case "Headhunters":
      return 3;
  }
};
