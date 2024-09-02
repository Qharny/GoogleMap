# Google Maps Web App

## Description

This project is a responsive web application that integrates Google Maps. It features a modern UI with animations, a search functionality, and a customized map style. Users can search for locations, and the map will center on the searched location with a dropped pin.

## Features

- Interactive Google Map
- Location search functionality
- Responsive design
- Custom map styling
- Animations and hover effects

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a Google Maps API key
- You have a basic understanding of HTML, CSS, and JavaScript
- You have a web server to host the application

## Installation

1. Clone this repository to your local machine.
2. Open the `index.html` file in a text editor.
3. Replace `YOUR_API_KEY` in the Google Maps script tag with your actual Google Maps API key.
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
   ```
4. Save the file.

## Usage

1. Host the `index.html` file on a web server.
2. Open the hosted file in a web browser.
3. Use the search bar to look up locations.
4. Click the "Search" button to center the map on the searched location and drop a pin.

## Customization

- To change the default map center and zoom level, modify the `center` and `zoom` properties in the `initMap` function.
- To adjust the map style, modify the `styles` array in the `initMap` function.
- To change the UI colors, modify the Tailwind CSS classes in the HTML.

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.
