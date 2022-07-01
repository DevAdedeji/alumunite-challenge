let schools = [
    {
        name: '',
        stillSchooling: false,
        date: null,
    },
    {
        name: '',
        stillSchooling: false,
        date: null,
    }
]

const formContainer = document.querySelector(".school-form")

console.log(formContainer);

const addSchoolBtn = document.querySelector(".add-school")

function initForm(){
    schools.forEach((school)=>{
        const schoolEl = document.createElement("div")
        schoolEl.classList.add("school")
        schoolEl.innerHTML = `
                        <!-- Select school -->
                        <div class="form">
                            <label for="school">Select a school you graduated from</label>
                            <div>
                                <select name="school" id="${school.name}">
                                    <option value="Farm Academy">Farm Academy</option>
                                    <option value="Dominion Academy">Dominion Academy</option>
                                    <option value="Lead Academy">Lead Academy</option>
                                    <option value="Convenant Academy">Convenant Academy</option>
                                </select>
                                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </div>
                        <p>Can't find your school? <a href="#">Add your school to the list</a> </p>
                        </div>
                        <!-- Still Schooling option -->
                        <div class="still-schooling">
                            <input type="checkbox" name="still-schooling" id="${school.stillSchooling}">
                            <p>Still schooling here presently</p>
                        </div>
                        <!-- Year Graduated -->
                        <div class="form">
                            <label for="year">Year Graduated</label>
                            
                                <input type="date" name="year" id="year">
                            
                        </div>
                    <br/>
                    <div class="line">
                    </div>
                    <br/>
                       
        `
        formContainer.prepend(schoolEl)
    })
}

initForm()

function insertForm(school){
    const schoolEl = document.createElement("div")
    schoolEl.classList.add("school")
    schoolEl.innerHTML = `
                    <!-- Select school -->
                    <div class="form">
                        <label for="school">Select a school you graduated from</label>
                        <div>
                            <select name="school" id="${school.name}">
                                <option value="Farm Academy">Farm Academy</option>
                                <option value="Dominion Academy">Dominion Academy</option>
                                <option value="Lead Academy">Lead Academy</option>
                                <option value="Convenant Academy">Convenant Academy</option>
                            </select>
                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>
                    <p>Can't find your school? <a href="#">Add your school to the list</a> </p>
                    </div>
                    <!-- Still Schooling option -->
                    <div class="still-schooling">
                        <input type="checkbox" name="still-schooling" id="${school.stillSchooling}">
                        <p>Still schooling here presently</p>
                    </div>
                    <!-- Year Graduated -->
                    <div class="form">
                        <label for="year">Year Graduated</label>
                        
                            <input type="date" name="year" id="year">
                        
                    </div>
                <br/>
                <div class="line">
                </div>
                <br/>
                   
    `
    formContainer.prepend(schoolEl)
}

addSchoolBtn.addEventListener("click", ()=>{
    insertForm({
        name: '',
        stillSchooling: false,
        date: null,
    })
})
