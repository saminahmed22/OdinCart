import App from "./App";
import ErrorPage from "./ErrorPage";
import HomePage from "./Components/HomePage/HomePage";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Cart/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
