export function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function readCookie(name) {
  let CookiesName = name + "=";
  var cookiesKeys = document.cookie.split(";");
  for (var i = 0; i < cookiesKeys.length; i++) {
    var cookie = cookiesKeys[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(CookiesName) == 0)
      return cookie.substring(CookiesName.length, cookie.length);
  }
  return null;
}

export function deleteCookie(name) {
  let expires = "; expires=" + new Date().toUTCString();
  document.cookie = name + "=; Path=/;" + expires;
}
