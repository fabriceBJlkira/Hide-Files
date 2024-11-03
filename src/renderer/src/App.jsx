import { RouterProvider } from "react-router-dom"
import Router from "./Routes/Routes"
import { AuthContextProvider } from "./contexts/AuthContext"

function App() {

  return (
    <AuthContextProvider>
      <RouterProvider router={Router} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, accusantium reprehenderit temporibus eum officia ut obcaecati soluta? Impedit doloremque animi dignissimos, optio molestias quis esse non alias, mollitia earum quas.</p>
    </AuthContextProvider>
  )
}

export default App

