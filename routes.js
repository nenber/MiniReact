let contentDiv = document.getElementById('content');

routes = {
    '/': Home,
    '/Todolist': Todolist,
    '/giphy': giphy,
  };

  window.onpopstate = () => {
    contentDiv.innerHTML = routes[window.location.pathname];
  }
  
  let onNavItemClick = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    contentDiv.innerHTML = routes[pathName];
  }

  contentDiv.innerHTML = routes[window.location.pathname];