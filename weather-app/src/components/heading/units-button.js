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
        className="py-2 px-4 my-2 text-md sm:text-lg rounded-3xl 
        bg-white bg-opacity-25 border-2 border-white max-w-52 
        transition duration-500 hover:ring-2 ring-white flex-shrink-0">
            Use {unit} units
        </button>
    );

}

export default UnitsButton;