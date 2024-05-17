document.addEventListener("DOMContentLoaded", function() {
    var fileInput = document.getElementById("fileInput");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
  
    fileInput.addEventListener("change", function(event) {
      var file = event.target.files[0];
      var reader = new FileReader();
  
      reader.onload = function() {
        var img = new Image();
        img.onload = function() {
          // Set canvas dimensions to match the image
          canvas.width = img.width;
          canvas.height = img.height;
  
          // Draw the image on the canvas
          ctx.drawImage(img, 0, 0);
  
          // Increase brightness
          var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          for (var i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] += 50; // Increase the red channel
            imageData.data[i + 1] += 50; // Increase the green channel
            imageData.data[i + 2] += 50; // Increase the blue channel
          }
          ctx.putImageData(imageData, 0, 0);
        };
        img.src = reader.result;
      };
  
      reader.readAsDataURL(file);
    });
  });
  