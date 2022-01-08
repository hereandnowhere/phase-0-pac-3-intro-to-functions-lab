function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(shout(string))
    return string;
}

function logWhisper(string){
    console.log(whisper(string))
    return string;
}

function sayHiToHeadphonedRoommate(string){
    if (string === whisper(string)){
        console.log("I can\'t hear you!")
        return "I can\'t hear you!";
    } else if (string === shout(string)){
        console.log("YES INDEED!")
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!"){
        console.log("I would love to!")
        return "I would love to!";
    } else {
        console.log("WHAT??")
        return "WHAT??";
    }
}