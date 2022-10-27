import { FaChevronDown } from 'react-icons/fa';

function ExpandButton({ expanded, setExpanded }) {

    return (
        <button onClick={() => setExpanded(!expanded)}
            className={`${expanded ? "border-2" : ""} 
            w-full py-1.5 flex justify-center 
            rounded-b-xl bg-white bg-opacity-20 transition duration-500 
            border-white transform hover:border-2`}>
            <p className={`${expanded ? "rotate-180" : ""}`}>
                <FaChevronDown />
            </p>

        </button>

    );

}

export default ExpandButton;