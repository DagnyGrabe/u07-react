import UserPositionButton from './user-position-button';
import UnitsButton from './units-button';
import SearchBox from './search-box';

function Heading({ props }) {

    return (

        <div className="static">
            <div className=" mb-4 py-8 px-12 sm:px-12 bg-white 
                bg-opacity-60 ">
                <h1 className="headline w-60 xs:w-72 sm:w-80 font-bold 
                    text-4xl xs:text-5xl sm:text-6xl uppercase tracking-tighter">
                    Generic Weather App
                </h1>
            </div>

                <div className="container flex flex-col md:flex-row justify-between items-stretch sm:items-baseline
                       w-11/12 xs:w-10/12 xl:w-9/12 mx-auto">

                    <div className="flex flex-col xs:flex-row justify-between md:justify-start my-2 w-full sm:w-3/4 md:w-1/2">
                        <UserPositionButton setLat={props.setLat} setLon={props.setLon} />
                        <UnitsButton setUnits={props.setUnits} setDisplayUnits={props.setDisplayUnits} />
                    </div>
                    <SearchBox setLat={props.setLat} setLon={props.setLon} />
                </div>
            
        </div>
    );

}

export default Heading;