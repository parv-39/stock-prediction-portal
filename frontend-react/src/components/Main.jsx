import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'
import { Link } from 'react-router-dom';


const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>The Stock Prediction Portal leverages advanced analytics and machine learning models to evaluate market behavior and forecast stock performance, offering users reliable insights and trend analysis. The platform integrates historical data, technical indicators, and real-time trends to support smarter, data-driven financial decisions.</p>
                <Button text="Explore Now" className="btn-info" url="/dashboard" />
            </div>
        </div>
    </>
  )
}

export default Main
