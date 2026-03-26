import "./App.css";
import Header from "./components/Header";
import News from "./components/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

const App = () => {
   const [progress , setProgress] = useState(0);
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <>
           <LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
        
      />
            <Header title="NewsWala" />
            <News setProgress={setProgress} category="general" country="us" key={"Empty"} /> 
            
          </>
        ),
      },
      {
        path: "/home",
        element: (
          <>
               <LoadingBar
        color="#f11946"
        progress={progress}
                height={3}

        
      />
            <Header title="NewsWala" />
            <News setProgress={setProgress}category="general"  country="us" key={"home"} />
          </>
        ),
      },
      {
        path: "/general",
        element: (
          <>
               <LoadingBar
        color="#f11946"
        progress={progress}
                height={3}

        
      />
            <Header title="NewsWala" />
            <News setProgress={setProgress}
              key={"general"}
              category="general"
              pageSize={18}
              country="us"
            />
          </>
        ),
      },
      {
        path: "/sports",
        element: (
          <>
               <LoadingBar
        color="#f11946"
        progress={progress}
                height={3}

        
      />
            <Header title="NewsWala" />
            <News setProgress={setProgress}key="sports" category={"sports"}  country="us" />
          </>
        ),
      },

      {
        path: "/health",
        element: (
          <>
               <LoadingBar
        color="#f11946"
        progress={progress}
                height={3}

        
      />
            <Header title="NewsWala" />
            <News setProgress={setProgress}key={"health"} category="health"  country="us" />
          </>
        ),
      },
      {
        path: "/science",
        element: (
          <>
               <LoadingBar
        color="#f11946"
        progress={progress}
                height={3}

        
      />
            <Header title="NewsWala" />
            <News setProgress={setProgress}
              key={"science"}
              category="science"
              pageSize={18}
              country="us"
            />
          </>
        ),
      },
      {
        path: "/technology",
        element: (
          <>
               <LoadingBar
        color="#f11946"
        progress={progress}
                height={3}

        
      />
            <Header title="NewsWala" />
            <News setProgress={setProgress}
              key={"technology"}
              category="technology"
              
              country="us"
            />
          </>
        ),
      },
      {
        path: "/entertainment",
        element: (
          <>
               <LoadingBar
        color="#f11946"
        progress={progress}
                height={3}

        
      />
            <Header title="NewsWala" />
            <News setProgress={setProgress}
              key={"entertainment"}
              category="entertainment"
              country="us"
            />
          </>
        ),
      },
      {
        path: "/business",
        element: (
          <>
               <LoadingBar
        color="#f11946"
        progress={progress}
                height={3}

        
      />
            <Header title="NewsWala" />
            <News setProgress={setProgress}
              key={"business"}
              category="business"
              country="us"
            />
          </>
        ),
      },
    ]);
    return (

      <>
        <RouterProvider router={router} />
      </>
    );
  }
export default App;