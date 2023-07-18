import { FC, useState } from "react";

interface LocationSearchProps {
    onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({ onSearch }) => {
    const [locationSearch, setLocationSearch] = useState('');
    const disableSearch = locationSearch.trim() === '';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocationSearch(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !disableSearch) {
            addLocation();
        }
    };

    const addLocation = () => {
        onSearch(locationSearch); // Prop callback invoked - string passed
        setLocationSearch('');
    };

    return (
        <div>
            <label>
                Add Location
                <input
                    className=" mx-2 bg-white"
                    type="text"
                    value={locationSearch}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}

                />
            </label>
            <button className="btn btn-primary"
                onClick={addLocation} disabled={disableSearch}>
                Search
            </button>
        </div>
    );
}


