

function Search({search,setSearchItem}){
    return(
        <form onSubmit={(e=>e.preventDefault(e)) } className="searchForm">
            <input type="text"  placeholder="Search"  value={search} onChange={(e)=>setSearchItem(e.target.value)}/>
        </form>
    )
}

export default  Search