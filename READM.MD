# Blood Glucose Tracker

A simple web-based application that allows users to record, view, edit, and delete their blood glucose readings. Built using HTML, CSS, and JavaScript, and powered by a `json-server` backend.

---

## Features

* Add blood glucose readings with date, time, and level.
* Edit existing readings easily.
* Delete unwanted records with confirmation.
* View all records in a clean, styled table.
* Fully responsive and styled UI.

---

## Tech Stack

* **Frontend:** HTML, CSS, Vanilla JavaScript
* **Backend:** JSON Server (hosted via Render)

---

## Project Structure

```
Blood-Glucose-Tracker/
├── index.html
├── style.css
├── script.js
├── db.json (for local testing)
├── server.js (for deployment)
├── package.json
└── README.md
```

---

## Setup Instructions

### Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mohamedsalimagil/Blood-Glucose-Tracker.git
   cd Blood-Glucose-Tracker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start JSON Server:**

   ```bash
   json-server --watch db.json --port 3000
   ```

4. **Open `index.html` in your browser.**

### Deployment (Render)

* The backend is deployed using [Render](https://render.com).
* API URL used in frontend: `https://blood-glucose-tracker-9or0.onrender.com`

---

## Core Logic

The `script.js` file handles:

* **Fetching records** from the backend and rendering them as table rows.
* **Submitting the form** to either add a new reading or update an existing one.
* **Editing** a record: pre-fills the form and sets a flag for PATCH request.
* **Deleting** a record: asks for confirmation, then sends DELETE request.

---

## UI Overview

* Clean input form with fields for date, time, and glucose level.
* Table with Edit and Delete buttons.
* Footer with GitHub link:

  > *Built with love by* **[Mohamed Salim Agil](https://github.com/mohamedsalimagil)**

---

## Sample Entry

| Date       | Time  | Level (mmol/L) | Actions       |
| ---------- | ----- | -------------- | ------------- |
| 2025-07-15 | 08:30 | 5.6            | Edit / Delete |

---

## Notes

* Make sure your Render deployment uses `npm start` and `server.js` is correctly configured.
* If local `json-server` isn't recognized, try installing it globally:

  ```bash
  npm install -g json-server
  ```

---

## License

MIT

---





**Enjoy tracking your health!**
