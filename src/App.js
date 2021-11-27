import { useState } from "react";
import { UserContext } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      {/* Va a probeer a  mi aplicacion los estados del UserContext */}
      <UserContext.Provider value={{user, setUser}}> {/* value, sera los estados que vamos a compartir en nuestra aplicacion */}
        <AppRoutes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
