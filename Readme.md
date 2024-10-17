<h1>Weather Api</h1>
    
   <h2>Description</h2>
    <p>
        This weather app allows users to search for the current weather and 5-day forecast of any city using the OpenWeather API.
        The user inputs the city name, and the app displays the weather details, including temperature, humidity, wind speed, and weather condition.
        Additionally, it shows a 5-day forecast, with weather icons representing the forecast for each day.
    </p>

   <h2>Functionality</h2>
    <ul>
        <li><strong>Search Weather:</strong> Users can enter a city name and click on the search button or press the "Enter" key to get the weather information for that city.</li>
        <li><strong>Display Weather Info:</strong> The app shows the current temperature, weather conditions (like rain, clear sky), humidity, and wind speed of the selected city.</li>
        <li><strong>5-Day Forecast:</strong> The app displays a 5-day weather forecast at 12:00 PM for the selected city with icons and temperatures.</li>
    </ul>

  <h2>Screenshots & Screen Recording</h2>
<p>Below is an example of the application's UI, displaying the weather forcasting image & video.</p>

https://github.com/user-attachments/assets/17b2f6b6-6de9-43af-a31b-7b0094581a45



![image alt](https://github.com/vaibhavkumawat2005/weather-api1/blob/01e803db540d973be6ad9ff4e2b84ed828c9288b/asset/iss/Screenshot%202024-10-17%20224918.png)
![image alt](https://github.com/vaibhavkumawat2005/weather-api1/blob/01e803db540d973be6ad9ff4e2b84ed828c9288b/asset/iss/Screenshot%202024-10-17%20224935.png)
![image alt](https://github.com/vaibhavkumawat2005/weather-api1/blob/01e803db540d973be6ad9ff4e2b84ed828c9288b/asset/iss/Screenshot%202024-10-17%20224953.png)

  <h2>API Used</h2>
    <p>
        The app uses the <a href="https://openweathermap.org/">OpenWeather API</a> to fetch weather data. The following endpoints are used:
    </p>
    <ul>
        <li><strong>Current Weather:</strong> Fetches current weather data using the city name.</li>
        <li><strong>5-Day Forecast:</strong> Fetches the weather forecast for the next five days.</li>
    </ul>

   <h2>Code Overview</h2>
    
   <h3>HTML Structure</h3>
    <ul>
        <li><strong>Input Section:</strong> The city input field and search button allow the user to enter the city name and trigger the weather search.</li>
        <li><strong>Weather Info Section:</strong> Displays the weather information, including city name, temperature, humidity, wind speed, and current weather conditions.</li>
        <li><strong>Forecast Section:</strong> Shows the 5-day forecast with weather icons and temperatures.</li>
        <li><strong>Error Section:</strong> Displays a "City not found" message if the search result does not return valid data.</li>
    </ul>

   <h3>JavaScript Logic</h3>
    <p>The JavaScript file handles the functionality of the weather app by interacting with the DOM and fetching data from the OpenWeather API.</p>
    
  <ul>
        <li><strong>Event Listeners:</strong>
            <ul>
                <li><code>click</code> event on the search button to trigger the weather search.</li>
                <li><code>keydown</code> event on the input field to allow searching by pressing the "Enter" key.</li>
            </ul>
        </li>

  <li><strong>Functions:</strong>
            <ul>
                <li><code>getWeatherIcon(id)</code>: Returns the correct weather icon based on the weather condition ID.</li>
                <li><code>getFetchData(endpoint, city)</code>: Makes an API call to OpenWeather and retrieves weather data.</li>
                <li><code>updateWeatherinfo(city)</code>: Updates the UI with current weather data by calling the API and displaying the result.</li>
                <li><code>updateForcastInfo(city)</code>: Fetches and updates the 5-day forecast for the city by inserting HTML for each forecast day.</li>
                <li><code>showDisplaySection(section)</code>: Controls the display of different sections (search, error, weather info).</li>
            </ul>
        </li>
    </ul>

  <h2>How to Use</h2>
    <ol>
        <li>Enter the name of a city in the input field.</li>
        <li>Click the search button or press "Enter" to display the weather information.</li>
        <li>If the city is found, the weather information will be displayed, including temperature, humidity, wind speed, and condition icons.</li>
        <li>The 5-day forecast will appear below the current weather.</li>
        <li>If the city is not found, an error message will be shown.</li>
    </ol>

   <h2>Dependencies</h2>
    <ul>
        <li>OpenWeather API (requires API key)</li>
        <li>Google Material Icons for icons like location, search, and weather conditions</li>
    </ul>

  <h2>Files</h2>
    <ul>
        <li><code>index.html</code>: The main HTML file containing the structure of the app.</li>
        <li><code>style.css</code>: The CSS file for styling the app.</li>
        <li><code>script.js</code>: The JavaScript file that handles the logic for fetching and displaying the weather data.</li>
    </ul>

  <h2>Note</h2>
    <p>
        Make sure to replace the <strong>API key</strong> (<code>apikey</code>) in the script with your own key from OpenWeather to get the app working.
    </p>
