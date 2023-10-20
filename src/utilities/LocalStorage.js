

export const getFromLocalStorage = ()=>{
   const cartData = localStorage.getItem("cartData");
   if(cartData){
    return JSON.parse(cartData);
   }
   return [];
}

export const setDataLocalStorage = (data) => {
   const localStorageData =  getFromLocalStorage()
    const storageData = JSON.stringify([...localStorageData, data])
    localStorage.setItem('cartData', storageData)
}
