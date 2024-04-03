import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ProfileUser from "pages/ProfileUser";
import ProfileAssoc from "pages/ProfileAssoc";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "profileuser",
      element: <ProfileUser />,
    },
    {
      path: "profileassoc",
      element: <ProfileAssoc />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
