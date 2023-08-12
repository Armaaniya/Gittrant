//CRUD ---> CREATE, READ, UPDATE AND DELETE.
//For Global Variable Decalartion Space.
 var row=null;
 alert("This is a Message");
//FUNCTION DECLARATION 
function Submit(){
    var dataEntered=retrieveData();
    var readData=readingDataFromLocalStorage(dataEntered);
    if(dataEntered== false){
        msg.innerHTML='<h3 style="color:red">Please Enter Data</h3>';
    }
    else{
    if(row==null){
        insert(readData); 
        msg.innerHTML='<h3 style="color:green">Data Inserted!</h3>'; 
    }
    else{
        Update(); 
        msg.innerHTML='<h3 style="color:yellow">Data Updated! </h3>';
    }
}
document.getElementById("form").reset();
}
//Create
//RETRIEVING DATA FROM FORM.
 function retrieveData(){
    var name=document.getElementById("name").value;
    var job=document.getElementById("job").value;
    var exp=document.getElementById("exp").value;
    var arr=[name,job,exp];
    //Condition for in the form all labels should be fill.
    if(arr.includes("")){
        return false;
    }
    else{
    return arr;
    }
 }
 //READING DATA
 // Data in localStorage 
 function readingDataFromLocalStorage(dataEntered){
    //Storing Data in Local Storage
    var n=localStorage.setItem("Name",dataEntered[0]);
    var j=localStorage.setItem("Job",dataEntered[1]);
    var e=localStorage.setItem("Experience",dataEntered[2]);
 
 //GETTING VALUE FROM THE LOCAL TO THE TABLE;
 var n1=localStorage.getItem("Name",n);
 var j1=localStorage.getItem("Job",j);
 var e1=localStorage.getItem("Experience",e);
 var arr=[n1,j1,e1];
 return arr;
 }
 //Insert Operation 
 function insert(readData){
 var row=table.insertRow(); 
 row.insertCell(0).innerHTML=readData[0];
 row.insertCell(1).innerHTML=readData[1];
 row.insertCell(2).innerHTML=readData[2];
 row.insertCell(3).innerHTML='<button onclick=edit(this)>Edit</button><button onclick=remove(this)>Delete</button>';

 }
 //Edit
 function edit(td){
  row=td.parentElement.parentElement;
 document.getElementById("name").value=row.cells[0].innerHTML;
 document.getElementById("Job").value=row.cells[1].innerHTML;
 document.getElementById("exp").value=row.cells[2].innerHTML;
 }
 //Update
function Update()
{
    row.cells[0].innerHTML=document.getElementById("name").value; 
    row.cells[1].innerHTML=document.getElementById("job").value; 
    row.cells[2].innerHTML=document.getElementById("exp").value; 
    row=null;  
}  
 

 //Delete
 function remove(td){
    var ans= confirm("Are U Sure U want to Delete this record");
    if(ans==true){
    row=td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    }
 }
