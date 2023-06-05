# Custom Build Form

This is a simple web application that allows users to create a custom form by adding text fields or select fields dynamically. The form data is then displayed in a table format.

### How it Works

1. The HTML structure consists of a form and a table for displaying the form data.
2. JavaScript code is used to handle the dynamic form creation and data display functionality.
3. The user can add text fields by entering a field name and clicking the "Add Text Field" button.
4. Similarly, the user can add select fields by entering a field name and clicking the "Add Select Field" button.
5. Each added field is displayed in the form section with appropriate input elements.
6. The user can remove any field by clicking the "Remove" button associated with that field.
7. When the user clicks the "Save" button, the form data is serialized and displayed in a table.
8. Each unique field name becomes a column header in the table.
9. Subsequent submissions of the form append new rows to the table if the field name already exists.
10. The "Reset" button clears the table and allows the user to start over.

### Technologies Used

- HTML
- CSS (Bootstrap framework)
- JavaScript (jQuery library)

Feel free to explore the code and customize it for your own projects.

### How to Run

To run this application, follow these steps:

1. Clone this repository to your local machine.
2. Open the HTML file (`index.html`) in a web browser.
3. You can now create your custom form by adding fields and save the form data.

That's it! You now have a custom form builder that displays form data in a table format.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code according to your needs.
