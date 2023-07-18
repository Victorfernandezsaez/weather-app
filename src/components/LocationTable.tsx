import { FC } from 'react';
import { WeatherLocation } from '../model/Weather';

interface LocationTableProps {
    locations: WeatherLocation[];
    current: WeatherLocation | null;
    onSelect: (location: WeatherLocation) => void;
}

export const LocationTable: FC<LocationTableProps> = ({ locations, onSelect, current }) =>
    <div>
        <h2>Locations</h2>
        <table className="table table-hover">
            <tbody>
                {locations.map((location, index) =>
                    <tr className={current?.id === location.id ? 'table-primary' : ''}
                        key={index}
                        onClick={() => onSelect(location)}>
                        <td>{location.name}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>