import React, {useState, useRef, useEffect} from 'react'
import Vimeo from '@u-wave/react-vimeo';
import './Countdown.scss'
import ArgentinaFlag from '../../assets/img/argentina.png'

const Countdown = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const [distance, setDistance] = useState();

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('Oct 24 2022 09:45:00 GMT-3').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      setDistance(distance)

      const days = Math.floor(distance/ (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / (1000));

      if (distance < 0){
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    })
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  })


  return (
    <>
    {distance <= 0 ? 
    <Vimeo
    video="https://vimeo.com/event/2544143"
    width={350}
    showTitle={false}
    speed={false}
    pip={false}
    showAuthor={false}
  />
: 
<>
<div className='countdown'>
      <div>
        <span>{timerDays}</span>
        <span className='label'>días</span>
      </div>
      <div>
        <span>{timerHours}</span>
        <span className='label'>hs</span>
      </div>
      <div>
        <span>{timerMinutes}</span>
        <span className='label'>mins</span>
      </div>
      <div>
        <span>{timerSeconds}</span>
        <span className='label'>segs</span>
      </div> 
    </div>
    <span className='sublabel'>Hora <img className='flag' src={ArgentinaFlag}/></span>
</>
}
    
    </>
  )
}

export default Countdown