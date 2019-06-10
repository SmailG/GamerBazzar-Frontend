  import React from 'react';
import { Input, Search } from 'semantic-ui-react';
import _ from 'lodash';
import './styles.scss';

const SearchField = ({ isLoading, handleResultSelect, handleSearchChange, results, value, fluid }) => {


    return (
        <Search
        placeholder="Search Products..."
        className="search-field"
        loading={isLoading}
        onResultSelect={handleResultSelect}
        onSearchChange={_.debounce(handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
      />
    );
}

export default SearchField;