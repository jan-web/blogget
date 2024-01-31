export const setToken = token => {
  localStorage.setItem('bearer', token);
};
export const getToken = () => {
  if (location.pathname.includes('/auth')) {
    const token = new URLSearchParams(location.hash.substring(1)).get(
      'access_token',
    );
    setToken(token);
  }

  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
  }

  return localStorage.getItem('bearer');
};
