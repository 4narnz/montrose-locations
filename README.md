# Nearest Office Finder

This project is a simple static website that allows users to find the nearest Montrose office based on their input address. It utilizes the Google Distance Matrix API to calculate driving distances and times.

## Project Structure

`index.html`: The main HTML document that provides the structure of the web page.
`css/styles.css`: Contains styles for the web page, defining layout, colors, fonts, and other visual aspects.
`js/app.js`: Contains the JavaScript logic for handling user input, calling the Google Distance Matrix API, and displaying results.

## Setup Instructions

1. **Get a Google API Key**:
   Go to the Google Cloud Console.
   Create a new project and enable the Google Maps JavaScript API.
   Generate an API key and restrict it to your domain for security.


2. **Update the HTML File**:
   Open `index.html` and replace `YOUR_API_KEY` in the script tag with your actual Google API key.

3. **Deploying the Project**:
   For GitHub Pages, create a public repository and push your project files. Enable GitHub Pages in the repository settings.

## Usage

Open the deployed website.
Enter an address in the input field.
Click the "Submit" button.
The 2 nearest Montrose offices, along with the driving distance and time, will be displayed.

## Notes

Ensure that the Google Distance Matrix API is enabled for your API key.
This project does not require any backend infrastructure or user login. It is fully client-side and lightweight.




