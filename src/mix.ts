export const mix=(array:any[])=>{
    //this should be optimized
    return ([...array].sort(()=>Math.random()-0.5));
}
