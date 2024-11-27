let list=[
    ' It takes courage to grow up and become who you really are. — E.E. Cummings' ,
   ' "Your self-worth is determined by you. You dont have to depend on someone telling you who you are." — Beyoncé',
    ' "Nothing is impossible. The word itself says Im possible! — Audrey Hepburn',
     ' "Keep your face always toward the sunshine, and shadows will fall behind you." — Walt Whitman',
      ' “You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. Youre on your own. And you know what you know. And you are the guy wholl decide where to go." — Dr. Seuss ',
      ' "Attitude is a little thing that makes a big difference." — Winston Churchill',
      ' "To bring about change, you must not be afraid to take the first step. We will fail when we fail to try." — Rosa Parks',
      ' "All our dreams can come true, if we have the courage to pursue them." — Walt Disney',
]


let index = Math.floor( Math.random()*7);

let myquote = document.getElementById('quote');
myquote.innerText = list[index];