import React, { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search query:', query);
        // Add logic to fetch and display search results
    };

    return (
        <div className="search-page p-4">
            <h1 className="text-2xl font-bold mb-4">Search</h1>
            <form onSubmit={handleSearch} className="flex gap-2">
                <input
                    type="text"
                    placeholder="Search for songs, albums, or artists..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
            </form>
        </div>
    );
};

export default Search;
