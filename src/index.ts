import debounce from './lib'


const deb = debounce(()=>{console.log('ejecutando f')},2000)
deb()
deb()

const deb2 = debounce(()=>{console.log('ejecutando g')},2000)
deb2()
setTimeout(deb2, 3000)



