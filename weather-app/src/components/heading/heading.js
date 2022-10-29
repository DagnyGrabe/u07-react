import UserPositionButton from './user-position-button';
import UnitsButton from './units-button';
import SearchBox from './search-box';

function Heading({ props }) {

    return (
        <div>
            <h1 className="text-red-500 text-shadow m-24">hello</h1>
            <SearchBox setLat={props.setLat} setLon={props.setLon} />

            <div className="flex flex-col sm:flex-row w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
                <UserPositionButton setLat={props.setLat} setLon={props.setLon} />
                <UnitsButton setUnits={props.setUnits} setDisplayUnits={props.setDisplayUnits} />
            </div>
        </div>

    );

}

export default Heading;