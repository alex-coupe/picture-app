import React from 'react';
import {SearchType} from '../Interfaces'

const Search : React.FC<SearchType> = ({updateTerm}) => {
    return (
        <div className="text-center">
            <h3 className="mt-3">What would you like to see?</h3>
            <input type="text" className="mb-3 form-control" onChange={(e) => updateTerm(e.target.value)} />
        </div>
    )

}

export default Search;