import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes, Navigate} from "react-router-dom";
import { Profile } from './components/Profile/Profile';
import { Autification } from './components/Autification/Autification';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hook';
import { writeToken, setUsername } from './store/Auth/AuthSlice';

function App() {
  const { token } = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    let accessToken = localStorage.getItem('accessToken');
    let username = localStorage.getItem('username');
    if(accessToken && username) {
      dispatch(writeToken(accessToken));
      dispatch(setUsername(username));
    }
  }, [])

  return (
    <div className="App wrapper">
      <Header />
      <main className='main'>
        <Routes>
          {token 
            ? (
              <>
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/profile" />} />
              </>
            )
            : (
              <>
                <Route path="/login" element={ <Autification /> } />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            )
          }
        </Routes>
      </main>
    </div>
  );
}

export default App;
