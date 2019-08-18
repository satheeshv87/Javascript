// Get data from data.js
var tableData = data;

// select the table where data needs to be added
var tablestruc = d3.select("#ufo-table").select("tbody")

// Add tr rows
var tr = tablestruc.selectAll('tr').data(tableData).enter().append('tr')

// Add td rows with data
tr.append('td').html(function(m) { return m.datetime; });
tr.append('td').html(function(m) { return m.city; });
tr.append('td').html(function(m) { return m.state; });
tr.append('td').html(function(m) { return m.country; });
tr.append('td').html(function(m) { return m.shape; });
tr.append('td').html(function(m) { return m.durationMinutes; });
tr.append('td').html(function(m) { return m.comments; });

// Get filter button and filter on dates when a click happens
var filterbtn = d3.select("#filter-btn")

filterbtn.on("click", function(){

    // prevent from reloading
    d3.event.preventDefault()

    // get the form input value
    var searchvalue = d3.select('#entervalue').property('value')

    // get what search metric was selected
    var myselect = document.getElementById('myselect');    
    var searchby = myselect.options[myselect.selectedIndex].value

    // filter data for the metric/value 
    if (searchby == "datetime"){
        var filteredData = tableData.filter(mydata => mydata.datetime === searchvalue)
    }
    else if (searchby == "city"){
        var filteredData = tableData.filter(mydata => mydata.city === searchvalue)
    }
    else if (searchby == "state"){
        var filteredData = tableData.filter(mydata => mydata.state === searchvalue)
    }    
    else if (searchby == "country"){
        var filteredData = tableData.filter(mydata => mydata.country === searchvalue)
    }     
    else if (searchby == "shape"){
        var filteredData = tableData.filter(mydata => mydata.shape === searchvalue)
    }            

    // clear the existing data to load filtered data
    tablestruc.html("");

    // after data is filtered, display no data message if no data exist, else display the filtered data
    if (filteredData.length == 0){
        tablestruc.append('tr').append('td').text('No Data; Please enter a different search value')
    }    
    else {
        // Add tr rows
        var tr = tablestruc.selectAll('tr').data(filteredData).enter().append('tr')

        // Add td rows with data
        tr.append('td').html(function(m) { return m.datetime; });
        tr.append('td').html(function(m) { return m.city; });
        tr.append('td').html(function(m) { return m.state; });
        tr.append('td').html(function(m) { return m.country; });
        tr.append('td').html(function(m) { return m.shape; });
        tr.append('td').html(function(m) { return m.durationMinutes; });
        tr.append('td').html(function(m) { return m.comments; });
    }        
})