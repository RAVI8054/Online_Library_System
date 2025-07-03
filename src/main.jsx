
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookList from './Componets/BookList.jsx'
import About from './Componets/About.jsx'
import Contact from './Componets/Contact.jsx'
import BookDetails from './Componets/BookDetails.jsx'
//import AddBook from './Componets/AddBook.jsx'
import Error from './Componets/Error.jsx'

const appRouter = createBrowserRouter
  ([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <BookList />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/book/:id",
          element: <BookDetails />
        },
      ],
    }
  ])

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <RouterProvider router={appRouter} />
  //</StrictMode>,
)
