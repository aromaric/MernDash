import React from "react";


import { Refine, AuthProvider } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";


import{
  AccountCircleOutlined,
  AdminPanelSettingsOutlined,
  ChatBubbleOutline,
 
  GppMaybeOutlined,
  //Home,
  PeopleAltOutlined,
  QueryStatsOutlined,
  

} from '@mui/icons-material';

import dataProvider from "@pankod/refine-simple-rest";
import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import routerProvider from "@pankod/refine-react-router-v6";
import axios, { AxiosRequestConfig } from "axios";
import { ColorModeContextProvider } from "contexts";
import { Title, Sider, Layout, Header } from "components/layout";


import { 
  Login, //connexion
  Acceuil, //Acceuil
  Agents,  // liste agents
  MonProfil, // mon profil
  IncidentDetails, // details dun incident
  RegionsIncidents, //incidents par region
  RegionDetails, // tous les incidents dune region
  AllIncidents, // tous les incidents
  CreateIncident, // create incident
  AgentProfil, //profil agent
  EditIncident, // edit, modify incident
  Admin,  // admin page

} from "./pages";





import { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";



const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});




function App() {
  const authProvider: AuthProvider = {
      login: async ({ credential }: CredentialResponse) => {
          const profileObj = credential ? parseJwt(credential) : null;

          if (profileObj) {
              const response = await fetch(
                  "http://localhost:8080/api/v1/users",
                  {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                          name: profileObj.name,
                         // rang: profileObj.rang,
                         // unite: profileObj.unite,
                          email: profileObj.email,
                          avatar: profileObj.picture,
                      }),
                  },
              );

              const data = await response.json();

              if (response.status === 200) {
                  localStorage.setItem(
                      "user",
                      JSON.stringify({
                          ...profileObj,
                          avatar: profileObj.picture,
                          //rang: profileObj.rang,
                          //unite: profileObj.unite,
                          userid: data._id,
                      }),
                  );
              } else {
                  return Promise.reject();
              }
          }
          localStorage.setItem("token", `${credential}`);

          return Promise.resolve();
      },
      logout: () => {
          const token = localStorage.getItem("token");

          if (token && typeof window !== "undefined") {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              axios.defaults.headers.common = {};
              window.google?.accounts.id.revoke(token, () => {
                  return Promise.resolve();
              });
          }

          return Promise.resolve();
      },
      checkError: () => Promise.resolve(),
      checkAuth: async () => {
          const token = localStorage.getItem("token");

          if (token) {
              return Promise.resolve();
          }
          return Promise.reject();
      },

      getPermissions: () => Promise.resolve(),
      getUserIdentity: async () => {
          const user = localStorage.getItem("user");
          if (user) {
              return Promise.resolve(JSON.parse(user));
          }
      },
  };





  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("http://localhost:8080/api/v1")}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "incidents",
              list: AllIncidents,
              edit: EditIncident,
              show: IncidentDetails,
              create: CreateIncident,
            /*
            canDelete: true, */
            icon:<GppMaybeOutlined/>,

            },
            {
              name: "agents",
              list: Agents,
              show: AgentProfil,
              icon:<PeopleAltOutlined/>,
            },
            {
              name: "analyse",
              list: Acceuil,
              icon:<QueryStatsOutlined/>,
            },
            {
              name: "messages",
              list: Acceuil,
              icon:<ChatBubbleOutline/>,
            },
            {
              name: "mon-profil",
              options:{label:'Mon Profil'},
              list: MonProfil,
              icon:<AccountCircleOutlined/>,
            },
            {
              name: "admin",
              options:{label:'Admin'},
              list: MuiInferencer,
              icon:<AdminPanelSettingsOutlined/>,
            },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          routerProvider={routerProvider}
          authProvider={authProvider}
          LoginPage={Login}
          DashboardPage={Acceuil}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
