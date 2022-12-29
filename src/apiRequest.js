

async function apiRequest(url,optionsObject=null,errMessage=null){
    try{
        let response=await fetch(url,optionsObject)
        console.log(response)
        if(!response.ok) throw Error("please reload app")
    }catch(err){
        errMessage=err.message

    }finally{
        return errMessage

    }

}


export default apiRequest