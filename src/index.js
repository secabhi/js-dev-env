import './index.css';
import {getemp,deleteEmp} from './api/empApi';

getemp().then(result=>{
  let empBody="";

  result.forEach(emp=>{
    empBody += `<tr>
    <td><a href="#" data-id=${emp.id} class="deletedEmp">Delete</a></td>
    <td>${emp.id}</td>
    <td>${emp.name}</td>
    <tr>`
  });
  global.document.getElementById('empbody').innerHTML = empBody;

  const deletLinks = global.document.getElementsByClassName('deletedEmp');

  Array.from(deletLinks,link => {
    link.onclick=function(event){
      const ele = event.target;
      event.preventDefault();
      deleteEmp(ele.attributes["data-id"].value);
      const row = ele.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  });
});
