type Routes = {
    home: string;
    about: string;
    projects: string;
    projectsDetails?: string;
  };
  
  type EnvironmentConfig = {
    routes: Routes;
  };
  
  const routes: Routes = {
    home: "/",
    about: "/about",
    projects: "/projects",
    // projectsDetails: "/projects/details",
  };
  
  const environment: Record<string, EnvironmentConfig> = {
    development: { routes },
    production: { routes },
  };
  
  const currentEnv = "development";
  
  export default environment[currentEnv] || environment.development;
  