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
        }
    }

    return (
        <button onClick={() => changeUnits(unit)}
        className="py-2 px-4 m-2 text-white text-lg text-shadow 
        rounded-3xl bg-white bg-opacity-40 hover:ring-2 ring-white 
        w-52 transition duration-500">
            Use {unit} units
        </button>
    );

}

export default UnitsButton;