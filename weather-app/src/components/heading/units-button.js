import { useState } from "react";

function UnitsButton({ setUnits, setDisplayUnits }) {

    const [unit, setUnit] = useState('imperial');

    const changeUnits = (unit) => {
        switch (unit) {
            case 'imperial':
                setUnits('imperial');
                setDisplayUnits(['°F', 'mph']);
                setUnit('metric');
                break;
            case 'metric':
                setUnits('metric');
                setDisplayUnits(['°C', 'm/s']);
                setUnit('imperial');
                break;
            default:
                return;
        }
    }

    return (
        <button onClick={() => changeUnits(unit)}
        className="py-2 px-4 my-1 lg:my-0 md:mr-2 text-sm xs:text-md lg:text-lg rounded-full 
        max-w-52 text-white text-shadow bg-transparent border-4 border-white border-opacity-60
        transition duration-500 inner flex-shrink-0">
            Use {unit} units
        </button>
    );

}

export default UnitsButton;