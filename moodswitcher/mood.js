const moodDisplay = document.querySelector("#moodDisplay");

const moods = {
    happy:  { 
        bg: '#dd3e16', 
        text: '#2c91e4', 
        message: 'Warm smiles and the sun’s kisses!' 
    },

    calm: {
        bg: '#88c9f9',
        text: '#063970',
        message: 'Deep breaths. Peaceful waters ahead.'
    },

    excited: {
        bg: '#ffea00',
        text: '#b30000',
        message: 'Energy! Movement! Let’s go!'
    },

    chill: {
        bg: '#b2f7ef',
        text: '#0a3c3d',
        message: 'Cool vibes only. Relax and flow.'
    },

    mysterious: {
        bg: '#1a1a2e',
        text: '#e94560',
        message: 'The unknown awaits...'
    }
};

document.addEventListener("click", handleMoodClick);

function handleMoodClick(MoodChoice) {

    function handleMoodClick(MoodChoice) {
const mood = MoodChoice.target.getAttribute('data-mood');
 const moodSettings = moods[mood];

 document.body.style.backgroundColor = moodSettings.bg;
  document.body.style.color = moodSettings.text;

   moodDisplay.textContent = moodSettings.message;
    }
}