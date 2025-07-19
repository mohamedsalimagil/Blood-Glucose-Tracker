# Blood Glucose Tracker

## Description

This is a simple web-based blood glucose tracking application designed to help users log and view their blood sugar levels. It provides a clean interface for adding new entries and displaying a history of records. The project is built to practice DOM manipulation and working with external APIs using a deployed `json-server`.

## Project Overview

The application interacts with a live backend (hosted on Render) and is fully functional online. Users can access the application directly to add, view, and delete blood glucose records.

### Features

* View a list of blood glucose records
* Add new records (date, time, and level)
* Delete existing records

## Live Demo

You can view and use the live application here:
 [Blood Glucose Tracker (GitHub Pages)](https://mohamedsalimagil.github.io/Blood-Glucose-Tracker/)

> The app communicates with a deployed JSON server hosted on Render, so it works fully online — no installation required.

## Technologies Used

* HTML
* CSS
* JavaScript
* JSON Server (deployed on Render)

## Installations (For Local Use Only)

To run this project locally, follow the steps below:

1. **Install [Node.js](https://nodejs.org/)** if not already installed
2. **Install `json-server` globally**

```bash
npm install -g json-server
```

## How to Run the Project Locally

1. **Clone the repository**

```bash
git clone https://github.com/mohamedsalimagil/Blood-Glucose-Tracker.git
```

2. **Navigate into the project folder**

```bash
cd Blood-Glucose-Tracker
```

3. **Start the JSON server**

```bash
json-server --watch db.json
```

4. **Open `index.html`** in your browser
   (You can also use the Live Server extension in VS Code)

> **Note:** For a fully working version without setup, use the [hosted link](https://mohamedsalimagil.github.io/Blood-Glucose-Tracker/).

## Author

Mohamed Salim Agil

## License

MIT

