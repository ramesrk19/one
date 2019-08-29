var
mentorarr = [],
mentorptr = -1,
itr = -1;
technology = `
  <h3>TECHNOLOGIES</h3>
  <p>JAVA</p>
  <p> C </p>
  <p> C# </p>
`,
text = `
               <div class="form-group" id="texts">
                  <label>User Name</label>
                  <input type="text" id="name" placeholder="E-mail ID" required/>
               </div>
               <div class="form-group" id="texts">
                  <label>Password</label>
                  <input type="password" id="password" placeholder="Password" required/>
               </div>
               <div class="form-group" id="texts">
                    <label>LinkedIn URL</label>
                    <input type="url" id="url" placeholder="Profile URL" required/>
               </div>
               <div class="form-group" id="timer">
                  <label>Work timings</label><br>
                  From: <input type="time" id="from" placeholder="Years" required/>
                    To: <input type="time" id="to" placeholder="Years" required/>
               </div>
               <div class="form-group">
                  <label>Mobile number</label><br>
                  <input type="text" id="phn" placeholder="Phone" required/>
                  <button type="button" class="btn btn-secondary" onclick()="">Verify</button>
               </div>
               <div class="form-group" id="texts">
                  <label>Facilities provided ************</label>
                  <!-- <input type="" id="" placeholder="" required/> -->
               </div>
               <div class="form-group" id="texts">
                    <label>Years of experience</label>
                    <input type="number" id="xp" placeholder="Years" required/>
               </div>
               <p id="caption" style="color:red"></p>
               <button type="button" class="btn btn-secondary" onclick="mentorsignup()">Signup</button>
`

function mentorregister(){
   document.getElementById("mentorsign").innerHTML = text;
}

function mentorsignup(){
   let name = document.getElementById("name").value;
   let pass = document.getElementById("password").value;
   let url = document.getElementById("url").value;
   let from = document.getElementById("from").value;
   let to = document.getElementById("to").value;
   let phone = document.getElementById("phn").value;
//  let name = document.getElementById("").value;
   let experience = document.getElementById("xp").value;
   if(name != "" && pass != ""  && url != "" && from != "" && to != "" && phone != "" && experience != "")
   {
      let wrongentry = 0;
      for(let move=0;move<=itr && itr!=-1;move++){
         if(mentorarr[move][0] == name || mentorarr[move][5] == phone) wrongentry++;
      }
      if(wrongentry == 0){
         mentorarr[++itr] = [name, pass, url, from, to, phone, experience];
         document.getElementById("caption").innerHTML = "";
         document.getElementById("mentorsign").innerHTML = "";
      } else document.getElementById("caption").innerHTML = "User already exists!!!";
   }
   else document.getElementById("caption").innerHTML = "Enter details!!!";
}

function mentorlogin(){
   let name = document.getElementById("name").value;
   let pass = document.getElementById("password").value;
   let nomentor = true;
   document.getElementById("name").value = "";
   document.getElementById("password").value = "";
   if((name != "")&&(pass != "")){
      for(let move=0;move<=itr && itr!=-1;move++){
         if(mentorarr[move][0] == name && mentorarr[move][1] == pass){
            nomentor = false;
            document.getElementById("invalidmentor").innerHTML = "";
            // mentorptr = move;
            window.open("Mentormainpage.html", "_blank");
         }
      }
   if(nomentor) document.getElementById("invalidmentor").innerHTML = "Not a registered mentor!!!";
   } else document.getElementById("invalidmentor").innerHTML = "Enter valid details!!!";
}

function ulogin(){
   let name = document.getElementById("uname").value;
   let pass = document.getElementById("upass").value;
   document.getElementById("uname").innerHTML = "";
   document.getElementById("upass").innerHTML = "";
   if((name != "") && (pass != "")){
      document.getElementById("invaliduser").innerHTML = "";
      window.open("Usermainpage.html","_blank");
   } else document.getElementById("invaliduser").innerHTML = "Enter valid details!!!";
}

function search() {
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("find");
   filter = input.value.toUpperCase();
   table = document.getElementById("myTable");
   tr = table.getElementsByTagName("tr");
   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[2];
     if (td) {
       txtValue = td.textContent || td.innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) tr[i].style.display = ""; 
       else tr[i].style.display = "none";
     }       
   }
}
 

 function display() { 
   var my_array = [
     ['Ravi','Spring','10days', `
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
     `, '3'],
     ['Ram', 'NodeJS','8days',`
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     `, '4'],
     ['Jai','ReactJS','10days', `
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     `, '4'],
     ['ghgfh','AngularJS','10days', `
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star "></span>
     <span class="fa fa-star "></span>
     <span class="fa fa-star"></span>
     `, '3'],
     ['Ram', 'mongoDB','2days',`
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     `, '4'],
     ['Jai','HTML & CSS','2days', `
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     `, '4'],
   ];
 
 var data='<table class="table" id="myTable"><thead><tr><td><h3>Trainer</h3></td><td><h3>Trainer Name</h3></td><td><h3>Course</h3></td><td><h3>Time Duration</h3></td><td><h3>Average Rating</h3></td><td><h3>Traings Completed</h3></td><td><h3> </h3></td></tr><tbody>';
 
 for(i=0;i<my_array.length;i++)
 {
   data = data + '<tr><td><img src="user_icon.jpg" width="62" height="62"></td>';
   for(j=0;j<5;j++)
   {
     data = data + '<td>' + my_array[i][j] + '</td>';
   }
   data = data + '<td><button class="btn btn-success" style="width:10em" role="button">Request training</button></td></tr>';
 }
 data = data + '</tbody></table>';
 document.getElementById('printtable').innerHTML = data;  
 }


 function current(){
   var my_array = [
      ['Ravi','Spring', `
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      `,
      `
      <div class="w3-light-grey">
      <div class="w3-container w3-red w3-center" style="width:25%">25%</div>
      </div>
      `],
      ['Ram', 'NodeJS',`
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      `,
      `
      <div class="w3-light-grey">
      <div class="w3-container w3-orange w3-center" style="width:65%">65%</div>
      </div>
      `],
      ['Jai','ReactJS', `
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      `,
      `
      <div class="w3-light-grey">
      <div class="w3-container w3-green w3-center" style="width:95%">95%</div>
      </div>
      `]
    ];
    var data=`<table class="table table-condensed" id="myTable"><thead><tr>
    <td><h3>Trainer</h3></td>
    <td><h3>Trainer Name</h3></td>
    <td><h3>Course</h3></td>
    <td><h3>Average Rating</h3></td>
    <td><h3>Progress level</h3></td>
    </tr></thead><tbody>`;
 
 for(i=0;i<my_array.length;i++)
 {
   data = data + '<tr><td><img src="user_icon.jpg" width="62" height="62"></td>';
   for(j=0;j<my_array[0].length;j++)
   {
     data = data + '<td>' + my_array[i][j] + '</td>';
   }
 }
 data = data + '</tbody></table>';
 document.getElementById('printtable').innerHTML = data;  
 }


 function completed(){
   var my_array = [
      ['Vikram', 'NodeJS',`
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      `,
      `
      <div class="w3-light-grey">
      <div class="w3-container w3-green w3-center" style="width:100%">100%</div>
      </div>
      `],
      ['Jeeva','ReactJS', `
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      `,
      `
      <div class="w3-light-grey">
      <div class="w3-container w3-green w3-center" style="width:100%">100%</div>
      </div>
      `]
    ];
    var data=`<table class="table table-condensed" id="myTable"><thead><tr>
    <td><h3>Trainer</h3></td>
    <td><h3>Trainer Name</h3></td>
    <td><h3>Course</h3></td>
    <td><h3>Average Rating</h3></td>
    <td><h3>Progress level</h3></td>
    </tr></thead><tbody>`;
 
 for(i=0;i<my_array.length;i++)
 {
   data = data + '<tr><td><img src="user_icon.jpg" width="62" height="62"></td>';
   for(j=0;j<my_array[0].length;j++)
   {
     data = data + '<td>' + my_array[i][j] + '</td>';
   }
 }
 data = data + '</tbody></table>';
 document.getElementById('printtable').innerHTML = data;   
 }

 function gototrainers(){
   window.open("Usermainpage.html", "_blank");
 }


 function about(){
   var print = `
   <table class="table">
        <h4>Edit skills </h4>
        <tr>
          <th>Name:</th>
          <td><input type="text" placeholder="K.Rameshkumar"></td>
        </tr>
        <tr>
          <th>Username:</th>
          <td><input type="text" placeholder="ramesr_rk"></td>
        </tr>
        <tr>
          <th>Contact:</th>
          <td><input type="text" placeholder="9710082187"></td>
        </tr>
        <tr>
          <th>Experience:</th>
          <td><input type="text" placeholder="3 years"></td>
        </tr>
        <tr>
          <th>Skills:</th>
          <td><input type="text" style="width:65%" placeholder="C/Java/Angular/Spring/AWS/JQuery"></td>
        </tr>
        <tr><td></td><td></td></tr>
      </table>
   `;
   document.getElementById("mentormainprint").innerHTML = print;
 }

 function payments(){
   var print = `
   <table class="table">
   <h4>Payments </h4>
        <tr>
          <th>Rating</th>
          <td>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
          </td>
        </tr>
        <tr>
          <th>Experience</th>
          <td>3 years</td>
        </tr>
        <tr>
          <th>Amount received</th>
          <td>
            JAVA
            <div class="w3-light-grey">
                <div class="w3-container w3-green w3-center" style="width:75%">75%</div>
            </div>
            SQL
            <div class="w3-light-grey">
              <div class="w3-container w3-orange w3-center" style="width:50%">50%</div>
            </div>
          </td>
        </tr>
        <tr>
          <th>Amount remaining</th>
          <td>
            JAVA
            <div class="w3-light-grey">
              <div class="w3-container w3-red w3-center" style="width:25%">25%</div>
            </div>
            SQL
            <div class="w3-light-grey">
              <div class="w3-container w3-orange w3-center" style="width:50%">50%</div>
            </div>
          </td>
        </tr>
        <tr>
        <td><button type="button" class="btn btn-primary">Withdraw amount</button></td><td></td>
        </tr>

      </table>
   `
   document.getElementById("mentormainprint").innerHTML = print;
 }

 function mentorcompleted(){
   var print = `
   <table class="table">
        <h4>Completed trainings</h4>
        <tr>
          <th>Spring</th>
          <td>
            <div class="w3-light-grey">
                <div class="w3-container w3-green w3-center" style="width:100%">100%</div>
            </div>
          </td>
        </tr>
        <tr>
          <th>Angular</th>
          <td>
            <div class="w3-light-grey">
                <div class="w3-container w3-green w3-center" style="width:100%">100%</div>
            </div>
          </td>
        </tr>
        <tr>
          <th>JQuery</th>
          <td>
            <div class="w3-light-grey">
                <div class="w3-container w3-green w3-center" style="width:100%">100%</div>
            </div>
          </td>
        </tr>
        <tr>
          <th>AWS</th>
          <td>
            <div class="w3-light-grey">
                <div class="w3-container w3-green w3-center" style="width:100%">100%</div>
            </div>
          </td>
        </tr>
      </table>
   `;
   document.getElementById("mentormainprint").innerHTML = print;
 }

 function mentorcurrent(){
   var print = `
   <table class="table">
          <h4>Current trainings</h4>
          <tr>
            <th>JAVA</th>
            <td>
              <div class="w3-light-grey">
                  <div class="w3-container w3-green w3-center" style="width:70%">70%</div>
              </div>
            </td>
          </tr>
          <tr>
            <th>SQL</th>
            <td>
              <div class="w3-light-grey">
                  <div class="w3-container w3-green w3-center" style="width:60%">60%</div>
              </div>
            </td>
          </tr>
        </table>
   `;
   document.getElementById("mentormainprint").innerHTML = print;
 }

 function adminlogin(){
   if((document.getElementById("adminname").value=="Admin")&&(document.getElementById("adminpassword").value=="Admin"))
   {
    document.getElementById("invalidadmin").innerHTML = "";
    window.open("Adminmainpage.html", "_blank");
   }
   else document.getElementById("invalidadmin").innerHTML = "Enter valid details!!!";
 }

 function tech(){
   var print=`
  <table ><tr>
    <td style="padding-right:50px"><input type="text" id="adder" class="form-control" placeholder="Add technology" ></td>
    <td style="padding-right:50px"><input type="text" id="minus" class="form-control" placeholder="Delete technology" ></td>
    <td><button class="btn btn-primary onclick="adddelete()">Apply</button></td>
  </tr></table>`;
  document.getElementById("adminmainprint").innerHTML = print+technology;
  
 }

// function adddelete(){
// }

 function editt(){
  var my_array = [
    ['Ravi','Spring', `
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    `],
    ['Ram', 'NodeJS',`
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    `],
    ['Jai','ReactJS', `
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    `],
    ['ghgfh','AngularJS', `
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star "></span>
    <span class="fa fa-star "></span>
    <span class="fa fa-star"></span>
    `]
  ];

var data='<table class="table"><thead><tr><td><h3>Trainer</h3></td><td><h3>Trainer Name</h3></td><td><h3>Course</h3></td><td><h3>Average Rating</h3></td><td><h3> </h3></td></tr><tbody>';

for(i=0;i<my_array.length;i++)
{
  data = data + '<tr><td><img src="user_icon.jpg" width="62" height="62"></td>';
  for(j=0;j<my_array[0].length;j++)
  {
    data = data + '<td>' + my_array[i][j] + '</td>';
  }
  data = data + '<td><button class="btn btn-danger" style="width:10em" role="button">BLOCK </button></td></tr>';
}
data = data + '</tbody></table>';

var user_array = [
  ['ABC','Spring'],
  ['def', 'NodeJS'],
  ['ghi','ReactJS'],
  ['xyZ','AngularJS']
];

var datum='<table class="table"><thead><tr><td><h3>User</h3></td><td><h3>User Name</h3></td><td><h3>Course</h3></td><td><h3> </h3></td></tr><tbody>';

for(i=0;i<user_array.length;i++)
{
  datum = datum + '<tr><td><img src="user_icon.jpg" width="62" height="62"></td>';
for(j=0;j<user_array[0].length;j++)
{
  datum = datum + '<td>' + user_array[i][j] + '</td>';
}
datum = datum + '<td><button class="btn btn-danger" style="width:10em" role="button">BLOCK </button></td></tr>';
}
datum = datum + '</tbody></table>';

document.getElementById('adminmainprint').innerHTML = data+datum;  
 }

 function report(){

 }