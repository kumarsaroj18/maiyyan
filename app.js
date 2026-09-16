/**
 * Learn & Play - Educational App for Kids
 * Interactive learning with audio, animations, and rewards
 */

// ==========================================
// Data: English Alphabets with Words
// ==========================================
const alphabetsData = [
    { letter: 'A', word: 'Apple', emoji: '🍎', phonetic: '/ˈæpəl/' },
    { letter: 'B', word: 'Ball', emoji: '⚽', phonetic: '/bɔːl/' },
    { letter: 'C', word: 'Cat', emoji: '🐱', phonetic: '/kæt/' },
    { letter: 'D', word: 'Dog', emoji: '🐕', phonetic: '/dɒɡ/' },
    { letter: 'E', word: 'Elephant', emoji: '🐘', phonetic: '/ˈelɪfənt/' },
    { letter: 'F', word: 'Fish', emoji: '🐟', phonetic: '/fɪʃ/' },
    { letter: 'G', word: 'Grapes', emoji: '🍇', phonetic: '/ɡreɪps/' },
    { letter: 'H', word: 'House', emoji: '🏠', phonetic: '/haʊs/' },
    { letter: 'I', word: 'Ice Cream', emoji: '🍦', phonetic: '/aɪs kriːm/' },
    { letter: 'J', word: 'Jug', emoji: '🫖', phonetic: '/dʒʌɡ/' },
    { letter: 'K', word: 'Kite', emoji: '🪁', phonetic: '/kaɪt/' },
    { letter: 'L', word: 'Lion', emoji: '🦁', phonetic: '/ˈlaɪən/' },
    { letter: 'M', word: 'Monkey', emoji: '🐒', phonetic: '/ˈmʌŋki/' },
    { letter: 'N', word: 'Nest', emoji: '🪺', phonetic: '/nest/' },
    { letter: 'O', word: 'Orange', emoji: '🍊', phonetic: '/ˈɒrɪndʒ/' },
    { letter: 'P', word: 'Parrot', emoji: '🦜', phonetic: '/ˈpærət/' },
    { letter: 'Q', word: 'Queen', emoji: '👸', phonetic: '/kwiːn/' },
    { letter: 'R', word: 'Rabbit', emoji: '🐰', phonetic: '/ˈræbɪt/' },
    { letter: 'S', word: 'Sun', emoji: '☀️', phonetic: '/sʌn/' },
    { letter: 'T', word: 'Tiger', emoji: '🐯', phonetic: '/ˈtaɪɡər/' },
    { letter: 'U', word: 'Umbrella', emoji: '☂️', phonetic: '/ʌmˈbrelə/' },
    { letter: 'V', word: 'Van', emoji: '🚐', phonetic: '/væn/' },
    { letter: 'W', word: 'Watch', emoji: '⌚', phonetic: '/wɒtʃ/' },
    { letter: 'X', word: 'Xylophone', emoji: '🎵', phonetic: '/ˈzaɪləfoʊn/' },
    { letter: 'Y', word: 'Yak', emoji: '🦬', phonetic: '/jæk/' },
    { letter: 'Z', word: 'Zebra', emoji: '🦓', phonetic: '/ˈziːbrə/' }
];

// ==========================================
// Data: English Words (Common Objects)
// ==========================================
const englishWordsData = [
    { word: 'Book', emoji: '📚', category: 'objects' },
    { word: 'Chair', emoji: '🪑', category: 'furniture' },
    { word: 'Sofa', emoji: '🛋️', category: 'furniture' },
    { word: 'Bed', emoji: '🛏️', category: 'furniture' },
    { word: 'Car', emoji: '🚗', category: 'vehicles' },
    { word: 'Bus', emoji: '🚌', category: 'vehicles' },
    { word: 'Train', emoji: '🚂', category: 'vehicles' },
    { word: 'Plane', emoji: '✈️', category: 'vehicles' },
    { word: 'Flower', emoji: '🌸', category: 'nature' },
    { word: 'Tree', emoji: '🌳', category: 'nature' },
    { word: 'Star', emoji: '⭐', category: 'nature' },
    { word: 'Moon', emoji: '🌙', category: 'nature' },
    { word: 'Water', emoji: '💧', category: 'nature' },
    { word: 'Milk', emoji: '🥛', category: 'food' },
    { word: 'Bread', emoji: '🍞', category: 'food' },
    { word: 'Rice', emoji: '🍚', category: 'food' },
    { word: 'Banana', emoji: '🍌', category: 'food' },
    { word: 'Cake', emoji: '🎂', category: 'food' },
    { word: 'Shirt', emoji: '👕', category: 'clothes' },
    { word: 'Shoes', emoji: '👟', category: 'clothes' }
];

// ==========================================
// Data: English Body Parts
// Using free clipart images for clear visuals
// ==========================================
const englishBodyParts = [
    { name: 'Head', image: 'https://cdn-icons-png.flaticon.com/512/3048/3048127.png' },
    { name: 'Hair', image: 'https://cdn-icons-png.flaticon.com/512/3468/3468377.png' },
    { name: 'Eyes', image: 'https://cdn-icons-png.flaticon.com/512/2429/2429153.png' },
    { name: 'Nose', image: 'https://cdn-icons-png.flaticon.com/512/2429/2429159.png' },
    { name: 'Mouth', image: 'https://cdn-icons-png.flaticon.com/512/2429/2429163.png' },
    { name: 'Ears', image: 'https://cdn-icons-png.flaticon.com/512/2429/2429139.png' },
    { name: 'Neck', image: 'https://cdn-icons-png.flaticon.com/512/3048/3048394.png' },
    { name: 'Shoulders', image: 'https://cdn-icons-png.flaticon.com/512/3048/3048371.png' },
    { name: 'Arms', image: 'https://cdn-icons-png.flaticon.com/512/3048/3048358.png' },
    { name: 'Hands', image: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png' },
    { name: 'Fingers', image: 'https://cdn-icons-png.flaticon.com/512/2103/2103620.png' },
    { name: 'Tummy', image: 'https://cdn-icons-png.flaticon.com/512/3048/3048386.png' },
    { name: 'Legs', image: 'https://cdn-icons-png.flaticon.com/512/3048/3048404.png' },
    { name: 'Knees', image: 'https://cdn-icons-png.flaticon.com/512/3048/3048381.png' },
    { name: 'Feet', image: 'https://cdn-icons-png.flaticon.com/512/3048/3048376.png' }
];

// ==========================================
// Data: English Animals
// ==========================================
const englishAnimals = [
    { name: 'Lion', emoji: '🦁', sound: 'Roar!' },
    { name: 'Tiger', emoji: '🐯', sound: 'Roar!' },
    { name: 'Elephant', emoji: '🐘', sound: 'Trumpet!' },
    { name: 'Monkey', emoji: '🐒', sound: 'Ooh ooh!' },
    { name: 'Dog', emoji: '🐕', sound: 'Woof woof!' },
    { name: 'Cat', emoji: '🐱', sound: 'Meow!' },
    { name: 'Cow', emoji: '🐄', sound: 'Moo!' },
    { name: 'Horse', emoji: '🐴', sound: 'Neigh!' },
    { name: 'Sheep', emoji: '🐑', sound: 'Baa!' },
    { name: 'Pig', emoji: '🐷', sound: 'Oink!' },
    { name: 'Duck', emoji: '🦆', sound: 'Quack!' },
    { name: 'Chicken', emoji: '🐔', sound: 'Cluck!' },
    { name: 'Bird', emoji: '🐦', sound: 'Tweet!' },
    { name: 'Fish', emoji: '🐟', sound: 'Blub!' },
    { name: 'Frog', emoji: '🐸', sound: 'Ribbit!' },
    { name: 'Bear', emoji: '🐻', sound: 'Growl!' },
    { name: 'Rabbit', emoji: '🐰', sound: 'Squeak!' },
    { name: 'Giraffe', emoji: '🦒', sound: 'Hum!' },
    { name: 'Zebra', emoji: '🦓', sound: 'Bark!' },
    { name: 'Peacock', emoji: '🦚', sound: 'Scream!' }
];

// ==========================================
// Data: Hindi Varnamala (Vowels + Consonants)
// ==========================================
const hindiVarnamala = [
    // Vowels (स्वर)
    { letter: 'अ', word: 'अनार', wordMeaning: 'Pomegranate', emoji: '🍎', type: 'vowel' },
    { letter: 'आ', word: 'आम', wordMeaning: 'Mango', emoji: '🥭', type: 'vowel' },
    { letter: 'इ', word: 'इमली', wordMeaning: 'Tamarind', emoji: '🌿', type: 'vowel' },
    { letter: 'ई', word: 'ईख', wordMeaning: 'Sugarcane', emoji: '🎋', type: 'vowel' },
    { letter: 'उ', word: 'उल्लू', wordMeaning: 'Owl', emoji: '🦉', type: 'vowel' },
    { letter: 'ऊ', word: 'ऊन', wordMeaning: 'Wool', emoji: '🧶', type: 'vowel' },
    { letter: 'ए', word: 'एड़ी', wordMeaning: 'Heel', emoji: '🦶', type: 'vowel' },
    { letter: 'ऐ', word: 'ऐनक', wordMeaning: 'Glasses', emoji: '👓', type: 'vowel' },
    { letter: 'ओ', word: 'ओखली', wordMeaning: 'Mortar', emoji: '🥣', type: 'vowel' },
    { letter: 'औ', word: 'औरत', wordMeaning: 'Woman', emoji: '👩', type: 'vowel' },
    { letter: 'अं', word: 'अंगूर', wordMeaning: 'Grapes', emoji: '🍇', type: 'vowel' },
    { letter: 'अः', word: 'अः', wordMeaning: 'Sound', emoji: '🔊', type: 'vowel' },
    // Consonants (व्यंजन)
    { letter: 'क', word: 'कमल', wordMeaning: 'Lotus', emoji: '🪷', type: 'consonant' },
    { letter: 'ख', word: 'खरगोश', wordMeaning: 'Rabbit', emoji: '🐰', type: 'consonant' },
    { letter: 'ग', word: 'गाय', wordMeaning: 'Cow', emoji: '🐄', type: 'consonant' },
    { letter: 'घ', word: 'घड़ी', wordMeaning: 'Clock', emoji: '⏰', type: 'consonant' },
    { letter: 'च', word: 'चम्मच', wordMeaning: 'Spoon', emoji: '🥄', type: 'consonant' },
    { letter: 'छ', word: 'छाता', wordMeaning: 'Umbrella', emoji: '☂️', type: 'consonant' },
    { letter: 'ज', word: 'जहाज़', wordMeaning: 'Ship', emoji: '🚢', type: 'consonant' },
    { letter: 'झ', word: 'झंडा', wordMeaning: 'Flag', emoji: '🚩', type: 'consonant' },
    { letter: 'ट', word: 'टमाटर', wordMeaning: 'Tomato', emoji: '🍅', type: 'consonant' },
    { letter: 'ठ', word: 'ठठेरा', wordMeaning: 'Tinsmith', emoji: '🔨', type: 'consonant' },
    { letter: 'ड', word: 'डमरू', wordMeaning: 'Drum', emoji: '🪘', type: 'consonant' },
    { letter: 'ढ', word: 'ढोल', wordMeaning: 'Drum', emoji: '🥁', type: 'consonant' },
    { letter: 'त', word: 'तरबूज़', wordMeaning: 'Watermelon', emoji: '🍉', type: 'consonant' },
    { letter: 'थ', word: 'थाली', wordMeaning: 'Plate', emoji: '🍽️', type: 'consonant' },
    { letter: 'द', word: 'दीया', wordMeaning: 'Lamp', emoji: '🪔', type: 'consonant' },
    { letter: 'ध', word: 'धनुष', wordMeaning: 'Bow', emoji: '🏹', type: 'consonant' },
    { letter: 'न', word: 'नल', wordMeaning: 'Tap', emoji: '🚰', type: 'consonant' },
    { letter: 'प', word: 'पतंग', wordMeaning: 'Kite', emoji: '🪁', type: 'consonant' },
    { letter: 'फ', word: 'फूल', wordMeaning: 'Flower', emoji: '🌸', type: 'consonant' },
    { letter: 'ब', word: 'बत्तख़', wordMeaning: 'Duck', emoji: '🦆', type: 'consonant' },
    { letter: 'भ', word: 'भालू', wordMeaning: 'Bear', emoji: '🐻', type: 'consonant' },
    { letter: 'म', word: 'मछली', wordMeaning: 'Fish', emoji: '🐟', type: 'consonant' },
    { letter: 'य', word: 'याक', wordMeaning: 'Yak', emoji: '🦬', type: 'consonant' },
    { letter: 'र', word: 'रथ', wordMeaning: 'Chariot', emoji: '🏎️', type: 'consonant' },
    { letter: 'ल', word: 'लड्डू', wordMeaning: 'Sweet', emoji: '🍬', type: 'consonant' },
    { letter: 'व', word: 'वायलिन', wordMeaning: 'Violin', emoji: '🎻', type: 'consonant' },
    { letter: 'श', word: 'शेर', wordMeaning: 'Lion', emoji: '🦁', type: 'consonant' },
    { letter: 'ष', word: 'षट्कोण', wordMeaning: 'Hexagon', emoji: '⬡', type: 'consonant' },
    { letter: 'स', word: 'सेब', wordMeaning: 'Apple', emoji: '🍎', type: 'consonant' },
    { letter: 'ह', word: 'हाथी', wordMeaning: 'Elephant', emoji: '🐘', type: 'consonant' }
];

// ==========================================
// Data: Hindi Words
// ==========================================
const hindiWordsData = [
    { word: 'माँ', meaning: 'Mother', emoji: '👩' },
    { word: 'पापा', meaning: 'Father', emoji: '👨' },
    { word: 'दादी', meaning: 'Grandmother', emoji: '👵' },
    { word: 'दादा', meaning: 'Grandfather', emoji: '👴' },
    { word: 'पानी', meaning: 'Water', emoji: '💧' },
    { word: 'दूध', meaning: 'Milk', emoji: '🥛' },
    { word: 'रोटी', meaning: 'Bread', emoji: '🫓' },
    { word: 'चावल', meaning: 'Rice', emoji: '🍚' },
    { word: 'फल', meaning: 'Fruit', emoji: '🍎' },
    { word: 'सब्ज़ी', meaning: 'Vegetable', emoji: '🥬' },
    { word: 'घर', meaning: 'Home', emoji: '🏠' },
    { word: 'स्कूल', meaning: 'School', emoji: '🏫' },
    { word: 'किताब', meaning: 'Book', emoji: '📚' },
    { word: 'कलम', meaning: 'Pen', emoji: '🖊️' },
    { word: 'गेंद', meaning: 'Ball', emoji: '⚽' },
    { word: 'गुड़िया', meaning: 'Doll', emoji: '🎎' },
    { word: 'सूरज', meaning: 'Sun', emoji: '☀️' },
    { word: 'चाँद', meaning: 'Moon', emoji: '🌙' },
    { word: 'तारे', meaning: 'Stars', emoji: '⭐' },
    { word: 'बारिश', meaning: 'Rain', emoji: '🌧️' }
];

// ==========================================
// Data: Hindi Body Parts
// ==========================================
const hindiBodyParts = [
    { name: 'सिर', english: 'Head', emoji: '👤', position: { top: '5%', left: '42%' } },
    { name: 'बाल', english: 'Hair', emoji: '💇', position: { top: '0%', left: '42%' } },
    { name: 'आँखें', english: 'Eyes', emoji: '👀', position: { top: '12%', left: '42%' } },
    { name: 'नाक', english: 'Nose', emoji: '👃', position: { top: '18%', left: '42%' } },
    { name: 'मुँह', english: 'Mouth', emoji: '👄', position: { top: '24%', left: '42%' } },
    { name: 'कान', english: 'Ears', emoji: '👂', position: { top: '15%', left: '25%' } },
    { name: 'गर्दन', english: 'Neck', emoji: '🦒', position: { top: '32%', left: '42%' } },
    { name: 'कंधे', english: 'Shoulders', emoji: '💪', position: { top: '38%', left: '25%' } },
    { name: 'बाज़ू', english: 'Arms', emoji: '💪', position: { top: '50%', left: '15%' } },
    { name: 'हाथ', english: 'Hands', emoji: '🤚', position: { top: '65%', left: '10%' } },
    { name: 'उँगलियाँ', english: 'Fingers', emoji: '🖐️', position: { top: '68%', left: '5%' } },
    { name: 'छाती', english: 'Chest', emoji: '👕', position: { top: '45%', left: '42%' } },
    { name: 'पेट', english: 'Tummy', emoji: '🫃', position: { top: '55%', left: '42%' } },
    { name: 'टांगें', english: 'Legs', emoji: '🦵', position: { top: '75%', left: '35%' } },
    { name: 'घुटने', english: 'Knees', emoji: '🦿', position: { top: '78%', left: '42%' } },
    { name: 'पैर', english: 'Feet', emoji: '🦶', position: { top: '92%', left: '35%' } },
    { name: 'पैर की उँगलियाँ', english: 'Toes', emoji: '🦶', position: { top: '95%', left: '42%' } }
];

// ==========================================
// Data: Hindi Animals
// ==========================================
const hindiAnimals = [
    { name: 'शेर', english: 'Lion', emoji: '🦁' },
    { name: 'बाघ', english: 'Tiger', emoji: '🐯' },
    { name: 'हाथी', english: 'Elephant', emoji: '🐘' },
    { name: 'बंदर', english: 'Monkey', emoji: '🐒' },
    { name: 'कुत्ता', english: 'Dog', emoji: '🐕' },
    { name: 'बिल्ली', english: 'Cat', emoji: '🐱' },
    { name: 'गाय', english: 'Cow', emoji: '🐄' },
    { name: 'घोड़ा', english: 'Horse', emoji: '🐴' },
    { name: 'भेड़', english: 'Sheep', emoji: '🐑' },
    { name: 'सूअर', english: 'Pig', emoji: '🐷' },
    { name: 'बत्तख़', english: 'Duck', emoji: '🦆' },
    { name: 'मुर्गी', english: 'Chicken', emoji: '🐔' },
    { name: 'चिड़िया', english: 'Bird', emoji: '🐦' },
    { name: 'मछली', english: 'Fish', emoji: '🐟' },
    { name: 'मेंढक', english: 'Frog', emoji: '🐸' },
    { name: 'भालू', english: 'Bear', emoji: '🐻' },
    { name: 'खरगोश', english: 'Rabbit', emoji: '🐰' },
    { name: 'जिराफ़', english: 'Giraffe', emoji: '🦒' },
    { name: 'ज़ेबरा', english: 'Zebra', emoji: '🦓' },
    { name: 'मोर', english: 'Peacock', emoji: '🦚' }
];

// ==========================================
// Data: Numbers 1-10
// ==========================================
const numbersData = [
    { number: 1, word: 'One', hindi: 'एक', emoji: '🌟', objects: '⭐' },
    { number: 2, word: 'Two', hindi: 'दो', emoji: '👀', objects: '⭐⭐' },
    { number: 3, word: 'Three', hindi: 'तीन', emoji: '🎈', objects: '🎈🎈🎈' },
    { number: 4, word: 'Four', hindi: 'चार', emoji: '🍎', objects: '🍎🍎🍎🍎' },
    { number: 5, word: 'Five', hindi: 'पाँच', emoji: '🖐️', objects: '🌸🌸🌸🌸🌸' },
    { number: 6, word: 'Six', hindi: 'छह', emoji: '🎲', objects: '🦋🦋🦋🦋🦋🦋' },
    { number: 7, word: 'Seven', hindi: 'सात', emoji: '🌈', objects: '🔴🟠🟡🟢🔵🟣⚪' },
    { number: 8, word: 'Eight', hindi: 'आठ', emoji: '🐙', objects: '🐟🐟🐟🐟🐟🐟🐟🐟' },
    { number: 9, word: 'Nine', hindi: 'नौ', emoji: '🎯', objects: '🌺🌺🌺🌺🌺🌺🌺🌺🌺' },
    { number: 10, word: 'Ten', hindi: 'दस', emoji: '🔟', objects: '🍬🍬🍬🍬🍬🍬🍬🍬🍬🍬' }
];

// ==========================================
// Data: Shapes
// ==========================================
const shapesData = [
    { name: 'Circle', hindi: 'गोला', color: '#E74C3C', svg: '<circle cx="40" cy="40" r="35" fill="currentColor"/>' },
    { name: 'Square', hindi: 'वर्ग', color: '#3498DB', svg: '<rect x="5" y="5" width="70" height="70" fill="currentColor"/>' },
    { name: 'Triangle', hindi: 'त्रिकोण', color: '#2ECC71', svg: '<polygon points="40,5 75,75 5,75" fill="currentColor"/>' },
    { name: 'Rectangle', hindi: 'आयत', color: '#9B59B6', svg: '<rect x="5" y="15" width="70" height="50" fill="currentColor"/>' },
    { name: 'Star', hindi: 'तारा', color: '#F1C40F', svg: '<polygon points="40,5 48,32 77,32 54,50 62,77 40,60 18,77 26,50 3,32 32,32" fill="currentColor"/>' },
    { name: 'Heart', hindi: 'दिल', color: '#E91E63', svg: '<path d="M40,70 C20,50 5,35 5,25 C5,15 15,5 25,5 C32,5 38,10 40,15 C42,10 48,5 55,5 C65,5 75,15 75,25 C75,35 60,50 40,70 Z" fill="currentColor"/>' },
    { name: 'Diamond', hindi: 'हीरा', color: '#00BCD4', svg: '<polygon points="40,5 75,40 40,75 5,40" fill="currentColor"/>' },
    { name: 'Oval', hindi: 'अंडाकार', color: '#FF9800', svg: '<ellipse cx="40" cy="40" rx="35" ry="25" fill="currentColor"/>' }
];

// ==========================================
// Data: Colors
// ==========================================
const colorsData = [
    { name: 'Red', hindi: 'लाल', color: '#E74C3C', emoji: '🍎🌹❤️' },
    { name: 'Blue', hindi: 'नीला', color: '#3498DB', emoji: '🌊💙🦋' },
    { name: 'Green', hindi: 'हरा', color: '#2ECC71', emoji: '🌿🥒💚' },
    { name: 'Yellow', hindi: 'पीला', color: '#F1C40F', emoji: '🌻🍋💛' },
    { name: 'Orange', hindi: 'नारंगी', color: '#E67E22', emoji: '🍊🥕🧡' },
    { name: 'Purple', hindi: 'बैंगनी', color: '#9B59B6', emoji: '🍇🔮💜' },
    { name: 'Pink', hindi: 'गुलाबी', color: '#FF69B4', emoji: '🌸🎀💗' },
    { name: 'Brown', hindi: 'भूरा', color: '#8B4513', emoji: '🐻🍫🤎' },
    { name: 'Black', hindi: 'काला', color: '#2C3E50', emoji: '🖤🦇🌑' },
    { name: 'White', hindi: 'सफ़ेद', color: '#ECF0F1', emoji: '🤍☁️⚪' }
];

// ==========================================
// App State
// ==========================================
let totalStars = parseInt(localStorage.getItem('totalStars') || '0');
let currentCardIndex = 0;

// ==========================================
// Text-to-Speech with Enhanced Voice Selection
// Optimized for macOS Chrome + Mobile devices
// ==========================================

// Cache for best voices
let bestEnglishVoice = null;
let bestHindiVoice = null;
let voicesLoaded = false;

// Audio context for volume boost
let audioContext = null;
let gainNode = null;

// Initialize audio boost (helps with low volume on some systems)
function initAudioBoost() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audioContext.createGain();
        gainNode.gain.value = 2.0; // 2x volume boost
        gainNode.connect(audioContext.destination);
    } catch (e) {
        console.log('AudioContext not available for volume boost');
    }
}

// Load and select best voices
function loadVoices() {
    return new Promise((resolve) => {
        const tryLoad = () => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                selectBestVoices(voices);
                resolve();
                return true;
            }
            return false;
        };
        
        if (!tryLoad()) {
            // Wait for voices to load (needed on Chrome)
            window.speechSynthesis.onvoiceschanged = () => {
                tryLoad();
                resolve();
            };
            // Fallback timeout
            setTimeout(() => {
                tryLoad();
                resolve();
            }, 1000);
        }
    });
}

function selectBestVoices(voices) {
    console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));
    
    // Priority order for English voices on macOS Chrome
    // These are the best sounding voices on macOS
    const englishPriority = [
        // macOS Premium voices (must be downloaded in System Preferences > Accessibility > Spoken Content)
        'Samantha (Enhanced)',
        'Samantha',
        'Ava (Premium)',
        'Ava',
        'Allison',
        'Susan',
        'Tom',
        // macOS standard good voices
        'Alex',              // Classic macOS voice, very clear
        'Victoria',
        'Karen',             // Australian, very clear
        'Daniel',            // British, clear
        'Moira',             // Irish
        'Tessa',             // South African
        // Google voices (if available)
        'Google UK English Female',
        'Google UK English Male',
        'Google US English',
        // Indian English
        'Rishi',
        'Veena',
        // Fallbacks
        'en-US',
        'en-GB'
    ];
    
    // Priority order for Hindi voices
    const hindiPriority = [
        'Lekha',              // macOS Hindi voice
        'Google हिन्दी',
        'hi-IN',
        'hi'
    ];
    
    // Find best English voice
    const englishVoices = voices.filter(v => v.lang.startsWith('en'));
    
    // Try to find by priority
    for (const priority of englishPriority) {
        const found = englishVoices.find(v => 
            v.name.toLowerCase().includes(priority.toLowerCase())
        );
        if (found) {
            bestEnglishVoice = found;
            break;
        }
    }
    
    // If no priority match, prefer voices marked as not localService (network voices are higher quality)
    // or pick the first available
    if (!bestEnglishVoice && englishVoices.length > 0) {
        bestEnglishVoice = englishVoices.find(v => !v.localService) || englishVoices[0];
    }
    
    // Find best Hindi voice
    const hindiVoices = voices.filter(v => 
        v.lang.startsWith('hi') || 
        hindiPriority.some(p => v.name.includes(p))
    );
    
    for (const priority of hindiPriority) {
        const found = hindiVoices.find(v => 
            v.name.includes(priority) || v.lang.includes(priority)
        );
        if (found) {
            bestHindiVoice = found;
            break;
        }
    }
    
    if (!bestHindiVoice && hindiVoices.length > 0) {
        bestHindiVoice = hindiVoices.find(v => !v.localService) || hindiVoices[0];
    }
    
    voicesLoaded = true;
    console.log('Selected English voice:', bestEnglishVoice?.name);
    console.log('Selected Hindi voice:', bestHindiVoice?.name);
}

function speak(text, lang = 'en-US', voice = null) {
    if (!('speechSynthesis' in window)) return;
    
    // Resume audio context on user interaction (needed for Chrome)
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    // Small delay to ensure cancel completes (Chrome fix)
    setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Set the best voice if available
        if (voice) {
            utterance.voice = voice;
        }
        
        utterance.lang = lang;
        utterance.rate = 0.85;      // Slightly slower, but not too slow
        utterance.pitch = 1.1;      // Slightly higher, friendly tone for kids
        utterance.volume = 1.0;     // Maximum volume
        
        // Event handlers for debugging
        utterance.onstart = () => console.log('Speaking:', text);
        utterance.onerror = (e) => console.error('Speech error:', e);
        
        window.speechSynthesis.speak(utterance);
        
        // Chrome bug fix: Chrome sometimes pauses speech randomly
        // This keeps it going
        const resumeInterval = setInterval(() => {
            if (!window.speechSynthesis.speaking) {
                clearInterval(resumeInterval);
            } else if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
            }
        }, 100);
        
        // Clear interval after max 10 seconds
        setTimeout(() => clearInterval(resumeInterval), 10000);
        
    }, 50);
}

function speakEnglish(text) {
    // Ensure voices are loaded
    if (!voicesLoaded) {
        loadVoices().then(() => {
            speak(text, bestEnglishVoice?.lang || 'en-US', bestEnglishVoice);
        });
    } else {
        speak(text, bestEnglishVoice?.lang || 'en-US', bestEnglishVoice);
    }
}

function speakHindi(text) {
    // Ensure voices are loaded
    if (!voicesLoaded) {
        loadVoices().then(() => {
            speak(text, bestHindiVoice?.lang || 'hi-IN', bestHindiVoice);
        });
    } else {
        speak(text, bestHindiVoice?.lang || 'hi-IN', bestHindiVoice);
    }
}

// Initialize voices when page loads
if ('speechSynthesis' in window) {
    loadVoices();
    
    // Initialize audio boost on first user interaction
    document.addEventListener('click', () => {
        if (!audioContext) {
            initAudioBoost();
        }
    }, { once: true });
}

// ==========================================
// Rewards System
// ==========================================
function addStar() {
    totalStars++;
    localStorage.setItem('totalStars', totalStars.toString());
    updateStarsDisplay();
}

function updateStarsDisplay() {
    const starsElement = document.getElementById('total-stars');
    if (starsElement) {
        starsElement.textContent = totalStars;
        starsElement.classList.add('star-added');
        setTimeout(() => starsElement.classList.remove('star-added'), 500);
    }
}

function showReward() {
    const modal = document.getElementById('reward-modal');
    modal.classList.remove('hidden');
    
    // Play celebration
    const celebrations = ['🎉', '🌟', '🎊', '👏', '🥳'];
    const rewardEmoji = modal.querySelector('.reward-emoji');
    rewardEmoji.textContent = celebrations[Math.floor(Math.random() * celebrations.length)];
    
    // Create confetti
    createConfetti();
    
    // Speak encouragement
    const encouragements = ['Great job!', 'Wonderful!', 'Amazing!', 'Well done!', 'Super!'];
    speakEnglish(encouragements[Math.floor(Math.random() * encouragements.length)]);
    
    // Add star
    addStar();
    
    // Hide after 2 seconds
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 2000);
}

function createConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    
    const colors = ['#FF6B9D', '#9B59B6', '#3498DB', '#2ECC71', '#F1C40F', '#E67E22'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        container.appendChild(confetti);
    }
    
    // Clean up after animation
    setTimeout(() => {
        container.innerHTML = '';
    }, 4000);
}

// ==========================================
// Navigation
// ==========================================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        targetScreen.scrollTop = 0;
    }
}

function navigateToSection(section) {
    showScreen(section + '-menu');
}

function navigateToPage(page) {
    showScreen(page + '-page');
    initializePage(page);
}

function initializePage(page) {
    switch(page) {
        case 'alphabets':
            renderAlphabets();
            break;
        case 'english-words':
            renderEnglishWords();
            break;
        case 'english-body':
            renderEnglishBodyParts();
            break;
        case 'english-animals':
            renderEnglishAnimals();
            break;
        case 'varnamala':
            renderVarnamala();
            break;
        case 'hindi-words':
            renderHindiWords();
            break;
        case 'hindi-body':
            renderHindiBodyParts();
            break;
        case 'hindi-animals':
            renderHindiAnimals();
            break;
        case 'numbers':
            renderNumbers();
            break;
        case 'shapes':
            renderShapes();
            break;
        case 'colors':
            renderColors();
            break;
    }
}

// ==========================================
// Render Functions
// ==========================================
function renderAlphabets() {
    const container = document.getElementById('alphabets-container');
    const dotsContainer = document.getElementById('alphabets-dots');
    
    container.innerHTML = alphabetsData.map((item, index) => `
        <div class="flashcard" data-index="${index}" onclick="handleAlphabetTap(${index})">
            <div class="flashcard-letter" style="background: linear-gradient(135deg, hsl(${index * 14}, 70%, 50%), hsl(${index * 14 + 30}, 70%, 60%)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                ${item.letter}
            </div>
            <div class="flashcard-image">${item.emoji}</div>
            <div class="flashcard-word">${item.word}</div>
            <div class="tap-hint"><span class="tap-icon">👆</span> Tap to hear</div>
        </div>
    `).join('');
    
    renderDots(dotsContainer, alphabetsData.length, 'alphabets');
    setupSwipeNavigation(container, 'alphabets');
}

function handleAlphabetTap(index) {
    const item = alphabetsData[index];
    const card = document.querySelector(`#alphabets-container .flashcard[data-index="${index}"]`);
    card.classList.add('tapped');
    setTimeout(() => card.classList.remove('tapped'), 300);
    
    // Use lowercase for speech to avoid "Capital A" pronunciation
    const letterForSpeech = item.letter.toLowerCase();
    
    // Speak letter first, then "letter for word" after a pause
    speakEnglish(letterForSpeech);
    setTimeout(() => {
        speakEnglish(`${letterForSpeech} for ${item.word}`);
    }, 800);
    
    // Random chance to show reward
    if (Math.random() < 0.3) {
        setTimeout(showReward, 2000);
    }
}

function renderEnglishWords() {
    const container = document.getElementById('english-words-container');
    const dotsContainer = document.getElementById('english-words-dots');
    
    container.innerHTML = englishWordsData.map((item, index) => `
        <div class="flashcard" data-index="${index}" onclick="handleEnglishWordTap(${index})">
            <div class="flashcard-image" style="font-size: 6rem;">${item.emoji}</div>
            <div class="flashcard-word">${item.word}</div>
            <div class="tap-hint"><span class="tap-icon">👆</span> Tap to hear</div>
        </div>
    `).join('');
    
    renderDots(dotsContainer, englishWordsData.length, 'english-words');
    setupSwipeNavigation(container, 'english-words');
}

function handleEnglishWordTap(index) {
    const item = englishWordsData[index];
    speakEnglish(item.word);
    
    if (Math.random() < 0.25) {
        setTimeout(showReward, 1000);
    }
}

function renderEnglishBodyParts() {
    const figureContainer = document.getElementById('english-body-figure');
    const cardsContainer = document.getElementById('english-body-cards');
    
    // Render interactive cartoon body with tappable parts
    figureContainer.innerHTML = `
        <h3 style="margin-bottom: 15px; color: #666;">👆 Tap body parts on the picture!</h3>
        <div class="body-figure" style="position: relative; width: 220px; height: 350px; margin: 0 auto;">
            <!-- Cartoon Kid Body SVG -->
            <svg viewBox="0 0 220 350" style="width: 100%; height: 100%;">
                <!-- Hair -->
                <ellipse cx="110" cy="35" rx="45" ry="30" fill="#4A3728"/>
                <ellipse cx="110" cy="45" rx="42" ry="25" fill="#5D4037"/>
                
                <!-- Head/Face -->
                <ellipse cx="110" cy="65" rx="38" ry="42" fill="#FFCC80"/>
                
                <!-- Ears -->
                <ellipse cx="68" cy="65" rx="8" ry="12" fill="#FFCC80"/>
                <ellipse cx="152" cy="65" rx="8" ry="12" fill="#FFCC80"/>
                
                <!-- Eyes -->
                <ellipse cx="95" cy="58" rx="8" ry="10" fill="white"/>
                <ellipse cx="125" cy="58" rx="8" ry="10" fill="white"/>
                <circle cx="95" cy="60" r="5" fill="#333"/>
                <circle cx="125" cy="60" r="5" fill="#333"/>
                <circle cx="96" cy="58" r="2" fill="white"/>
                <circle cx="126" cy="58" r="2" fill="white"/>
                
                <!-- Nose -->
                <ellipse cx="110" cy="72" rx="5" ry="6" fill="#FFB74D"/>
                
                <!-- Mouth (smile) -->
                <path d="M 95 85 Q 110 100 125 85" stroke="#E57373" stroke-width="3" fill="none" stroke-linecap="round"/>
                
                <!-- Neck -->
                <rect x="100" y="105" width="20" height="20" fill="#FFCC80"/>
                
                <!-- Body/Shirt -->
                <path d="M 60 125 L 80 125 L 85 180 L 135 180 L 140 125 L 160 125 L 165 200 L 55 200 Z" fill="#42A5F5"/>
                
                <!-- Arms -->
                <path d="M 60 125 L 30 180 L 40 185 L 75 140" fill="#FFCC80"/>
                <path d="M 160 125 L 190 180 L 180 185 L 145 140" fill="#FFCC80"/>
                
                <!-- Hands -->
                <circle cx="32" cy="185" r="12" fill="#FFCC80"/>
                <circle cx="188" cy="185" r="12" fill="#FFCC80"/>
                
                <!-- Shorts/Pants -->
                <path d="M 65 200 L 55 260 L 85 260 L 95 210 L 125 210 L 135 260 L 165 260 L 155 200 Z" fill="#5C6BC0"/>
                
                <!-- Legs -->
                <rect x="60" y="260" width="25" height="60" fill="#FFCC80" rx="5"/>
                <rect x="135" y="260" width="25" height="60" fill="#FFCC80" rx="5"/>
                
                <!-- Feet/Shoes -->
                <ellipse cx="72" cy="330" rx="20" ry="12" fill="#FF7043"/>
                <ellipse cx="147" cy="330" rx="20" ry="12" fill="#FF7043"/>
            </svg>
            
            <!-- Tappable hotspots -->
            <button class="body-hotspot" style="top: 5%; left: 35%; width: 30%;" onclick="speakBodyPart('Hair')">Hair</button>
            <button class="body-hotspot" style="top: 12%; left: 35%; width: 30%;" onclick="speakBodyPart('Head')">Head</button>
            <button class="body-hotspot" style="top: 14%; left: 15%; width: 15%;" onclick="speakBodyPart('Ears')">Ear</button>
            <button class="body-hotspot" style="top: 14%; left: 70%; width: 15%;" onclick="speakBodyPart('Ears')">Ear</button>
            <button class="body-hotspot" style="top: 15%; left: 38%; width: 10%;" onclick="speakBodyPart('Eyes')">Eye</button>
            <button class="body-hotspot" style="top: 15%; left: 52%; width: 10%;" onclick="speakBodyPart('Eyes')">Eye</button>
            <button class="body-hotspot" style="top: 19%; left: 45%; width: 10%;" onclick="speakBodyPart('Nose')">Nose</button>
            <button class="body-hotspot" style="top: 23%; left: 40%; width: 20%;" onclick="speakBodyPart('Mouth')">Mouth</button>
            <button class="body-hotspot" style="top: 30%; left: 43%; width: 14%;" onclick="speakBodyPart('Neck')">Neck</button>
            <button class="body-hotspot" style="top: 36%; left: 20%; width: 20%;" onclick="speakBodyPart('Shoulders')">Shoulder</button>
            <button class="body-hotspot" style="top: 36%; left: 60%; width: 20%;" onclick="speakBodyPart('Shoulders')">Shoulder</button>
            <button class="body-hotspot" style="top: 42%; left: 5%; width: 20%;" onclick="speakBodyPart('Arms')">Arm</button>
            <button class="body-hotspot" style="top: 42%; left: 75%; width: 20%;" onclick="speakBodyPart('Arms')">Arm</button>
            <button class="body-hotspot" style="top: 50%; left: 5%; width: 15%;" onclick="speakBodyPart('Hands')">Hand</button>
            <button class="body-hotspot" style="top: 50%; left: 80%; width: 15%;" onclick="speakBodyPart('Hands')">Hand</button>
            <button class="body-hotspot" style="top: 48%; left: 35%; width: 30%;" onclick="speakBodyPart('Tummy')">Tummy</button>
            <button class="body-hotspot" style="top: 65%; left: 25%; width: 20%;" onclick="speakBodyPart('Legs')">Leg</button>
            <button class="body-hotspot" style="top: 65%; left: 55%; width: 20%;" onclick="speakBodyPart('Legs')">Leg</button>
            <button class="body-hotspot" style="top: 75%; left: 28%; width: 15%;" onclick="speakBodyPart('Knees')">Knee</button>
            <button class="body-hotspot" style="top: 75%; left: 57%; width: 15%;" onclick="speakBodyPart('Knees')">Knee</button>
            <button class="body-hotspot" style="top: 90%; left: 22%; width: 22%;" onclick="speakBodyPart('Feet')">Foot</button>
            <button class="body-hotspot" style="top: 90%; left: 56%; width: 22%;" onclick="speakBodyPart('Feet')">Foot</button>
        </div>
    `;
    
    // Render body part cards with images
    cardsContainer.innerHTML = englishBodyParts.map((part, index) => `
        <div class="body-card" onclick="handleEnglishBodyPartTap(${index})">
            <img src="${part.image}" alt="${part.name}" class="body-card-image" onerror="this.style.display='none'">
            <div class="body-card-name">${part.name}</div>
        </div>
    `).join('');
}

// Helper function for body hotspots
function speakBodyPart(name) {
    speakEnglish(name);
    // Visual feedback
    if (Math.random() < 0.3) {
        setTimeout(showReward, 800);
    }
}

function handleEnglishBodyPartTap(index) {
    const part = englishBodyParts[index];
    speakEnglish(part.name);
    
    if (Math.random() < 0.25) {
        setTimeout(showReward, 1000);
    }
}

function renderEnglishAnimals() {
    const container = document.getElementById('english-animals-container');
    const dotsContainer = document.getElementById('english-animals-dots');
    
    container.innerHTML = englishAnimals.map((item, index) => `
        <div class="flashcard" data-index="${index}" onclick="handleEnglishAnimalTap(${index})">
            <div class="flashcard-image" style="font-size: 7rem;">${item.emoji}</div>
            <div class="flashcard-word">${item.name}</div>
            <div class="flashcard-phonetic">${item.sound}</div>
            <div class="tap-hint"><span class="tap-icon">👆</span> Tap to hear</div>
        </div>
    `).join('');
    
    renderDots(dotsContainer, englishAnimals.length, 'english-animals');
    setupSwipeNavigation(container, 'english-animals');
}

function handleEnglishAnimalTap(index) {
    const item = englishAnimals[index];
    speakEnglish(`${item.name}. The ${item.name} says ${item.sound}`);
    
    if (Math.random() < 0.25) {
        setTimeout(showReward, 1500);
    }
}

function renderVarnamala() {
    const container = document.getElementById('varnamala-container');
    const dotsContainer = document.getElementById('varnamala-dots');
    
    container.innerHTML = hindiVarnamala.map((item, index) => `
        <div class="flashcard" data-index="${index}" onclick="handleVarnamalaTap(${index})">
            <div class="flashcard-letter" style="font-size: 7rem; background: linear-gradient(135deg, hsl(${index * 8}, 70%, 50%), hsl(${index * 8 + 30}, 70%, 60%)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                ${item.letter}
            </div>
            <div class="flashcard-image">${item.emoji}</div>
            <div class="flashcard-word">${item.letter} से ${item.word}</div>
            <div class="flashcard-phonetic" style="font-size: 0.9rem; color: #888;">(${item.wordMeaning})</div>
            <div class="tap-hint"><span class="tap-icon">👆</span> Tap to hear</div>
        </div>
    `).join('');
    
    renderDots(dotsContainer, hindiVarnamala.length, 'varnamala');
    setupSwipeNavigation(container, 'varnamala');
}

function handleVarnamalaTap(index) {
    const item = hindiVarnamala[index];
    
    // Speak letter first, then "letter se word" after a pause
    speakHindi(item.letter);
    setTimeout(() => {
        speakHindi(`${item.letter} से ${item.word}`);
    }, 800);
    
    if (Math.random() < 0.3) {
        setTimeout(showReward, 2000);
    }
}

function renderHindiWords() {
    const container = document.getElementById('hindi-words-container');
    const dotsContainer = document.getElementById('hindi-words-dots');
    
    container.innerHTML = hindiWordsData.map((item, index) => `
        <div class="flashcard" data-index="${index}" onclick="handleHindiWordTap(${index})">
            <div class="flashcard-image" style="font-size: 6rem;">${item.emoji}</div>
            <div class="flashcard-word" style="font-size: 2.5rem;">${item.word}</div>
            <div class="flashcard-phonetic">(${item.meaning})</div>
            <div class="tap-hint"><span class="tap-icon">👆</span> Tap to hear</div>
        </div>
    `).join('');
    
    renderDots(dotsContainer, hindiWordsData.length, 'hindi-words');
    setupSwipeNavigation(container, 'hindi-words');
}

function handleHindiWordTap(index) {
    const item = hindiWordsData[index];
    speakHindi(item.word);
    
    if (Math.random() < 0.25) {
        setTimeout(showReward, 1000);
    }
}

function renderHindiBodyParts() {
    const figureContainer = document.getElementById('hindi-body-figure');
    const cardsContainer = document.getElementById('hindi-body-cards');
    
    figureContainer.innerHTML = `
        <h3 style="margin-bottom: 15px; color: #666;">👆 शरीर के अंग छुएँ!</h3>
        <div class="body-figure">
            <svg viewBox="0 0 100 160" style="width: 150px; height: 240px;">
                <circle cx="50" cy="20" r="15" fill="#FFD93D" stroke="#333" stroke-width="2"/>
                <line x1="50" y1="35" x2="50" y2="90" stroke="#333" stroke-width="4" stroke-linecap="round"/>
                <line x1="50" y1="50" x2="25" y2="75" stroke="#333" stroke-width="4" stroke-linecap="round"/>
                <line x1="50" y1="50" x2="75" y2="75" stroke="#333" stroke-width="4" stroke-linecap="round"/>
                <line x1="50" y1="90" x2="30" y2="140" stroke="#333" stroke-width="4" stroke-linecap="round"/>
                <line x1="50" y1="90" x2="70" y2="140" stroke="#333" stroke-width="4" stroke-linecap="round"/>
                <circle cx="43" cy="17" r="3" fill="#333"/>
                <circle cx="57" cy="17" r="3" fill="#333"/>
                <path d="M 43 27 Q 50 32 57 27" stroke="#333" stroke-width="2" fill="none"/>
            </svg>
        </div>
    `;
    
    cardsContainer.innerHTML = hindiBodyParts.map((part, index) => `
        <div class="body-card" onclick="handleHindiBodyPartTap(${index})">
            <div class="body-card-icon">${part.emoji}</div>
            <div class="body-card-name">${part.name}</div>
        </div>
    `).join('');
}

function handleHindiBodyPartTap(index) {
    const part = hindiBodyParts[index];
    speakHindi(part.name);
    
    if (Math.random() < 0.25) {
        setTimeout(showReward, 1000);
    }
}

function renderHindiAnimals() {
    const container = document.getElementById('hindi-animals-container');
    const dotsContainer = document.getElementById('hindi-animals-dots');
    
    container.innerHTML = hindiAnimals.map((item, index) => `
        <div class="flashcard" data-index="${index}" onclick="handleHindiAnimalTap(${index})">
            <div class="flashcard-image" style="font-size: 7rem;">${item.emoji}</div>
            <div class="flashcard-word" style="font-size: 2.5rem;">${item.name}</div>
            <div class="flashcard-phonetic">(${item.english})</div>
            <div class="tap-hint"><span class="tap-icon">👆</span> Tap to hear</div>
        </div>
    `).join('');
    
    renderDots(dotsContainer, hindiAnimals.length, 'hindi-animals');
    setupSwipeNavigation(container, 'hindi-animals');
}

function handleHindiAnimalTap(index) {
    const item = hindiAnimals[index];
    speakHindi(item.name);
    
    if (Math.random() < 0.25) {
        setTimeout(showReward, 1000);
    }
}

function renderNumbers() {
    const container = document.getElementById('numbers-container');
    const dotsContainer = document.getElementById('numbers-dots');
    
    container.innerHTML = numbersData.map((item, index) => `
        <div class="flashcard" data-index="${index}" onclick="handleNumberTap(${index})">
            <div class="flashcard-letter" style="font-size: 9rem; background: linear-gradient(135deg, hsl(${index * 36}, 70%, 50%), hsl(${index * 36 + 30}, 70%, 60%)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                ${item.number}
            </div>
            <div class="flashcard-word">${item.word}</div>
            <div class="flashcard-phonetic">${item.hindi}</div>
            <div style="font-size: 2rem; letter-spacing: 5px; margin-top: 15px;">${item.objects}</div>
            <div class="tap-hint"><span class="tap-icon">👆</span> Tap to count</div>
        </div>
    `).join('');
    
    renderDots(dotsContainer, numbersData.length, 'numbers');
    setupSwipeNavigation(container, 'numbers');
}

function handleNumberTap(index) {
    const item = numbersData[index];
    
    // Count out loud
    let countText = '';
    for (let i = 1; i <= item.number; i++) {
        countText += i + '. ';
    }
    speakEnglish(`${item.number}. ${item.word}. Let's count! ${countText}`);
    
    if (Math.random() < 0.3) {
        setTimeout(showReward, 2000);
    }
}

function renderShapes() {
    const container = document.getElementById('shapes-container');
    
    container.innerHTML = shapesData.map((shape, index) => `
        <div class="shape-card" onclick="handleShapeTap(${index})">
            <svg class="shape-svg" viewBox="0 0 80 80" style="color: ${shape.color};">
                ${shape.svg}
            </svg>
            <div class="shape-name">${shape.name}</div>
            <div style="color: #666; font-size: 0.9rem;">${shape.hindi}</div>
        </div>
    `).join('');
}

function handleShapeTap(index) {
    const shape = shapesData[index];
    speakEnglish(`This is a ${shape.name}`);
    
    if (Math.random() < 0.25) {
        setTimeout(showReward, 1000);
    }
}

function renderColors() {
    const container = document.getElementById('colors-container');
    
    container.innerHTML = colorsData.map((color, index) => `
        <div class="color-card" style="background: ${color.color};" onclick="handleColorTap(${index})">
            <div class="color-emoji">${color.emoji}</div>
            <div class="color-name" style="color: ${color.name === 'White' || color.name === 'Yellow' ? '#333' : 'white'};">
                ${color.name}
            </div>
            <div style="color: ${color.name === 'White' || color.name === 'Yellow' ? '#555' : 'rgba(255,255,255,0.8)'}; font-size: 0.9rem;">
                ${color.hindi}
            </div>
        </div>
    `).join('');
}

function handleColorTap(index) {
    const color = colorsData[index];
    speakEnglish(`${color.name}. This is the color ${color.name}`);
    
    if (Math.random() < 0.25) {
        setTimeout(showReward, 1000);
    }
}

// ==========================================
// Navigation Dots
// ==========================================
function renderDots(container, count, sectionId) {
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('div');
        dot.className = 'nav-dot' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dot.onclick = () => scrollToCard(sectionId, i);
        container.appendChild(dot);
    }
}

function scrollToCard(sectionId, index) {
    const container = document.getElementById(sectionId + '-container');
    const cards = container.querySelectorAll('.flashcard');
    if (cards[index]) {
        cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        updateActiveDot(sectionId, index);
    }
}

function updateActiveDot(sectionId, index) {
    const dotsContainer = document.getElementById(sectionId + '-dots');
    if (dotsContainer) {
        dotsContainer.querySelectorAll('.nav-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
}

function setupSwipeNavigation(container, sectionId) {
    let scrollTimeout;
    container.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const cards = container.querySelectorAll('.flashcard');
            const containerRect = container.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;
            
            let closestIndex = 0;
            let closestDistance = Infinity;
            
            cards.forEach((card, index) => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                const distance = Math.abs(cardCenter - containerCenter);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });
            
            updateActiveDot(sectionId, closestIndex);
        }, 100);
    });
}

// ==========================================
// Event Listeners
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Hide splash screen after loading
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
    }, 2000);
    
    // Update stars display
    updateStarsDisplay();
    
    // Section card clicks (home screen)
    document.querySelectorAll('.section-card').forEach(card => {
        card.addEventListener('click', () => {
            const section = card.dataset.section;
            navigateToSection(section);
        });
    });
    
    // Menu card clicks
    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('click', () => {
            const page = card.dataset.page;
            navigateToPage(page);
        });
    });
    
    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.back;
            if (target === 'home') {
                showScreen('home');
            } else {
                showScreen(target);
            }
        });
    });
    
    // Reward modal click to dismiss
    document.getElementById('reward-modal').addEventListener('click', () => {
        document.getElementById('reward-modal').classList.add('hidden');
    });
});

// ==========================================
// Service Worker Registration
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
