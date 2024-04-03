import debounce from '../lib';
import throttle from '../throttle'
import memoize from '../memoize'

describe('Debounce', () => {
  it('should stop the execution of a function if another it\'s called before the first one ended', () => {
    let value:string;
    value=''
    const deb = debounce((param:any)=>{value += param}, 2000)
    deb('a')
    deb('b')

    setTimeout(()=>{expect(value).toBe('b')},3000)
  });

  it('should execute both function calls if there is enough time between them', () => {
    let value:string;
    value=''
    const deb = debounce((param:any)=>{value += param}, 2000)
    deb('a')
    setTimeout(()=>{deb('b')}, 2100)

    setTimeout(()=>{expect(value).toBe('ab')}, 5000)
  });

});

describe('Throttle', () => {
  it('should not execute a function call if it happens within a time interval', () => {
    let value:string
    value =''
    const throttled = throttle((param:string)=> value += param, 2000);
    throttled('a')
    throttled('b')
    setTimeout(()=>expect(value).toBe('a'), 3000);
  });

  it('should execute the function call if the waiting period has expired', () => {
    let value:string
    value =''
    const throttled = throttle((param:string)=> value += param, 2000);
    throttled('a')
    setTimeout(()=> throttled('b'), 2100)
    setTimeout(()=>expect(value).toBe('ab'), 4000);
  });

});
describe('Memoize', () => {
  it('should calculate the result only if it wasn\'t previously calculated', () => {
    const memoized = memoize((p1:number, p2:number)=>{return p1^p2})
    const v = memoized(2,3)
    const v2 = memoized(2,3)
    expect(v2).toBe(v + 't')
  });

});
