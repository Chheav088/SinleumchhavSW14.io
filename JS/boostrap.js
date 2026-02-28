document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    var fullname = document.getElementById("fullname").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var salary = document.getElementById("salary").value;
    var currency= Number(salary).toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
    });
    var dob = document.getElementById("DOB").value;
    var position = document.getElementById("position").value;
    var description = document.getElementById("Description").value;
    document.getElementById("result").innerHTML=`
    <div class="alert alert-success" role="alert">
        <button type="button" class="btn-close position-absolute 
        top-0 end-0 m-3" data-bs-dismiss="alert"></button>     
        <h5 class="text-primary">Submitted Information:</h5>
        <p><strong>Full Name  :</strong> ${fullname}</p>
        <p><strong>Gender     :</strong> ${gender}</p>
        <p><strong>Salary     :</strong> ${currency}</p>
        <p><strong>DateofBirth:</strong> ${dob}</p>
        <p><strong>Position   :</strong> ${position}</p>
        <p><strong>Description:</strong> ${description}</p>
    </div>
    `;
});