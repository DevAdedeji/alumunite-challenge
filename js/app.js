let schools = [
    {
        name: '',
        stillSchooling: false,
        date: null,
    }
]

const formContainer = document.querySelector(".school-form")

const addSchoolBtn = document.querySelector(".add-school")

insertForm()

// function insertForm(){
//     schools.forEach((school)=>{
//         const schoolEl = document.createElement("div")
//         schoolEl.classList.add("school")
//         schoolEl.innerHTML = `
//         <div class="school">
//                             <!-- Select school -->
//                             <div class="form">
//                                 <label for="school">Select a school you graduated from</label>
//                                 <select name="school" id="${school.name}">
//                                     <option value="Farm Academy">Farm Academy</option>
//                                     <option value="Dominion Academy">Dominion Academy</option>
//                                     <option value="Lead Academy">Lead Academy</option>
//                                     <option value="Convenant Academy">Convenant Academy</option>
//                                 </select>
//                             <p>Can't find your school <a href="#">Add your school to the list</a> </p>
//                             </div>
//                             <!-- Still Schooling option -->
//                             <div class="still-schooling">
//                                 <input type="checkbox" name="still-schooling" id="${school.stillSchooling}">
//                                 <p>Still schooling here presently</p>
//                             </div>
//                             <!-- Year Graduated -->
//                             <div class="form">
//                                 <label for="year">Year Graduated</label>
//                                 <input type="date" name="year" id="year">
//                             </div>
//                         </div>
//                         <div class="line">
    
//         </div>
                       
//         `
//         formContainer.prepend(schoolEl)
//     })
// }

addSchoolBtn.addEventListener("click", ()=>{
    schools.push({
        name: '',
        stillSchooling: false,
        date: null,
    })
    insertForm()
})