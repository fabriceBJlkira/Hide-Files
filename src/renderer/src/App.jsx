import { RouterProvider } from "react-router-dom"
import Router from "./Routes/Routes"
import { AuthContextProvider } from "./contexts/AuthContext"

function App() {

  return (
    <AuthContextProvider>
      <RouterProvider router={Router} />
    </AuthContextProvider>
  )
}

export default App

