export const getDatafromLs =()=>{
    let Data =  localStorage.getItem('transactions')
    return Data ?  JSON.parse(Data) : []
 }
 