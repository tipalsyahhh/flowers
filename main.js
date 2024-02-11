onload = () => {
        document.body.classList.remove("container");
};

document.getElementById('loveButton').addEventListener('click', function () {

        document.querySelector('.flowers').style.display = 'block';

        document.querySelector('.pertama').style.display = 'none';

        var audio = document.getElementById('backgroundMusic');
        audio.play();
});
