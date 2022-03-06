const configuration = {
  ApiUrl: "http://localhost:5000",
  ApiRequestToken: "",
};

export const setApiRequestToken = (token) => {
  Object.assign(configuration, { ApiRequestToken: token });
};

export default configuration;
