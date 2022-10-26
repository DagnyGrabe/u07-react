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
                className="p-2 m-2 bg-black text-white">
            use {unit} units
        </button>
    );

}

export default UnitsButton;