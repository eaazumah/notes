// const middleware = (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfig);

const getMiddleware = (config: any) => {
  return (getDefaultMiddleware: any) => {
    return getDefaultMiddleware(config);
  };
};

export default getMiddleware;
