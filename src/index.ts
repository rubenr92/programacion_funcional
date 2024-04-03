import debounce from './lib'
import throttle from './throttle'
import memoize from './memoize'

const deb = debounce((p:string)=>{console.log(p)},2000)
deb('d 1')
deb('d 2')
setTimeout(()=>deb('d 3'), 3000)

const throttled = throttle((p:string)=>console.log(p), 2000)

throttled('t 1')
throttled('t 2')
setTimeout(()=>throttled('t 3'), 2000)

const memoized = memoize((p1:number, p2:number)=>{return p1+p2})

console.log(memoized(2,3))
console.log(memoized(4,5))
console.log(memoized(2,3))


