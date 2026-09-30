# Interactive To-Do List

A to-do list app built with vanilla JavaScript, HTML, and CSS (no frameworks or libraries).

## Features

- Add a task with the **Add** button or the **Enter** key
- Mark a task complete/incomplete by clicking its checkbox or its text (completed tasks are struck through)
- Delete a task
- Tasks are saved in `localStorage`, so they survive a page refresh
- Empty or whitespace-only tasks are rejected with an error message
- Counter showing how many tasks are still remaining

## How to run

Open `index.html` directly in any modern browser. No local server or build step is needed.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Page structure (form, list container, messages) |
| `style.css` | Layout and visual states (completed, error, empty) |
| `script.js` | App logic |

## How the code is organized (`script.js`)

- **State:** a `tasks` array of `{ id, text, completed }` objects is the single source of truth.
- **Storage:** `saveTasks()` / `loadTasks()` read and write the array to `localStorage`.
- **Actions:** `addTask()`, `toggleTask()`, `deleteTask()` build a new array and pass it to `updateTasks()`, which saves and re-renders.
- **Rendering:** `renderTasks()` uses `map` to turn the array into `<li>` elements and replaces the list contents in one step; `renderTaskCount()` uses `reduce` to count remaining tasks.
- **Array methods used:** `map` (render, toggle), `filter` (delete, validating saved data), `reduce` (remaining count).
- **Events:** one `submit` listener on the form (button + Enter) and one delegated `click` listener on the list for all task buttons.

## Screenshots

_Add your screenshots here (empty list and list with tasks)._
