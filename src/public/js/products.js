console.log("Products frontend javascript file");


// doc.ready syntax foydalanib........
$(function () {
    $(".product-collection").on("change", () => {
      const selectedValue = $(".product-collection").val(); // class => "."
      if (selectedValue === "DRINK") {
        $("#product-collection").hide(); // id => "#"
        $("#product-volume").show();
      } else {
        $("#product-volume").hide();
        $("#product-collection").show();
      }
    });

    $("#process-btn").on("click", () => {
        $(".dish-container").slideToggle(500);
        $("#process-btn").css("display", "none");
      });
    
      $("#cancel-btn").on("click", () => {
        $(".dish-container").slideToggle(100);
        $("#process-btn").css("display", "flex");
      });
});

function validateForm() {
    const productName = $(".product-name").val();
    const productPrice = $(".product-price").val();
    const productLeftCount = $(".product-left-count").val();
    const productCollection = $(".product-collection").val();
    const productDesc = $(".product-desc").val();
    const productStatus = $(".product-status").val();
  
    if (
      productName === "" ||
      productPrice === "" ||
      productLeftCount === "" ||
      productCollection === "" ||
      productDesc === "" ||
      productStatus === ""
    ) {
      alert("Please insert all details!");
      return false;
    } else return true;
  }

  // Img - yuklangan files preview qilish
  function previewFileHandler(input, order) {
    const imgClassName = input.className;
    console.log("input:", input); // frtend-console-input malumotlarni korish mumkin
    // console.log("imgClassName:", imgClassName);

    const file = $(`.${imgClassName}`).get(0).files[0];
    const fileType = file["type"];
    const validImageType = ["image/jpg", "image/jpeg", "image/png"];

    if (!validImageType.includes(fileType)) {
        alert("Please insert only jpeg, jpg and png!");
    } else {
        if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            $(`#image-section-${order}`).attr("src", reader.result);
        };
        reader.readAsDataURL(file);
        }
    }
  }

  
