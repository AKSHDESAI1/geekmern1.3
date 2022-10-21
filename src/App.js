import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginReg from './Components/Pages/Auth/LoginReg'
import Contact from './Components/Pages/Contact'
import Home from './Components/Pages/Home'
import Layout from './Components/Pages/Layout'
import LoadingBar from 'react-top-loading-bar'
import SendPasswordResetEmail from './Components/Pages/Auth/SendPasswordResetEmail'
import ResetPassword from './Components/Pages/Auth/ResetPassword'
import DashBoard from './Components/Pages/DashBoard'

function App() {

    const [progress, setprogress] = useState(0);
    const ColorChange = (color) => {
        setprogress(color)
    }

    useEffect(() => {
        ColorChange(100)
    }, [])


    return (
        <>
            <LoadingBar
                color='red'
                progress={progress}
                height={3}
                onLoaderFinished={() => setprogress(0)}
            />

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='contact' element={<Contact ColorChange={ColorChange} />} />
                        <Route path='login' element={<LoginReg ColorChange={ColorChange} />} />
                        <Route path='sendpasswordresetemail' element={<SendPasswordResetEmail ColorChange={ColorChange} />} />
                        <Route path='reset/:id/:token' element={<ResetPassword ColorChange={ColorChange} />} />
                    </Route>

                    <Route path='/dashboard' element={<DashBoard />} />
                    <Route path='*' element={<h1>404 Page Not Found</h1>} />
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App
