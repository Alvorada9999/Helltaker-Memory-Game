import {useState, useEffect} from 'react';

import './styles/app.css';

import lucifer from './assets/lucifer.webp';
import azazel from './assets/azazel.webp';
import beelzebub from './assets/beelzebub.webp';
import justice from './assets/justice.webp';
import judgement from './assets/judgement.webp';
import malina from './assets/malina.webp';
import modeus from './assets/modeus.webp';
import zdrada from './assets/zdrada.webp';
import cerberus from './assets/cerberus.webp';
import pandemonica from './assets/pandemonica.webp';
import helltaker from './assets/theHelltaker.webp';

function App() {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const [wasDiv1Clicked, setDiv1] = useState(false);
  let div1Order = getRandomInt(100);

  const [wasDiv2Clicked, setDiv2] = useState(false);
  let div2Order = getRandomInt(100);

  const [wasDiv3Clicked, setDiv3] = useState(false);
  let div3Order = getRandomInt(100);
  
  const [wasDiv4Clicked, setDiv4] = useState(false);
  let div4Order = getRandomInt(100);

  const [wasDiv5Clicked, setDiv5] = useState(false);
  let div5Order = getRandomInt(100);

  const [wasDiv6Clicked, setDiv6] = useState(false);
  let div6Order = getRandomInt(100);

  const [wasDiv7Clicked, setDiv7] = useState(false);
  let div7Order = getRandomInt(100);

  const [wasDiv8Clicked, setDiv8] = useState(false);
  let div8Order = getRandomInt(100);

  const [wasDiv9Clicked, setDiv9] = useState(false);
  let div9Order = getRandomInt(100);

  const [wasDiv10Clicked, setDiv10] = useState(false);
  let div10Order = getRandomInt(100);

  const [wasDiv11Clicked, setDiv11] = useState(false);
  let div11Order = getRandomInt(100);

  const [currentScore, setCurrentScore] = useState(0);

  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    div1Order = getRandomInt(100);
    div2Order = getRandomInt(100);
    div3Order = getRandomInt(100);
    div4Order = getRandomInt(100);
    div5Order = getRandomInt(100);
    div6Order = getRandomInt(100);
    div7Order = getRandomInt(100);
    div8Order = getRandomInt(100);
    div9Order = getRandomInt(100);
    div10Order = getRandomInt(100);
    div11Order = getRandomInt(100);
  }, [
    wasDiv1Clicked, wasDiv2Clicked,
    wasDiv3Clicked, wasDiv4Clicked,
    wasDiv5Clicked, wasDiv6Clicked,
    wasDiv7Clicked, wasDiv8Clicked, 
    wasDiv9Clicked, wasDiv10Clicked,
    wasDiv11Clicked
  ])

  function resetValues(){
    setDiv1(false);
    setDiv2(false);
    setDiv3(false);
    setDiv4(false);
    setDiv5(false);
    setDiv6(false);
    setDiv7(false);
    setDiv8(false);
    setDiv9(false);
    setDiv10(false);
    setDiv11(false);
    setCurrentScore(0);
  }

  function checkDiv1(){
    if(wasDiv1Clicked){
      resetValues();
    } else {
      setDiv1(true);
      setCurrentScore(currentScore+1);
      if(currentScore > highestScore){
        setHighestScore(currentScore);
      }
    }
  }

  function checkDiv2(){
    if(wasDiv2Clicked){
      resetValues();
    } else {
      setDiv2(true);
      setCurrentScore(currentScore+1);
      if(currentScore > highestScore){
        setHighestScore(currentScore);
      }
    }
  }

  function checkDiv3(){
    if(wasDiv3Clicked){
      resetValues();
    } else {
      setDiv3(true);
      setCurrentScore(currentScore+1);
      if(currentScore > highestScore){
        setHighestScore(currentScore);
      }
    }
  }

  function checkDiv4(){
    if(wasDiv4Clicked){
      resetValues();
    } else {
      setDiv4(true);
      setCurrentScore(currentScore+1);
      if(currentScore > highestScore){
        setHighestScore(currentScore);
      }
    }
  }

  function checkDiv5(){
    if(wasDiv5Clicked){
      resetValues();
    } else {
      setDiv5(true);
      setCurrentScore(currentScore+1);
      if(currentScore > highestScore){
        setHighestScore(currentScore);
      }
    }
  }

  function checkDiv6(){
    if(wasDiv6Clicked){
      resetValues();
    } else {
      setDiv6(true);
      setCurrentScore(currentScore+1);
      if(currentScore > highestScore){
        setHighestScore(currentScore);
      }
    }
  }

  function checkDiv7(){
    if(wasDiv7Clicked){
      resetValues();
    } else {
      setDiv7(true);
      setCurrentScore(currentScore+1);
      if(currentScore > highestScore){
        setHighestScore(currentScore);
      }
    }
  }

  function checkDiv8(){
    if(wasDiv8Clicked){
      resetValues();
    } else {
      setDiv8(true);
      setCurrentScore(currentScore+1);
      if(currentScore > highestScore){
        setHighestScore(currentScore);
      }
    }
  }
  
  function checkDiv9(){
    if(wasDiv9Clicked){
      resetValues();
    } else {
      setDiv9(true);
      setCurrentScore(currentScore+1);
      if(currentScore > highestScore){
        setHighestScore(currentScore);
      }
    }
  }

  function checkDiv10(){
    if(wasDiv10Clicked){
      resetValues();
    } else {
      setDiv10(true);
      setCurrentScore(currentScore+1);
      if(currentScore > highestScore){
        setHighestScore(currentScore);
      }
    }
  }

  function checkDiv11(){
    if(wasDiv11Clicked){
      resetValues();
    } else {
      setDiv11(true);
      setCurrentScore(currentScore+1);
      if(currentScore > highestScore){
        setHighestScore(currentScore);
      }
    }
  }

  return(
    <div>
        <div className='cardsContainer'>
            <div className='cardDiv' id='card1' style={{
                order: div1Order
            }} onClick={checkDiv1}>
                <img src={lucifer} alt='Lucifer'/>
            </div>
            <div className='cardDiv' id='card2' style={{
                order: div2Order
            }} onClick={checkDiv2}>
                <img src={azazel} alt='Azazel'/>
            </div>
            <div className='cardDiv' id='card3' style={{
                order: div3Order
            }} onClick={checkDiv3}>
                <img src={beelzebub} alt='Beelzebub'/>
            </div>
            <div className='cardDiv' id='card4' style={{
                order: div4Order
            }} onClick={checkDiv4}>
                <img src={justice} alt='Justice'/>
            </div>
            <div className='cardDiv' id='card5' style={{
                order: div5Order
            }} onClick={checkDiv5}>
                <img src={judgement} alt='Judgement'/>
            </div>
            <div className='cardDiv' id='card6' style={{
                order: div6Order
            }} onClick={checkDiv6}>
                <img src={malina} alt='Malina'/>
            </div>
            <div className='cardDiv' id='card7' style={{
                order: div7Order
            }} onClick={checkDiv7}>
                <img src={modeus} alt='Modeus'/>
            </div>
            <div className='cardDiv' id='card8' style={{
                order: div8Order
            }} onClick={checkDiv8}>
                <img src={zdrada} alt='Zdrada'/>
            </div>
            <div className='cardDiv' id='card9' style={{
                order: div9Order
            }} onClick={checkDiv9}>
                <img src={cerberus} alt='Cerberus'/>
            </div>
            <div className='cardDiv' id='card10' style={{
                order: div10Order
            }} onClick={checkDiv10}>
                <img src={pandemonica} alt='Pandemonica'/>
            </div>
            <div className='cardDiv' id='card11' style={{
                order: div11Order
            }} onClick={checkDiv11}>
                <img src={helltaker} alt='Helltaker'/>
            </div>
        </div>
        <div className='currentScore'>
            {currentScore}
        </div>
        <div className='highestScore'>
            {highestScore}
        </div>
    </div>
  );
}

export default App;