type Cookie = {
  name: string;
  value: string;
}

class CookieUtility {
  public setCookie({ name, value }: Cookie) {
      if (typeof document !== 'undefined') {
          document.cookie = `${name}=${value}`;
      }
  }

  public findCookieByName(name: string): Cookie | undefined {
      if (typeof document !== 'undefined') {
          const cookies = document.cookie.split(';')
              .map(cookie => cookie.trim())
              .map(cookie => {
                  const [name, value] = cookie.split('=');
                  return { name, value };
              });

          return cookies.find(cookie => cookie.name === name);
      }

      return undefined;
  }

  public getAllCookies(): Cookie[] {
      if (typeof document !== 'undefined') {
          return document.cookie.split(';')
              .map(cookie => cookie.trim())
              .map(cookie => {
                  const [name, value] = cookie.split('=');
                  return { name, value };
              });
      }

      return [];
  }
}

export const cookieUtility = new CookieUtility();
