import  { useEffect, useState } from 'react'

const Progress = (props) => {
  //const [filled , setFilled] = useState(0);
  // useEffect(()=>{
  //   setFilled(props.filled)
  // },[])
  const filledStyle = {
    height: '100%',
    width:`${props.filled}%`,
    transition:'width .4s',
  }
  return (
    <>
      <div className="progress-bar">
        <div className="progress-fill" style={filledStyle}>
            {props.filled}%
        </div>
      </div>
    </>
  )
}

export default Progress
