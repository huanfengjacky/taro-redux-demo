import {SAVEUSERINFO,ADD,CHANGENAME,SAVEPRODUCTLIST} from '../constant'
export const saveUserInfo=(info)=>{
    return {
        type:SAVEUSERINFO,
        data:info
    }
}

export const addNum=(id)=>{
    return {
        type:ADD,
        data:id
    }
}
export const changeName=(name)=>{
    return {
        type:CHANGENAME,
        data:name
    }
}

export const saveProductList=(list)=>{
    return {
        type:SAVEPRODUCTLIST,
        data:list
    }
}