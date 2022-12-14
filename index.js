const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");

window.addEventListener("scroll", () => {
    skillsEffect();
    
  });

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
  }


 function sendMail(){
  var tempParams={
    from_name:document.getElementById("First_Name").value,
    contact:document.getElementById("Contact_NO").value,
    email:document.getElementById("Email").value,
    message:document.getElementById("Message").value,
  };

  emailjs.send('gmail','template_rl5yi38',tempParams)
  .then(function(res){
    alert("Sent Successfully!",res.status);
  })
 } 

  
  