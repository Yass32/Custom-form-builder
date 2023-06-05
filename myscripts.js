//Page is fully loaded
$(document).ready(function(){ 
    //When text field button is clicked, a new text field and remove button is appended to the form
    $(".customForm").on("click", "#textField", function(){ 
        //Get custom fieldname
        let fieldName = $("#fieldNameInput").val(); 
        // Create input field
        let textField = $(`<div class="formContainer">
            <label class="col-form-label mt-4 text-light" for="inputDefault">${fieldName}</label> 
            <div class="input-group mb-3">
                <input type="text" name="${fieldName}" class="form-control m-input" placeholder="Enter title" autocomplete="off">
                <div class="input-group-append">
                    <button id="removeField" type="button" class="btn btn-danger">Remove</button>
                </div>
            </div>
        </div>`);
        $("form").append(textField);
    });
    
    //When select field button is clicked, a new select field and remove button is appended to the form
    $(".customForm").on("click", "#selectField", function(){
        //Get custom fieldname
        let fieldName = $("#fieldNameInput").val(); 
        //Create Select Field
        let selectField = $(`<div class="formContainer">
            <label for="exampleSelect1" class="form-label mt-4 text-light">${fieldName}</label>
            <div class="input-group">
                <select class="custom-select form-control" id="inputGroupSelect04" name="${fieldName}">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div class="input-group-append">
                    <button id="removeField" type="button" class="btn btn-danger">Remove</button>
                </div>
            </div>
        </div>`);
        $("form").append(selectField);
    });

    //When remove button is clicked the corresponding field is removed
    $("form").on("click", "#removeField", function(){
        $(this).closest(".formContainer").remove();
    });

    // Create an object to track distinct field names
    let distinctFieldNames = [];

    // When Save button is clicked
    $("#saveDataButton").click(function(event){
        // Prevent form submission and page reload so as to not lose data
        event.preventDefault(); 
 
        alert("Form Saved");

        // Serialize form data. Returns an array of dictionaries of name and value of form fields
        let formData = $("form").serializeArray();  
        
        // For each element in the data array append its name and value to the table
        $.each(formData, function(index, element) {

            // Check if the field name is already added as a column header
            if (distinctFieldNames.includes(element.name)) {
                // Field name already exists as column header, append new row to tbody and new cell to that row
                if (index === 0) {
                // Create a new row for the first occurrence of the field name
                let lastRow = $("tbody tr:last");
                lastRow.after(`<tr class="table-light"><td name="${element.name}-value">${element.value}</td></tr>`);
                } else {
                // Add a new cell to the last row for subsequent occurrences
                let lastRow = $("tbody tr:last");
                lastRow.append(`<td name="${element.name}-value">${element.value}</td>`);
                }
            }
            else {
                //Add Field Name to the Array
                distinctFieldNames.push(element.name);
                // Field name hasnt been added as column header, add new column header and table data
                $("#theadRow").append(`<th name="${element.name}">${element.name}</th>`);
                $("#tbodyRow").append(`<td name="${element.name}-value">${element.value}</td>`);
            }
        });            
    }); 


    // When Reset button is clicked
    $("#tableResetButton").click(function () {
        alert("Form will reset");

        // Clear table data in  head and body
        $("#theadRow").empty();
        $("tbody tr").empty();

        //Clear array
         distinctFieldNames = [];
    });
});