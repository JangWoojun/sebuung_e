import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '/public/animation.json'

export default function Animation() {
  const [animationStopped, setAnimationStopped] = useState(false);

  const handleLoopComplete = () => {
    setAnimationStopped(true);
  };

  return (
    <Lottie
      play={!animationStopped}
      loop={false}
      animationData={lottieJson}
      style={{width: 1200, height: 500}}
      onLoopComplete={handleLoopComplete}
    />
  )
}
