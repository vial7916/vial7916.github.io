const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 45 fahrenheit outside, so :insertx: decided to stay inside and play video games. An hour into the game, they got hungry so they decided to eat a :inserty:. The food tasted weird so they decided to look down and saw a :insertz: in the food. Victor saw the whole thing, but was not surprised — :insertx: had the worst of luck and something bad was always hapenning to them.';
const insertX = ['Rocco', 'Kelea', 'Veena'];
const insertY = ['bowl of fried rice', 'grilled cheese sandwich', 'cup of ramen'];
const insertZ = ['rat', 'gnat', 'spider'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(':insertx:',xItem);
newStory = newStory.replaceAll(':inserty:',yItem);
newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Victor', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((45-32)* 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('45 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}