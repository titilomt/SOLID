type UserTypes = {
  id: number;
  name: string;
  permissions: string[];
};

const pages = [
  {
    name: "Home",
    permissions: ["read"],
  },
  {
    name: "Profile",
    permissions: ["read"],
  },
  {
    name: "Admin",
    permissions: ["admin"],
  },
  {
    name: "Settings",
    permissions: ["read", "write"],
  },
];

// Estrutura complicada atual para determinar a navegação
function navigate(user: UserTypes, pageRequested: number) {
  let pageIdx = -1;
  for (let idx = 0; idx < pages.length; idx++) {
    if (idx === pageRequested) {
      pageIdx = idx;
      break;
    }
  }
  if (pageIdx === -1) {
    return "Page not found";
  }
  let permission = pages[pageIdx].permissions[0];
  let counter = 0;
  do {
    if (!user.permissions.includes(permission)) {
      return "Permission denied";
    }
    counter++;
  } while ((permission = pages[pageIdx].permissions[counter]));
  return `Navigating to ${pages[pageIdx].name}`;
}
