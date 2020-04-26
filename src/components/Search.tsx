import React from 'react';
import {SearchType} from '../Interfaces'

const Search : React.FC<SearchType> = ({updateTerm}) => {
    return (
        <div>
            <h3>What would you like to see?</h3>
            <input type="text" onChange={(e) => updateTerm(e.target.value)} />
        </div>
    )

}

export default Search;