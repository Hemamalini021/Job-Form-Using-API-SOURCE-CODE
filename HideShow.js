
var Next = document.querySelector("#button");
var submit = document.getElementById("submit")
Next.addEventListener("click",function(){
    makevisible()
})
function makevisible(){
    var form1 = document.getElementById("show")
    form1.style.display="none"
    var form2 = document.getElementById("hide")
    form2.style.display="block"
    
    submit.style.display="block"
    Next.style.display="none"
    
   

}


submit.addEventListener("click",function(){
    makeJobvisible()
})
function makeJobvisible(){
    var form1 = document.getElementById("show");
    form1.style.display="none";
    var form2 = document.getElementById("hide");
    form2.style.display="none";
    var submit = document.getElementById("submit");
    submit.style.display="none";
    Next.style.display="none";
     document.getElementById("hideheader").style.display='none';
     $("#exampleModalCenter").modal('toggle')
      
      document.getElementById("Jobcard").style.display="block"

      document.getElementById("launchbtn").style.display="none";



}

function Visible(){
const apiData = fetch(
    "https://63f70477e40e087c9585e783.mockapi.io/jd/api/submit_data"
  )
    .then((response) => response.json())
    .then((data) => {
      function displayFrame() {
        const frameElement = document.querySelector(".frame");
        data.forEach((value, index, arr) => {
          const header = arr[index].jobTitle.toUpperCase();
          const html = `   <div class="container">
  <div class="row">
    <div class="col">
      <div class="frame-img">
      <img src="Images/Netflix.png" class="img-size" alt="" />
      </div>
    </div>
    <div class="col">
      <div class="header" >
        <h5 class="topic"><b> ${header}</b></h5>
        <h6>Great vibes-Information technology</h6>
        <h6 class="location">Chennai, Tamilnadu, India(In-Office)</h6>
        <div class="info">
     
          <p>company: ${arr[index].company}</p>
          <p>Industry: ${arr[index].industry}</p>
          <p>Location: ${arr[index].location}</p>
          <p>RemoteType: ${arr[index].remoteType}</p>
          <p>MinExperience: ${arr[index].expMax}</p>
          <p>MaxExperience: ${arr[index].expMin}</p>
          <p>MinSalary: ${arr[index].salMin}</p>
          <p>MaxSalary: ${arr[index].salMax}</p>
          <p>ID: ${arr[index].id}</p>
        
        </div>
      </div>
      <button type="button" class="btn btn-primary btn-apply">Apply Now</button>
      <button type="button" class="btn btn-outline-primary btn-external">External Apply</button>
  
    </div>
  </div>
  </div>`;
          frameElement.innerHTML += html;
        });
      }
      displayFrame();
    });
}



    function Jsoncon(){
        var formdata = {
            jobTitle :document.querySelector("#buy1").value,
            Company :document.querySelector("#buy2").value,
            industry :document.querySelector("#buy3").value,
            location :document.querySelector("#buy4").value,
            Remote :document.querySelector("#buy5").value,
            Minexp :document.querySelector("#Min1").value,
            Maxexp:document.querySelector("#flexwidth").value,
            Minsal :document.querySelector("#Min2").value,
            Maxsal :document.querySelector("#flexwidth1").value,
            Totalemp :document.querySelector("#buy6").value,
          //  ApplyType :document.querySelector('input[class="radioinput"]:checked').value

            
          
        }
        var Jsondata = JSON.stringify(formdata)
        console.log(Jsondata)
    }


    