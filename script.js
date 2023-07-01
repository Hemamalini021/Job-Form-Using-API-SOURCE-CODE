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
  <div class="col col-details">
    <div class="header">
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
