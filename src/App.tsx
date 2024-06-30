import './App.css';
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { AppContext, AppDispatchContext } from "./AppContext";
import reducer, { initialState } from './reducers/reducer';
import { useContext, useEffect, useReducer } from 'react';
import { setAllPages } from './actions/pages';
import { setLoadingState } from './actions/appState';

function App() {
  // const state = useContext(AppContext);
  // const [state, dispatch] = useReducer(reducer({} as Content);
  // const [state, dispatch] = useReducer(reducer, { pages: [], isLoading: true });
  const [ state, dispatch ] = useReducer(reducer, initialState as Content);
  const { isLoading } = useContext(AppContext);
  
  useEffect(() => {
    setAllPages(dispatch)
      .then(() => setLoadingState(dispatch, false));
  }, []);

  return (
    <AppContext.Provider value={state}>
        <AppDispatchContext.Provider value={dispatch}>
          {isLoading && (
            <>
              <Navigation />
              <Outlet />
            </>
          )}
        </AppDispatchContext.Provider>
    </AppContext.Provider>
    
    
  )
}

export default App
