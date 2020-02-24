var list = $("#course-list");

function getCourses(){
    $.get('https://codingninjas.in/api/v3/courses',function(data){
        let coursesData = data.data.courses;
        for(let i of coursesData){
            list.append(`
                <div class = "course-container">
                    <div class = "image-container">
                        <img src = ${i.preview_image_url} class = "photo">
                    </div>
                    <div class = "course-details">
                        <p class = "courseName">${i.name}</p>
                        <p class ="courseLevel">${i.level}</p>
                    </div>
                </div>
            `);
        }
    });
    $("#getData").remove();
};
$("#fetch").click(getCourses);
