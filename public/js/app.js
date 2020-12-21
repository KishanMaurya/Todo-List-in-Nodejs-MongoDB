$(document).on('change','.check', function(e){
    e.preventDefault()
    let id=$(this).attr('data')
    console.log(id)
    $('#UpdateModel').modal('show');
    $.ajax({
        type: "PATCH",
        url: "/taskcheck/"+id,
        dataType: "json",
        data: JSON.stringify({id:id}),
        contentType: 'application/json',
        cache: false,
        timeout: 5000,
        complete: function() {
          console.log('process complete');
        },
        dataType: "json",
        success: function (response,status,xhr) {
            console.log(response)
        },
        error: function(xhr,status,error) {
            console.log('process error',error);
        },
    });
})

//updaterecord


$(document).on('click','.edit', function(e){
    e.preventDefault()
    let id=$(this).attr('data')
    console.log(id)
    $('#UpdateModel').modal('show');
    $.ajax({
        type: "PUT",
        url: "/taskcheck/"+id,
        dataType: "json",
        data: JSON.stringify({id:id}),
        contentType: 'application/json',
        cache: false,
        timeout: 5000,
        complete: function() {
          console.log('process complete');
        //   window.location.reload();
        },
        dataType: "json",
        success: function (response,status,xhr) {
            console.log(response)
        },
        error: function(xhr,status,error) {
            console.log('process error',error);
        },
    });
})



$(document).on('click','.delete', function(e){
    e.preventDefault()
    let id=$(this).attr('data')
    console.log(id)
    $('#DeleteModel').modal('show');
    $.ajax({
        type: "DELETE",
        url: "/taskcheck/"+id,
        dataType: "json",
        data: JSON.stringify({id:id}),
        contentType: 'application/json',
        cache: false,
        timeout: 5000,
        complete: function() {
          console.log('process complete');
          
        },
        dataType: "json",
        success: function (response,status,xhr) {
            console.log(response)
        },
        error: function(xhr,status,error) {
            console.log('process error',error);
        },
    });
})



//view
$(document).on('click','.view',function(e){
    e.preventDefault();
    let id=$(this).attr('data')
    console.log(id)
    $('#myModal').modal('show');
    $.ajax({
        type: "PUT",
        url: "/taskview/"+id,
        dataType: "json",
        data: JSON.stringify({id:id}),
        contentType: 'application/json',
        cache: false,
        timeout: 5000,
        complete: function() {
          console.log('process complete');
        },
        dataType: "json",
        success: function (response,status, xhr) {
            var html = "";
                html=html+"<tr><td class='font-weight-bold'>ID</td><td>"+response._id+"</td></tr>";
                html=html+"<tr><td class='font-weight-bold'>MetingName</td><td>"+response.title+"</td></tr>";
                html=html+"<tr><td class='font-weight-bold'>Description</td><td>"+response.status+"</td></tr>";
                html=html+"<tr><td class='font-weight-bold'>Date</td><td >"+moment(response.createdAt).format('ddd Do MMM')+"</td></tr>";
			$("#tableview").html(html);
        },
        error: function(xhr,status,error) {
            console.log('process error',error);
        },
    });
})

//reloadfucntion 

$(document).on('click','.close', function(e){
    window.location.reload();
})