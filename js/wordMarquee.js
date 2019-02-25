// This is to switch Glen's poem to show for the specific time/day
// It shows in the element <div id="motd">motd</div>
// Starting off with 7-14 showing on days of the week and time of day later on.
// in the future aim to make it more random and maybe add a unique picture element

function getMotd() {

    var now = new Date();
    //0=Sunday, 1=Monday, ...
    var nowDay = now.getDay();
    //time in hour format
    //var nowHour = now.getHours;
    //var nowMinute = now.getMinutes;
    var motd = "";

    switch (nowDay) {
        case 0:
            motd = "The train came through here late last night and many tried to board. Sad to say they couldn't for they did not know the Lord. The second coming is coming, and we do need to get right. Believe me people, his name's written on your soul and heaven is in sight. There's two ends on the stick, which end will you grab? If miss the train this time, don't try to call a cab. Some leaders just won't make it, for they forgot life's goal. It's not well, will I make it? But for us to make it as a whole. If we do not help each other, then we have let our own selves down. Lift another, help each other or lost's where we'll be found. A shepherd maybe. The Lord? Not a chance, I could not carry That weight. All that I will say to you is try love instead of hate.";
            //day = "Sunday";
            break;
        case 1:
            motd = "It's cold outside, our house is warm. I don't like to step out into the storm. There's things I must do to make it just, so I'll go out to scoop a mountain of snow. I do this, for all of you I feel it's just something I must do. I need to provide for these people I love, I'll do it without a push or a shove. Yes, I'll go gladly into the storm, So my whole family can have a place that’s warm. A refuge in a world that can be so cold, I do it willingly. I don't need to be told. I do it for love, for you, and for me. And I do it all willingly.";
            //day = "Monday";
            break;
        case 2:
            motd = "If we all dreamt the same dream and our many paths crossed the same stream. If many laughed and fewer cried, having loved and tried. Can one man, show the way or lead us into a brand new day? What is life, but passing time? May path crossed yours, I'm glad you're mine. A course of love has been my only path. I chose to give it and not even ask. Search for love. strive for good. Let God bless your neighborhood. God keep the world neath your wings. It is true love and there are no strings. It's closer, clearer I may soon see just how God is guiding me. Lead on in love. Keep my head on straight. Remind myself not to anticipate. Not to think I know what will take place. In my daily jog, in today's rat race.";
            //day = "Tuesday";
            break;
        case 3:
            motd = "These walls that besiege my mind, through which nothing can pass. No, not even love. Control my thoughts, my action, my being. My tormented self-approval is as it was. It connects my inner psyche to how I feel. How can anybody, any love, anything, break through and     release these bonds of non-self-worth. Self-un-acceptance, self-non-understanding. Somehow someway, must be bridged and fine-tuned, into that functional person that I yearn to be. How to be concealed into that working human spirit, yes, that I yearn to be. Myself, my inner mind, all cry out, save us, we are here. Await for the key to be turned in the lock of the door, It keeps them pent in. Awaiting to be let go of and be tossed into a long ago. A new person to arise and share the love that is waiting. Always waiting, just for me.";
            //day = "Wednesday";
            break;
        case 4:
            motd = "What color am I today? I spent most of my life being brown, not the brightest crayon in the box. Spent part of my life being blue, But today you can color me dead. It is beyond being depressed. No will, no want, no desire to help a friend. Just going through the motions. Just breathing, without the desire to do so. Will my heart stop beating? It doesn't matter either way. I'm just here, alone in the solitude of my mind. I think maybe black is the cloak of blindness, I believe. What I need to know is the color of defeat for I don't feel the desire to love, care, or give, all the things I loved to do. Just going through the motions. Dead. No, beyond dead, morose. Just soul stripped away. A nothing, gone, lifeless, a shell, hollow. A poet once said, I'm not waving at you, I'm drowning. Are you drowning too?";
            //day = "Thursday";
            break;
        case 5:
            motd = "Those unheard voices, planting seeds in your mind. They try not to be audible, they know they’re unkind. It's just their way of controlling you. Making you do things you wouldn't normally do. If you could actually hear them, you might resist. The actions or deeds you need to do they insist. They could destroy you, they could, and you wouldn't know why. You did these things you wouldn't normally try. How many lives do they have under control? I wish I could tell you, but even I don't know. I see things changing all around me. As they heard us where they want us to be. We cannot conceive the power they hold and most tend to hurt you while taking your gold. Money and power, some can't get enough. They use us as stepping stones as they work their way up. This mission of theirs, they figure why should they care. You're just like rungs on a ladder, or a step on the stair. They don't care about wreckage or who they destroy. They might say they do, but it's only a ploy. They step on and over you as they play their game. They don't give a damn if they drive you insane. But don't be blinded, some have values and love. Those are the ones, who lift and hold you above. Not many see the aspects contained. How much love you have for others, gets you real gain.";
            //day = "Friday";
            break;
        case 6:
            motd = "Winter's here and life is hard. The birds no longer in my yard. Here I am, in this frozen waste, staring at mother nature's face. I love her many seasons. She will bring the change and has her reasons. I stand back, and just view, the spring and what it brings new. The summer, fall, the falling leaves. The world it turns, and as it breathes, I see all this is in God's plans, as he holds us, in his hands.";
            //day = "Saturday";
            break;
        default:
            motd = "Winter's here and life is hard. The birds no longer in my yard. Here I am, in this frozen waste, staring at mother nature's face.";
        // find the element and make it change the innerHTML


    }
    document.getElementById("motd").innerHTML = motd;

}

window.onload = function () {
    getMotd();
}