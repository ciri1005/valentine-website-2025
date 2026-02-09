// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {valentineName: "Steph",
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Steph",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 🩷",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: { hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {text: "Are you free on the 13th or 14th day of February? or whatever date works for u:P",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            text: "Are you free on the 13th or 14th day of February? or whatever date works for u:P",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            
        second: { text: "Will you be my Valentine? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
      
            text: "Will you be my Valentine? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
      
        }
    },


    // Messages that appear after they say "Yes!"
    celebration: { title: "Yay! Thank you sooooo much^^",
        message: "Happy Valentines!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
        title: "Yay! Thank you sooooo much^^",
        message: "Happy Valentines!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {backgroundStart: "#bde8f5",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#4988c4",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#1c4d8d",     // Button color (should stand out against the background)
        buttonHover: "#bbe0ef",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#0f2854"             // Text color (make sure it's readable!)
        backgroundStart: "#bde8f5",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#4988c4",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#1c4d8d",     // Button color (should stand out against the background)
        buttonHover: "#bbe0ef",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#0f2854"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: { floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: { enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://open.spotify.com/track/3emeJK0oQQnUo6jNMMstUX?si=85bd16e46db44a03", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://open.spotify.com/track/3emeJK0oQQnUo6jNMMstUX?si=85bd16e46db44a03", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
