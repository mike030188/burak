console.log("Signup frontend javascript file");


// $(function() {
// $(".member-nick").click(function() {
//     $(".member-phoe").toogle();
// })
// }); 

/*** preloading image files ***/
$(function () {
  const fileTarget = $(".file-box .upload-hidden");
  let filename;

  fileTarget.on("change", function () {
    if (window.FileReader) {
      const uploadFile = $(this)[0].files[0],
       fileType = uploadFile["type"],
       validImageType = ["image/jpg", "image/jpeg", "image/png"];
      if (!validImageType.includes(fileType)) {
        alert("Please insert only jpeg, jpg and png!");
      } else {
        if (uploadFile) {
          console.log(URL.createObjectURL(uploadFile)); // creating blob file
          $(".upload-img-frame")
            .attr("src", URL.createObjectURL(uploadFile))
            .addClass("success");
        }
        filename = $(this)[0].files[0].name;
      }
      $(this).siblings(".upload-name").val(filename);
    }
  });
});

function validateSignupForm() {
    // console.log("EXECUTED validateSignupForm");

    const memberNick = $(".member-nick").val(), // "class" =>".", "id"=> "#"
    // console.log("memberNick:", memberNick);
     memberPhone = $(".member-phone").val(),
     memberPassword = $(".member-password").val(),
     confirmPassword = $(".confirm-password").val();

    if (
        memberNick === "" ||
        memberPhone === "" ||
        memberPassword === "" ||
        confirmPassword === ""
      ) {
        alert("Please insert all required inputs!");
        return false;
      }
    
      if (memberPassword !== confirmPassword) {
        alert("Password differs, please check!");
        
        return false; // BackEndga otkazmay turadi
      }

      const memberImage = $(".member-image").get(0).files[0].name
      ? $(".member-image").get(0).files[0].name
      : null;
      if (!memberImage) {
        alert("Please insert restaurant image!");
        return false;
      }


}