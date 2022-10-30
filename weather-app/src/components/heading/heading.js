import UserPositionButton from './user-position-button';
import UnitsButton from './units-button';
import SearchBox from './search-box';

function Heading({ props }) {

    return (
        <div>

            <h1 className="font-bold text-5xl sm:text-6xl mb-4 sm:mb-6 bg-white 
                uppercase bg-opacity-70 relative p-8 xs:px-14">
                <p className="headline w-72 sm:w-80">
                    Generic Weather App
                </p>
            </h1>

            <div className="container w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto 
                 flex flex-col lg:flex-row items-baseline text-white text-shadow">
                <SearchBox setLat={props.setLat} setLon={props.setLon} />
                <div className="flex flex-col sm:flex-row my-2">
                    <UserPositionButton setLat={props.setLat} setLon={props.setLon} />
                    <UnitsButton setUnits={props.setUnits} setDisplayUnits={props.setDisplayUnits} />
                </div>

            </div>
        </div>

    );

}

export default Heading;