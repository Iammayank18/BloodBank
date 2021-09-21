import React from 'react'

const Search = () => {
    return (
        <div>
            <div className="container text-center mt-5">
            <h1>Search for Donation center</h1>
            <p class="text-danger">Please fill all the details</p>
            </div>
            
            <div className="container">
            <form class="d-flex mt-5">
                <input class="form-control me-2" type="search" placeholder="Search For Donation Centers" aria-label="Search"/>
               <button class="btn btn-outline-success" type="submit">Search</button>
               </form>
            </div>
        </div>
    )
}

export default Search
