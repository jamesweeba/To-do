
import { useState } from "react";
import { FaPlus } from "react-icons/fa"
function AddItem({ items, setItems}) {
    let [value, setValue] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!value) return;
        let item = {
            id: items.length + 1,
            checked: false,
            item: value
        }
        setItems([...items, item])

        // const options={
        //     method:"POST",
        //     headers:{
        //         "content-type":"application/json"
        //     },
        //     body:JSON.stringify(item)
        // }
        // let result=await apiRequest(API_URL,options);
        //   if(result) setError(result)
        // localStorage.setItem('shoppinglist', JSON.stringify(items))
        setValue("")
    }


    return <form onSubmit={(e) => handleSubmit(e)} className="ItemForm">
        <input type="text" id="addItem" placeholder="Add Item" required autoFocus
            onChange={(e) => setValue(e.target.value)} value={value} />
        <button
            style={{ height: "37px", borderRadius: "20px", background: "royalblue", color: "white" }} type="submit"><FaPlus /></button>
    </form>
}


export default AddItem;