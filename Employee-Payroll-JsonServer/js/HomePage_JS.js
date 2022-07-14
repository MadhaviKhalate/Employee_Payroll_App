window.addEventListener('DOMContentLoaded', (event)=>{
    createInnerHtml();
});

const createInnerHtml = () =>{
    const headerHtml = "<tr class='table-header'><th></th><th>Name</th><th>Gender</th><th>Salary</th><th>Department</th><th>Start Date</th><th>Actions</th></tr>";
    const innerHtml = `${headerHtml}
        <tr>
            <td><img src="../assets/employee-1.jpeg" alt="employee-1"></td>
            <td>Prashant Bhoite</td>
            <td>Male</td>
            <td>50000</td>
            <td>
                <div class="department">Engineer</div>
                <div class="department">Others</div>
            </td>
            <td>21 March 2022</td>
            <td class="actions">
                <img id="1" onclick="remove(this)" alt="delete" src="../assets/trash-icon.jpeg" width="20px" height="20px">
                <img id="1" onclick="update(this)" alt="update" src="../assets/edit-icon.jpeg" width="20px" height="20px">
            </td>
        </tr>
    `;
    document.querySelector('#table').innerHTML = innerHtml;
}