class FuseUtils {
    static setRoutes(config, defaultAuth) {
      let routes = [...config.routes];
  
      routes = routes.map((route) => {
        let auth =
          config.auth || config.auth === null ? config.auth : defaultAuth || null;
        auth = route.auth || route.auth === null ? route.auth : auth;
  
        return {
          ...route,
          auth,
        };
      });
  
      return [...routes];
    }
  
    static generateRoutesFromConfigs(configs, defaultAuth) {
      let allRoutes = [];
      configs.forEach((configs) => {
        allRoutes = [...allRoutes, ...this.setRoutes(configs, defaultAuth)];
      });
  
      return allRoutes;
    }
  }
  
export default FuseUtils;
  