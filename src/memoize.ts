export default function memoize<T>(callback:any){
    let cache:{[key:string]:any}
    cache = {}
    return (...args:T[])=>{
        const key = args.toString()
        if (cache[key] == undefined){
            let result = callback(...args)
            cache[key] = result
            return result
        } else{
            return cache[key] + 't'
        }
    }
}
