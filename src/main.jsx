
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookList from './Componets/BookList.jsx'
import About from './Componets/About.jsx'
import BookDetails from './Componets/BookDetails.jsx'
import Error from './Componets/Error.jsx'
import AddBook from './Componets/AddBook.jsx'
import Contact from './Componets/Contact.jsx'
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
        {
          path: "/books/:category?",
          element: <BookList />
        },{
          path:"/add",
          element:<AddBook/>
        }
      ],
    }
  ])

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <RouterProvider router={appRouter} />
  //</StrictMode>,
)
