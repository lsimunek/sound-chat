
function sound(message){
    var the_sound;

    if(message.includes('.mp3')) {
        var re = /[-a-zA-Z0-9@:%_\+.~#?\/=]+\.mp3/i;
        the_sound = message.match(re);
        the_sound = the_sound[0];
        console.log(the_sound);

        var audio = new Audio("../../sounds/" + the_sound);
        audio.play();
    }
}


export default sound;