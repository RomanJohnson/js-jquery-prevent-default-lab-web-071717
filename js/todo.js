$(document).ready(function(){
  // call functions here
  submitForm()
});

// define functions here
function submitForm(){
  $('#formID').on('submit', (e)=>{
    e.preventDefault();
    let input = $("#item").val()
    // console.log(input)
    $('#list ol')[0].innerHTML += `<li>${input}</li>`
  })
}
