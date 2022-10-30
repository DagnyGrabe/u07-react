

function Footer() {

    return (
        <div className="bg-white bg-opacity-60 w-full static p-8 mt-10">
            <div className="footer-text flex flex-col justify-center 
                text-md sm:text-lg font-bold items-center text-center">
                <p className="mx-1 my-1">
                    Geocoding provided by  
                    <a href="http://geodb-cities-api.wirefreethought.com/"
                       className="mx-1 my-1">
                        GeoDB 
                    </a> 
                </p>
                <p className="mx-1 my-2">
                &amp;&amp;
                </p>
                <p className="mx-1 my-1">
                    Weather data provided by 
                    <a href="https://openweathermap.org/"
                       className="mx-1 my-1">
                        OpenWeather
                    </a>
                </p>

            </div>

        </div>
    );

}

export default Footer;