const athlete1Name = 'Nala'; 
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

const getTrainingDays = event => {
let days;
  if (event === 'Marathon') {
    days= 50;
  } else if (event === 'Triathlon') {
    days = 75
  } else if (event === 'Pentathlon') {
  days = 100
  }

  return days;
};


const logEvent = (name, event) => {
  
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  
  console.log(`${name}'s time to train is: ${days} days`);
};

const nalaEvent = getRandEvent();
const days = getTrainingDays(nalaEvent);
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
const event3 = getRandEvent();
const days3 = getTrainingDays(event3);
const name3 = 'Chris';
const event4 = getRandEvent();
const days4 = getTrainingDays(event4);
const name4 = 'Steve';
logEvent(name2, event2);
logTime(name2, days2);
logEvent(name3, event3);
logTime(name3, days3);
logEvent(name4, event4);
logTime(name4, days4);


logEvent(athlete1Name, nalaEvent);
logTime(athlete1Name, days);


