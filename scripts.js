const questions = [
  "Ordered a matcha latte and posted it to your story?",
  "Read Sally Rooney and said 'I just really saw myself in him'?",
  "Wore tiny silver rings on every finger?",
  "Made a playlist titled with just an emoji?",
  "Owned more books than you’ve read?",
  "Posted blurry photos from a disposable camera app?",
  "Described yourself as 'chronically online' with pride?",
  "Said 'this album saved me' about a Phoebe Bridgers release?",
  "Told someone you were ‘too self-aware for your own good’?",
  "Said you ‘don’t believe in labels’ when dating?",
  "Used lowercase exclusively in texts and bios?",
  "Told someone 'I’m just not built for capitalism' during a burnout?",
  "Talked about therapy in a way that felt... performative?",
  "Had a film camera you barely knew how to use?",
  "Posted your annotated copy of a novel to IG?",
  "Told someone you’re ‘bad at texting’ but always online?",
  "Owned more candles than plates?",
  "Wore wireframe glasses without prescription lenses?",
  "Said ‘I feel safest in music’ on a dating app?",
  "Told someone your rising sign on the first date?",
  "Used the phrase 'emotional availability' without offering it?",
  "Posted a crying selfie and deleted it five minutes later?",
  "Described a girl as ‘ethereal’ after meeting her once?",
  "Referred to your apartment as 'a little sad but vibey'?",
  "Bought tote bags from indie bookstores you've never visited?",
  "Said ‘men don’t talk about their feelings enough’ and then didn’t?",
  "Wrote a long caption about a leaf you saw that one time?",
  "Listened to Mitski alone in your room in the dark?",
  "Posted about being heartbroken without naming anyone?",
  "Had a copy of 'Norwegian Wood' visible in your room on purpose?",
  "Said 'I'm just in my healing era' while causing chaos?",
  "Sent someone a poem with no context?",
  "Said ‘I think love is just sustained attention’ in a text?",
  "Started journaling and immediately posted about it?",
  "Described yourself as ‘a little too much sometimes’?",
  "Bought crystals you don't believe in because they looked nice?",
  "Explained your chart while holding someone’s hand?",
  "Said ‘I romanticize my sadness’ like it was deep?",
  "Talked about The 1975 like they’re philosophers?",
  "Made eye contact in a mirror and thought ‘this is cinematic’?",
  "Told someone your heartbreak was ‘a form of art’?",
  "Wrote poetry in your Notes app and called it a zine?",
  "Started a Substack just to overthink in public?",
  "Owned incense for the smell of 'being alone with thoughts'?",
  "Had an opinion about men's hands being overlooked?",
  "Used 'soft launch' and 'situationship' unironically?",
  "Drank wine alone and posted it like it was a revolution?",
  "Shared a screenshot of your BeReal because it ‘looked raw’?",
  "Told someone you're ‘trying to live with intention’?",
  "Wrote a breakup playlist with cover art and mood tags?",
  "Said ‘I’m emotionally literate’ then ghosted someone?",
  "Had a therapist and called it ‘the best relationship I’ve had’?",
  "Described your mood as ‘fog on a Tuesday’?",
  "Referred to someone as 'a main character' and meant it?",
  "Shared Lana Del Rey lyrics without irony?",
  "Owned a mug that says something like ‘sad but cute’?",
  "Told someone ‘my love language is curated playlists’?",
  "Made a dating app bio that says ‘Let’s talk about art’?",
  "Told someone ‘I’m not like the other guys’ without saying it?",
  "Said you feel nostalgic for moments while they're happening?",
  "Made a short film and called it ‘a study in intimacy’?",
  "Cried to Frank Ocean and felt profound about it?",
  "Told someone you ‘missed them in a conceptual way’?",
  "Posted a screenshot of a text you didn’t send?",
  "Said 'I think my brain was made for melancholy'?",
  "Described your favorite season as ‘interiority’?",
  "Said ‘I think silence is its own language’ after a pause?",
  "Referred to someone as a 'muse' in a lowercase caption?",
  "Wrote a love letter and never gave it to them?",
  "Talked about making eye contact with a stranger like it was fate?",
  "Described being alone as 'deep work'?",
  "Told someone you only fall in love through letters?",
  "Said 'music is how I process' to avoid a hard convo?",
  "Had opinions about font aesthetics?",
  "Used 'liminal' in a sentence without cringing?",
  "Made a vision board and called it ‘emotional cartography’?",
  "Said ‘I think vulnerability is resistance’ on a podcast?",
  "Shared a photo of your bookshelf with no caption?",
  "Described a text convo as ‘cinematic tension’?",
  "Told someone your art is ‘about longing’?",
  "Referred to past relationships as ‘unfinished poems’?",
  "Wrote a song with no chorus ‘on purpose’?",
  "Posted a story of the moon and called it 'you'?",
  "Said ‘I think romance lives in small moments’?",
  "Called your ex ‘an unsent message’?",
  "Started learning French for 'vibe' reasons?",
  "Said you’re ‘not a minimalist, just exhausted’?",
  "Described your room as a ‘safe emotional container’?",
  "Called journaling ‘a conversation with your shadow self’?",
  "Compared someone to a memory and called it a compliment?",
  "Used the term ‘emotional architecture’ in a conversation?",
  "Wrote a love note and left it in a library book?",
  "Had a quote from a book as your lock screen?",
  "Talked about 'curating experiences' instead of making plans?",
  "Referred to your anxiety as ‘a creative constraint’?",
  "Told someone they ‘feel like a blurry song from 2013’?",
  "Shared a Spotify Wrapped slide as a form of personality?",
  "Referred to yourself as ‘a liminal man’ jokingly (but not really)?",
  "Described your ex as a season you haven’t left yet?",
  "Called silence between two people ‘a kind of intimacy’?",
  "Said ‘I want to be known, not just seen’?",
  "Claimed to romanticize your life but still flake on plans?",
  "Used ellipses as a way to show emotional depth?",
  "Said you miss someone without ever telling them directly?",
  "Described your friendships as ‘chosen family’?",
  "Said ‘I want to build a world with someone’ then disappeared?"
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
