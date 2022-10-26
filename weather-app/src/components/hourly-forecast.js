import { FaChevronDown } from 'react-icons/fa';


function HourlyForecast({ data, displayUnits }) {

    const getHour = (time) => {
        let hour = new Date(time * 1000).toLocaleTimeString(
            [], { hour: '2-digit', hour12: false });
        return hour;
    }

    const expandHourly = (target) => {
        let element = document.getElementById(target.value);
        element.classList.toggle('hidden');
        target.classList.toggle('border-2');
        let icon = target.querySelector('p');
        icon.classList.toggle('rotate-180');
    }

    const next24 = data.slice(1, 25);

    return (
        <div className="flex my-4 w-11/12 h-40 overflow-x-auto rounded-xl items-start">
            {next24.map((item, idx) => (
                <div key={idx}
                    className="mx-1 text-center rounded-xl bg-white bg-opacity-30 w-32 flex-shrink-0">
                    <p className="text-xl font-bold my-2 text-white text-shadow">
                        {getHour(item.dt)}
                    </p>
                    <span className="flex flex-row justify-between mx-4 my-1">
                        <img alt='weather icon'
                            src={require(`../icons/${item.weather[0].icon}.png`)}
                            className="w-12 p-1"
                        />
                        <p className="text-lg font-bold text-white text-shadow">
                            {Math.round(item.temp)}{displayUnits[0]}
                        </p>
                    </span>
                    <div id={idx} className="hidden">
                        <p>{item.weather[0].description}</p>
                    </div>
                    <button onClick={(e) => expandHourly(e.target)}
                        className="w-full py-1.5 px-14 rounded-b-xl bg-white bg-opacity-20 transition duration-500 border-white transform hover:border-2"
                        value={idx}>
                        <p className="text-white"><FaChevronDown/></p>
                        
                    </button>
                    
                </div>
            ))}
        </div>

    );

}

export default HourlyForecast;