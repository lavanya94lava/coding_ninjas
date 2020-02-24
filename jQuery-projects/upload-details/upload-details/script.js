

function renderList(){
    console.log("hii");
    var rollVal = $('#roll-number').val();
    var nameVal = $('#Name').val();
    var marksVal = $('#marks').val();

    if(rollVal ===""||nameVal ===""|| marksVal===""){
        alert("Please Fill All the Fields");
    }
    else{
        var addItem = '<div class = "addItem">Roll No-'+rollVal+ ','+ nameVal+' has scored '+ marksVal+' marks </div>';
        $('#final-list').append(addItem);
    }
}

$('#btn').click(renderList);