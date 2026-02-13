export interface CookieOptions {
  expires?: Date;
}

/**
 * 쿠키 설정
 * @param name 쿠키 이름
 * @param value 쿠키 값
 * @param options 쿠키 옵션
 */
export const setCookie = (
  name: string,
  value: string,
  options: CookieOptions = {}
): void => {
  const { expires } = options;

  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  // 만료 시간 설정
  if (expires instanceof Date) {
    cookieString += `; expires=${expires.toUTCString()}`;
  }

  // 기본 보안 옵션 적용
  cookieString += '; path=/';
  cookieString += '; SameSite=Lax';

  // HTTPS 환경에서만 secure 적용
  if (window.location.protocol === 'https:') {
    cookieString += '; secure';
  }

  document.cookie = cookieString;
};

/**
 * 쿠키 가져오기
 * @param name 쿠키 이름
 * @returns 쿠키 값 또는 null
 */
export const getCookie = (name: string): string | null => {
  const nameEQ = `${encodeURIComponent(name)}=`;
  const cookies = document.cookie.split(';');

  for (let cookie of cookies) {
    cookie = cookie.trim();

    if (cookie.startsWith(nameEQ)) {
      const value = cookie.substring(nameEQ.length);
      return decodeURIComponent(value);
    }
  }

  return null;
};

/**
 * 쿠키 삭제
 * @param name 쿠키 이름
 */
export const removeCookie = (name: string): void => {
  setCookie(name, '', {
    expires: new Date(0),
  });
};

/**
 * 모든 쿠키 가져오기
 * @returns 쿠키 객체 { name: value }
 */
export const getAllCookies = (): Record<string, string> => {
  const cookies: Record<string, string> = {};
  const cookieArray = document.cookie.split(';');

  for (let cookie of cookieArray) {
    cookie = cookie.trim();
    const [name, value] = cookie.split('=');

    if (name && value) {
      cookies[decodeURIComponent(name)] = decodeURIComponent(value);
    }
  }

  return cookies;
};
