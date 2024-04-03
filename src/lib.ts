
  export default function debounce(callback:any, interval:number){
    let timerId:NodeJS.Timeout;
    return (...args:any[]) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
        callback(...args);
        }, interval);
    };
}




