import { useState, useEffect } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
interface chartProp {
  value: number,
  intervals?: number,
  color?: string, 
  backgroundColor?: string, 
  speed?: number

}

const Chart = ({speed = 10,  value = 0, intervals = 100, backgroundColor = 'white', color = 'blue' }: chartProp): JSX.Element => {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const increment = speed;
        console.log(oldProgress)
        return oldProgress + increment;
      });
    }, intervals);
    if (progress >= value) {
      clearInterval(timer)
    }

    return () => {
      clearInterval(timer);
    };
  }, [intervals, value, progress, speed]);

  return (
    <LinearProgress
      sx={{
        backgroundColor: backgroundColor,
        '& > span': {
          backgroundColor: color
        }
      }}
      variant="determinate"
      value={progress}
    />


  );
}



export default Chart 