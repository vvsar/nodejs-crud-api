const consts = {
  DEFAULT_API_PORT: 3000,
  API_URL: /^\/api\/users\/?$/,
  API_URL_WITH_ID: /^\/api\/users\/[^\/]+\/?$/,
  API_URL_TO_SPLIT: /\/api\/users\/([\w-]+)/,
};

export default consts;
