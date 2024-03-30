import { UserProvider } from "./contexts/AuthContext.jsx";
import routes from "./router.jsx";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={routes} />
    </UserProvider>
  );
}

export default App;
