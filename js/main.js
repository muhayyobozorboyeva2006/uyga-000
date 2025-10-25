let form= document.getElementById("form")
let studentsData = JSON.parse(localStorage.getItem("students") || "[]")
let tbody = document.getElementById("tbody")




localStorage.setItem("students" , JSON.stringify(studentsData))

let outerModel=document.getElementById("outer-modal")
form.addEventListener("submit" , function(e){
    let student={}
 e.preventDefault();
    student.firstName = e.target[0].value
    student.lastName = e.target[1].value
    student.country = e.target[2].value
    student.isWork = e.target[3].value
    studentsData.push(student)
    localStorage.setItem("students" , JSON.stringify(studentsData))
})
form.addEventListener("click" , function(e){
    e.stopImmediatePropagation();
})



outerModel.addEventListener("click" , function(){
    outerModel.classList.add("hidden")
})


function getStudents(){
studentsData.map((el) => {
    tbody.innerHTML += `
          < tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600" >
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4">
                                    Silver
                                </td>
                                <td class="px-6 py-4">
                                    Laptop
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                    <button  class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>

                                </td>
                            </tr >
    
    `
  
    
})
}