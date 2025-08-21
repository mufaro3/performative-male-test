const questions = [
    // Matcha/Coffee
    "Ordered a matcha latte?",
    "Ordered a matcha latte and posted it to your story?",
    "Dislike taste of matcha but continue to buy matcha lattes?",
    "Only order oat milk/soy milk/other alternatives as creamer?",
    "Regularly purchase Crumbl cookies?",
    
    // Books
    "Own any Sally Rooney novels?",
    "Own several Sally Rooney novels, but have only gotten through Normal People (at best)?",
    "Owned more books than you've read\, period?",
    "Own a copy of Infinite Jest that you haven't read?",
    "Own a copy of The Bell Jar?",
    "Read in public at any time this week?",
    "Posted your annotated copy of a novel to IG?",
    "The Catcher in the Rye is one of your favorite novels of all time?",
    "Lolita is one of your favorite novels of all time?",
    
    // Music
    "Own a record player or a cd player?",
    "Own any Laufey records/CDs?",
    "Own any Lana del Rey records/CDs?",
    "Own any beabadoobee records/CDs?",
    "Own any Clairo records/CDs?",
    "Own any Olivia Rodrigo records/CDs?",
    "Own any PinkPantheress records/CDs?",
    "Own any Sabrina Carpenter records/CDs?",
    "Own any Mitski records/CDs",
    "In the Spotify 1\% of listeners for any of the above?",
    "Most listened-to song of the last year was one of the above artists?",
    "Corrected someone by saying \"It's LAY-VEY not LAW-FEY\"?",
    "Made a playlist titled with just an emoji?",
    "Shared Lana Del Rey lyrics without irony?",
    
    // Movies
    "Have a LetterBoxd account?",
    "Posted any actual reviews to LetterBoxd?",
    "Posted your movies reviews to your Instagram story on top of LetterBoxd?",
    "Watched K-Pop Demon hunters?",
    "Religiously watch Greta Gerwig films?",
    "Religiously watch Sofia Coppola films?",
    "Timothee Chalamet is one of your favorite actors?",
    
    // Fashion
    "Wear baggy pants regularly?",
    "Own jean shorts (jhorts)?",
    "Own more than one pair of jhorts?",
    "Own cloth a tote bag?",
    "Bring your tote bag out in public anywhere but the store?",
    "Have the Kurtis Conner cut or a middle part?",
    "Have any tattoos?",
    "Wear wired headphones/earbuds?",
    "Own 3 or more beanies?",
    "Wore tiny silver rings on every finger?",
    "Own anything by Doc Marten?",
    "Regularly wear Oxfords?",
    "Regularly wear Chuck Taylors?",
    "Have at least one ear piercing but no other piercings?",
    
    // Labubu
    "Own a labubu?",
    "Keep your labubu chained to your waist?",
    "Keep your keychain on your belt rather than in your pocket or around your neck?",
    
    // performative feminism
    "Self-identify as (and exclaim yourself to be) a feminist but find sexist jokes hilarious in private?",
    "Keep any feminist literature books out on display in your room/apartment?",
    "Had a conversation about any feminist literature in a non-academic context?",
    
    // Photography
    "Posted blurry photos from a disposable camera app?",
    "Had a film or photography camera you barely knew how to use?",
    "Own (and regularly use) a camcorder or digital camera in 2025?",
    
    // Dating
    "Said you \"don't\" believe in labels\" when dating?",
    "Told someone you're \"bad at texting\" but always online?",
    "Said \"I want to build a world with someone\" then disappeared?",
    "Regularly leave people on read?",
    "Used \"soft launch\" and \"situationship\" unironically?",
    "Sent someone a poem with no context?",
    "Used the phrase 'emotional availability' without offering it?",
    "Described a girl as \"ethereal\" after meeting her once?",
    "Wrote a breakup playlist with cover art and mood tags?",
    "Said \"I'm emotionally literate\" then ghosted someone?",
    "Had a therapist and called it \"the best relationship I've had\"?",
    "Told someone \"my love language is curated playlists\" OR \"my love language is physical touch\"?",
    "Told someone \"I'm not like the other guys\" without saying it?",
    "Said \"I think romance lives in small moments\"?",
    
    // Statements/Misc
    "Bragged about going to therapy?",
    "Told someone you were \"too self-aware for your own good\"?",    
    "Used lowercase exclusively in texts and bios?",
    "Described yourself as \"chronically online\" with pride?",
    "Told someone \"I'm just not built for capitalism\" during a burnout?",
    "Said \"men don't talk about their feelings enough\" and then didn't?",
    "Have a substack or a blog?",
    "Have a VSCO or MySpace?",
    "Started journaling and immediately posted about it?",
    "Posted a crying selfie and deleted it five minutes later?",
    "Still use BeReal in 2025?",
    "Had opinions about font aesthetics?",
    "Posted a cryptic story of the moon before?",

    // Cooking/Homemaking
    "Owned more candles than plates?",
    "Own incense and burn it regularly?",
    "Bake for fun?",
    "Own an Air Fryer?",

    // Videogames
    "Only play Roblox for fun despite being over the age of 16?",
    "Have Dress to Impress VIP?",
];

function main() {
    const ol = document.getElementById('questions-list');

    questions.forEach((question, index) => {
        const li = document.createElement('li');

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = (index + 1).toString();

        const label = document.createElement('label');
        label.setAttribute('for', input.id);
        label.textContent = question;

        li.appendChild(input);
        li.appendChild(label);
        ol.appendChild(li);
    });
}

function calculate_score() {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const purity = checked / questions.length;

    // Store score in session and redirect
    sessionStorage.setItem("score", purity);
    window.location.href = `score.html?score=${purity}`;
}

function reset() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
}

window.addEventListener('load', main);
document.getElementById('submit').addEventListener('click', calculate_score);
document.getElementById('reset').addEventListener('click', reset);
