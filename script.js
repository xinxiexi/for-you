const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const heart = document.querySelector(".heart");
const messageBox = document.querySelector(".message-box");
const overlay = document.querySelector(".overlay");
const moreBtn = document.querySelector(".more-btn");

let viewCount = 1;
let opacity = 1;
let messageIndex = 0;

const messages = [
    "Hey. This is gonna be a long message so I hope you can take the time to read all of these. Nahihiya akong i-send directly sa 'yo, so I just used coding para sabihin lahat ng nais kong sabihin. It took me so long to gather the courage to do this. I was thinking na huwag na lang siguro but I think you deserve at least an explanation. And finally, the words are coming together and now, I fully understand what I truly feel.",
    
    "I've always defined love as the \"fear of losing someone.\" And… I thought I'd be fine without you—because I was before—or that I'd be okay even if we weren't talking. But this week, I've realized just how wrong I was. At first, I could push it aside, convince myself I could deal with it. But as the days went by, I started to feel so lost, so incomplete. I've grown attached, maybe a little too much… Now, I feel like I'll never be okay if we're not okay. I want to message you but I feel weak. I can't catch myself genuinely smiling. It feels hollow, like there's something missing. Or maybe it's just me—missing you.",
    
    "I tried so hard to distract myself, to ignore the feeling. Sinubukan ko lahat. I watched movies, played different games, started tailoring, drawing, writing, and more, just to keep my mind away from you. But everything keeps coming back to you. I watched a movie, and I was like, \"I want to talk about this with him.\" But then I realized, hindi nga pala tayo okay. I played a game, and I was like, \"I want to invite him.\" Life feels too boring without you. I can't escape you. You've become a part of me, and I can't imagine myself going through a day without you. I always wonder how you're doing.. If you're okay, or what you're thinking about. Natatawa na lang ako sa sarili ko, because looking back, it felt like a responsibility. But now? You're like a medicine I need just to feel whole. OA but it's the truth.",
    
    "After days of trying to make sense of all of this, I finally understand that I don't want you out of my life. Romantic or platonic, it doesn't matter; I just want you to be here constantly. I want you to be a constant thing in my life. Lahat na ng possibilities, inisip ko… All those futures in my head… And none of them feel right if you're not part of them. I tried to imagine myself being with someone else and it just feels wrong. Kasi feel ko, everything would just remind me of you. I could never forget, especially if it's something or someone special. And that's the thing—I'm realizing just how deeply I care. Am I too late now?",
    
    "And I know… I know I can be hard to love. Kahit sarili ko hindi ko maunawaan. Masyado na yatang malala trust issues ko. I question everything, even the things you say that I want to believe so badly. Somewhere inside me, natatakot that all the words you said are lies, and I'll be one left holding onto those empty promises. Believe me, gusto kong ibigay ang buong tiwala sa 'yo but it's just… hard. I know I'm being unfair and I'm really sorry.",
    
    "I'm really sorry. Instead of communicating, I'm always being silent. Is this the fourth time? I'm really sorry. I keep saying sorry, I keep saying promises and I couldn't even keep them. I wish I could say it wasn't intentional, but I needed the space to figure this out, to be sure of what I'm feeling. I'm sorry for being like this. I'm sorry for being a mess. And I'm most sorry for dragging you into my mess. But what about you? What about what I've put you through? Alam kong marami ka ring binubuhat, tapos dumagdag pa ako. I'm sorry for being selfish. You deserve so much more than the mess I bring. But somehow, I keep hoping that maybe, I'll be worth the trouble.",
    
    "The thought of celebrating my birthday without you hurts. Ayokong mag-isa. I want to celebrate this with you. Kahit for the last time, if you want to stay, even for a moment. Please. Kahit ngayon na lang… kahit last na 'to. I want you to decide. I know I already asked you the same question but here I go, again… I want you to make the choice that feels right for you, even if it means walking away. Maybe nga, I'm not good for you. I'm just causing you too much trouble. So choose, if you want us to keep going and figure out all of these together or if you want to finally leave and choose yourself. I'll understand. I want you to be happy, even if kailangan kitang pakawalan. Sometimes I think that maybe your life would be better if I'd never stepped into it. Maybe you'd be with someone who could love you fully, without all this confusion and fear. Sorry ha, emotionally unstable kasi pinili mo hahaha. I don't want to keep dragging you into my own mess, and I don't want you to feel like you're carrying the weight of me. You have every reason to walk away, to hate me for all the things I've caused. Hindi pa sapat ang \"sorry\" sa mga ginawa ko, but that's all I have eh. I just want you to know that I mean it.",
    
    "It's strange kasi why did I just realize it now. Bakit ngayon lang? I love you, not in the light-hearted way that's easy to say, but in a way that feels heavy, too complicated, and hard to carry… Kaya siguro hindi ko maintindihan because as they all say \"love is complicated\" and I've never felt romantic love for anyone… so I'm new to this.. Now, I know how it feels and it hurts realizing it like this. Is it too late? Am I too late? Funny how the tables have turned… and it seems like I'm begging. And the moment I realized it, I also realized that I'm probably unworthy of love. I'm haunted by my insecurities, something I could never escape from. I don't have the perfect body, the perfect personality… maybe not even the right heart for you. Despite all of that, gusto kitang makasama. I want to try, I want to experience this with you. I want to figure out things with you.",
    
    "Maybe there are still so many things I don't fully understand. I'm unsure of almost everything… the future, my feelings, and even the right words I want to say to you. Even though I can't always put my feelings into words, or find the courage to tell you how much you mean to me, I know deep down that life wouldn't be the same without you in it. Hindi ko kaya. I can't picture my life where you're just a piece of memory, someone I look back on with regret or wonder. Ayoko niyan. I love you and I don't want to lose you, that's two things I'm sure of. Maybe that's the only truth I can hold onto right now… I still want you to decide for yourself though… But if you choose to stay, this time, I'll be better. I'll try my best. Real na 'yan talaga huhu. :("
];

yesBtn.addEventListener('click', () => {
    viewCount++;
    
    if(viewCount === 2) {
        question.innerHTML = "i have a letter for you...";
        gif.src = "https://media.tenor.com/VCqVdJU3a7oAAAAi/happy.gif";
        noBtn.style.display = "none";
        yesBtn.innerHTML = "Open";
    }
    else if(viewCount === 3) {
        question.style.display = "none";
        gif.style.display = "none";
        yesBtn.style.display = "none";
        heart.style.display = "block";
    }
});

noBtn.addEventListener('mouseover', () => {
    opacity -= 0.2;
    noBtn.style.opacity = opacity;
    
    if(opacity < 0) {
        noBtn.style.display = "none";
    }
});

heart.addEventListener('click', () => {
    overlay.style.display = "block";
    messageBox.style.display = "block";
    
    setTimeout(() => {
        overlay.style.opacity = "1";
        messageBox.style.opacity = "1";
        
        setTimeout(() => {
            const typewriter = document.querySelector('.typewriter');
            typewriter.textContent = messages[0];
            moreBtn.style.display = "block";
        }, 500);
    }, 10);
});

moreBtn.addEventListener('click', () => {
    messageIndex++;
    if(messageIndex < messages.length) {
        const typewriter = document.querySelector('.typewriter');
        typewriter.textContent = messages[messageIndex];
    }
    if(messageIndex === messages.length - 1) {
        moreBtn.style.display = "none"; // Hide more button on last message
    }
});