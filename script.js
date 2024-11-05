const loadFile = function(event) {
    const image = document.getElementById('profile-img');
    image.src = URL.createObjectURL(event.target.files[0]);
  };