let rootDiv = document.getElementById('root');

routes = {
    '/Home': Home,
    '/Todolist': Todolist,
    '/giphy': giphy,
  };

  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
  }
  
  let onNavItemClick = (pathName) => {
    window.history.replaceState({}, pathName, window.location.origin + pathName);
    rootDiv.innerHTML = routes[pathName];
  }

  rootDiv.innerHTML = routes[window.location.pathname];