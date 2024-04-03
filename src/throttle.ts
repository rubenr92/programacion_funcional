export default function throttle(mainFunction:any, delay:number) {
  let timerFlag:any;
  timerFlag = null 

  return (...args:any[]) => {
    if (timerFlag === null) { 
      mainFunction(...args); 
      timerFlag = setTimeout(() => { 
        timerFlag = null; 
      }, delay);
    }

  };
}


