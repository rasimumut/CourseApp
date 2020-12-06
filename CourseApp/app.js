class Course {
    constructor(title,instructor,image) {
        this.instructor= instructor;
        this.image=image;
        this.title=title;
    }

}

class UI {
    addCourseToList(course){
        const list = document.getElementById("course-list");
        var html = `
    <tr>
    <td> <img src="img/${course.image}"></td>
    <td>${course.title}</td>
    <td>${course.instructor}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
    </tr>
    `;
        list.innerHTML += html
    }

    clearControl(){
        const title = document.getElementById("title").value="";
        const instructor = document.getElementById("instructor").value="";
        const image = document.getElementById("image").value="";
    }

    deleteCourse(element){
        if(element.classList.contains("delete")){
            element.parentElement.parentElement.remove();
        }
    }

    showAlert(message,clasName){
        var alert = `
    <div class="alert alert-${clasName}">  
    ${message}
    </div>  `;
        const row = document.querySelector(".row");
        row.insertAdjacentHTML("beforebegin",alert)

        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },3000);
    }
}

document.addEventListener('DOMContentLoaded',Storage.displayCourse)


document.getElementById('new-course').addEventListener('submit',
    function (e) {

        const title = document.getElementById("title").value;
        const instructor = document.getElementById("instructor").value;
        const image = document.getElementById("image").value;

        //create object
        const course = new Course(title,instructor,image);

        // create UI
        const ui = new UI();
        if(title==="" || instructor==="" || image==="")
        {
            ui.showAlert('Lütfen tüm alanları doldurun',"warning");
        }
        else {
            // add course list
            ui.addCourseToList(course);

            // clear
            ui.clearControl(course)
            ui.showAlert('Kurs başarıyla eklendi',"success");

        }
        console.log(course);
        e.preventDefault();
    });

document.getElementById("course-list").addEventListener("click", function (e) {
    const ui = new UI();
    //delete course
    ui.deleteCourse(e.target)
    ui.showAlert('Seçtiğiniz kurs silindi',"danger");
});

