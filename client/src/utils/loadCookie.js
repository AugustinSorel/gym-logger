const loadCookie = (name) => {
  const cookie = document.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${name}=`));

  if (cookie) {
    return cookie.split("=")[1];
  }

  return null;
};

export default loadCookie;
