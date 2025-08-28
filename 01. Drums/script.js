const removetransiton = (keypressed) => {
      if (keypressed.propertyName !== 'transform') return; //skip if it's not a transform
      keypressed.target.classList.remove('playing');
      console.log(keypressed.target);
    };
    const playsound = (keypressed) => {
      const sounds = document.querySelector(`audio[data-key="${keypressed.keyCode}"]`);
      const keys = document.querySelector(`div[data-key="${keypressed.keyCode}"]`);
      if (!sounds) return; //stop the function from running all together
      sounds.currentTime = 0; //rewind to the start
      sounds.play();
      keys.classList.add('playing');
    };
    window.addEventListener('keydown' , playsound);
    document.querySelectorAll('.key').forEach(key => key.addEventListener('transitionend', removetransiton));

