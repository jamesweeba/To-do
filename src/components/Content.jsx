
import ItemLists from "./ItemList"
function Content({ items, setItems }) {
   async function handleChange(id) {
        let listItems = items.map(item => {
            if (item.id === id) {
                item.checked = !item.checked;
            }
            return item;
        });

        // let options = {
        //     method: "patch",
        //     headers:{
        //         "Cotent-Type":"application/json",
        //     },
        //     body:JSON.stringify({checked:listItems[0].checked})
        // }
        // let url = `${API_URL}/${id}`
        // let results = await apiRequest(url, options)
        // if (results) setError(results)
        setItems(listItems)

       
    }

    function Error() {
        let errorType = "";
        if (!items.length) {
            errorType = "No items found"
        }
        // if (fetchError) {
        //     errorType = fetchError
        // }
        return errorType
    }
   async function handleDelete(id) {
        let listItems = items.filter(item => item.id != id);
        setItems(listItems);
        // let options = {
        //     method: "delete",
        // }
        // let url = `${API_URL}/${id}`
        // let results = await apiRequest(url, options)
        // if (results) setError(results)
    }
    return (
        <div className="content">
            {/* {isLoading && <p style={{ color: "black" }}>loading......</p>} */}
            {Error() &&  <p style={{ color: "red" }}>{Error()}</p>}
            {items.length &&  <ItemLists handleDelete={handleDelete}
                handleChange={handleChange} items={items} />}
        </div>
    )
}

export default Content;