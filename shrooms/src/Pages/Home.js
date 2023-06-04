import React from 'react'
import 'react-bootstrap'
import ShroomDance from '../Images/shroom_dance.gif';
import '../Styles/home.css';

const Home = () => {


return (
    <>
    <div className='home-container'>
        <img src={ShroomDance} className='home-gif'/>
        <br/>
        <p>
        A guide to edible fungi for Victoria, Australia.
        </p>
        <p>
        Forage and consume wild fungi at your own risk.
        </p>
    </div>
    </>
)

}

export default Home; 