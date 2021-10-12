const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const price = document.getElementById('price');
// const occupiedSeats = document.querySelectorAll('.row .occupied');
// const occupiedIndex = [];
  
const movieSelect = document.getElementById('movie');
// let ticketPrice = +movieSelect.value;



const populateUI = () => {

  const selectedSeats = localStorage.getItem(localStorage.getItem("loggedInUser")+'.seat.' + movieSelect.selectedIndex);
  const occupiedSeats = localStorage.getItem('occupied.' + movieSelect.selectedIndex);
  if (selectedSeats !== null && selectedSeats.length > 0)
   {
     seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) 
      {
        seat.classList.add('selected');
      }
      
    });
  }

  // if (occupiedSeats !== null && occupiedSeats.length > 0)
  //  {
  //    seats.forEach((seat, index) => {
     
  //     if (occupiedSeats.indexOf(index) > -1) 
  //     {
  //       seat.classList.add('occupied');
  //     }
  //   });
  //   
  // }

 
  const selectedMoviePrice = localStorage.getItem(localStorage.getItem("loggedInUser")+'.price.' + movieSelect.selectedIndex);

  if (selectedMoviePrice !== null) {
    count.innerText = selectedSeats.length;
    price.innerText = selectedSeats.length * selectedMoviePrice;
  }
};

populateUI();

selectedMovie = (movieIndex, moviePrice) => {

  localStorage.setItem(localStorage.getItem("loggedInUser")+'.movie.' + movieIndex, movieSelect.text);
  localStorage.setItem(localStorage.getItem("loggedInUser")+'.price.' + movieIndex, moviePrice);
  
};

const updateSelectedSeatsCount = () => {
  const selectedSeats = document.querySelectorAll('.row .selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem(localStorage.getItem("loggedInUser")+'.seat.' + movieSelect.selectedIndex, JSON.stringify(seatsIndex));
  
  // localStorage.setItem('occupied.' + movieSelect.selectedIndex, JSON.stringify(occupiedIndex.concat(seatsIndex)));
  const selectedSeatsCount = selectedSeats.length;
 
  count.innerText = selectedSeatsCount;
  price.innerText = selectedSeatsCount * movieSelect.value;
};

// Seat select event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) 
  {
    e.target.classList.toggle('selected');
    localStorage.setItem(localStorage.getItem("loggedInUser")+'.movie.' +  movieSelect.selectedIndex, movieSelect[movieSelect.selectedIndex].text);
    localStorage.setItem(localStorage.getItem("loggedInUser")+'.price.' +  movieSelect.selectedIndex, movieSelect[movieSelect.selectedIndex].value);
    updateSelectedSeatsCount();
  }
});

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  selectedMovie(e.target.selectedIndex, e.target.value);

  updateSelectedSeatsCount();
});


function confirmseats() {

    {				         
                 alert('Thank You!  You have Booked your Tickets');
           // Redirecting to other page or webste code. 
           window.location = "http://127.0.0.1:5501/index.html"; 
      }
}
