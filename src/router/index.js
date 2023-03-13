import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NewPenseBete from "../pages/NewPenseBete";
import PenseBete from "../pages/PenseBete";
import NewConsommable from "../pages/NewConsommable";
import Consommables from "../pages/Consommables";
import NewRDV from "../pages/NewRDV";
import Budget from "../pages/Budget";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/penseBetes/new", element: <NewPenseBete/>},
  { path: "/penseBetes", element: <PenseBete/>},
  { path: "/consommables/new", element: <NewConsommable/>},
  { path: "/consommables", element: <Consommables/> },
  { path: "/rdv/new", element: <NewRDV/>},
  { path: "/budget", element: <Budget/>}
]);