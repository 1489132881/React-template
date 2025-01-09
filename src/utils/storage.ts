export function setStorage(key: string, value: ISafeAny) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || '{}');
}

export function setSessionStorage(key: string, value: ISafeAny) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStorage(key: string) {
  return JSON.parse(sessionStorage.getItem(key) || '{}');
}

// 使用存储统一管理
const $storage = {
  get token() {
    return getStorage('token') || '';
  },
  set token(value: string) {
    setStorage('token', value);
  },
  clear() {
    const token = this.token;
    localStorage.clear();
    this.token = token;
  }
};

export default $storage;
