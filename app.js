/**
 * Learn & Play - Educational App for Kids
 * Interactive learning with audio, animations, and rewards
 */

// ==========================================
// Data: English Alphabets with Words
// ==========================================
const alphabetsData = [
    { letter: 'A', word: 'Apple', emoji: '🍎', phonetic: '/ˈæpəl/', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&h=500&fit=crop' },
    { letter: 'B', word: 'Ball', emoji: '⚽', phonetic: '/bɔːl/', image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=500&fit=crop' },
    { letter: 'C', word: 'Cat', emoji: '🐱', phonetic: '/kæt/', image: 'https://images.unsplash.com/photo-1748347269010-fb75a6e9bbfa?w=500&h=500&fit=crop' },
    { letter: 'D', word: 'Dog', emoji: '🐕', phonetic: '/dɒɡ/', image: 'https://images.unsplash.com/photo-1693615775129-f2004d6e3e0b?w=500&h=500&fit=crop' },
    { letter: 'E', word: 'Elephant', emoji: '🐘', phonetic: '/ˈelɪfənt/', image: 'https://images.unsplash.com/photo-1745526180300-443ef46e6a73?w=500&h=500&fit=crop' },
    { letter: 'F', word: 'Fish', emoji: '🐟', phonetic: '/fɪʃ/', image: 'https://images.unsplash.com/photo-1712672117537-0ab4f26d1e7c?w=500&h=500&fit=crop' },
    { letter: 'G', word: 'Grapes', emoji: '🍇', phonetic: '/ɡreɪps/', image: 'https://images.unsplash.com/photo-1698703428304-5ea0e245e266?w=500&h=500&fit=crop' },
    { letter: 'H', word: 'House', emoji: '🏠', phonetic: '/haʊs/', image: 'https://images.pexels.com/photos/226407/pexels-photo-226407.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop' },
    { letter: 'I', word: 'Ice Cream', emoji: '🍦', phonetic: '/aɪs kriːm/', image: 'https://images.unsplash.com/photo-1691200324934-d1fca4986671?w=500&h=500&fit=crop' },
    { letter: 'J', word: 'Jug', emoji: '🫖', phonetic: '/dʒʌɡ/', image: 'https://images.unsplash.com/photo-1560871401-6f0f987a5102?w=500&h=500&fit=crop' },
    { letter: 'K', word: 'Kite', emoji: '🪁', phonetic: '/kaɪt/', image: 'https://images.unsplash.com/photo-1666626238358-24d592bd5e18?w=500&h=500&fit=crop' },
    { letter: 'L', word: 'Lion', emoji: '🦁', phonetic: '/ˈlaɪən/', image: 'https://images.unsplash.com/photo-1760719438551-6c5408b122e9?w=500&h=500&fit=crop' },
    { letter: 'M', word: 'Monkey', emoji: '🐒', phonetic: '/ˈmʌŋki/', image: 'https://images.unsplash.com/photo-1752779360809-9160c5a97ea8?w=500&h=500&fit=crop' },
    { letter: 'N', word: 'Nest', emoji: '🪺', phonetic: '/nest/', image: 'https://images.unsplash.com/photo-1687816874718-c4e5f085296a?w=500&h=500&fit=crop' },
    { letter: 'O', word: 'Orange', emoji: '🍊', phonetic: '/ˈɒrɪndʒ/', image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500&h=500&fit=crop' },
    { letter: 'P', word: 'Parrot', emoji: '🦜', phonetic: '/ˈpærət/', image: 'https://images.unsplash.com/photo-1752654286988-3e3e56485d44?w=500&h=500&fit=crop' },
    { letter: 'Q', word: 'Queen', emoji: '👸', phonetic: '/kwiːn/', image: 'https://images.unsplash.com/photo-1640351692396-d8401b1709f4?w=500&h=500&fit=crop&crop=faces' },
    { letter: 'R', word: 'Rabbit', emoji: '🐰', phonetic: '/ˈræbɪt/', image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&h=500&fit=crop' },
    { letter: 'S', word: 'Sun', emoji: '☀️', phonetic: '/sʌn/', image: 'https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?w=500&h=500&fit=crop' },
    { letter: 'T', word: 'Tiger', emoji: '🐯', phonetic: '/ˈtaɪɡər/', image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=500&h=500&fit=crop' },
    { letter: 'U', word: 'Umbrella', emoji: '☂️', phonetic: '/ʌmˈbrelə/', image: 'https://images.unsplash.com/photo-1539443303960-a90a4e7ecc97?w=500&h=500&fit=crop' },
    { letter: 'V', word: 'Van', emoji: '🚐', phonetic: '/væn/', image: 'https://images.unsplash.com/photo-1674570995790-73fcb685f696?w=500&h=500&fit=crop' },
    { letter: 'W', word: 'Watch', emoji: '⌚', phonetic: '/wɒtʃ/', image: 'https://images.unsplash.com/photo-1543428390-8bc1a79ff735?w=500&h=500&fit=crop' },
    { letter: 'X', word: 'Xylophone', emoji: '🎵', phonetic: '/ˈzaɪləfoʊn/', image: 'https://images.pexels.com/photos/6743155/pexels-photo-6743155.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop' },
    { letter: 'Y', word: 'Yak', emoji: '🦬', phonetic: '/jæk/', image: 'https://images.unsplash.com/photo-1741259114170-a8b20c755c58?w=500&h=500&fit=crop' },
    { letter: 'Z', word: 'Zebra', emoji: '🦓', phonetic: '/ˈziːbrə/', image: 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=500&h=500&fit=crop' }
];

// ==========================================
// Data: English Words (Common Objects)
// ==========================================
const englishWordsData = [
    { word: 'Book', emoji: '📚', category: 'objects', image: 'https://images.unsplash.com/photo-1660924198796-e14938ba4516?w=500&h=500&fit=crop' },
    { word: 'Chair', emoji: '🪑', category: 'furniture', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&h=500&fit=crop' },
    { word: 'Sofa', emoji: '🛋️', category: 'furniture', image: 'https://images.pexels.com/photos/5998023/pexels-photo-5998023.jpeg?w=500&h=500&fit=crop' },
    { word: 'Bed', emoji: '🛏️', category: 'furniture', image: 'https://images.unsplash.com/photo-1774427697365-f3f50b6d5eca?w=500&h=500&fit=crop' },
    { word: 'Car', emoji: '🚗', category: 'vehicles', image: 'https://images.pexels.com/photos/7925480/pexels-photo-7925480.jpeg?w=500&h=500&fit=crop' },
    { word: 'Bus', emoji: '🚌', category: 'vehicles', image: 'https://images.unsplash.com/photo-1587232439648-04e7feaf1777?w=500&h=500&fit=crop' },
    { word: 'Train', emoji: '🚂', category: 'vehicles', image: 'https://images.unsplash.com/photo-1662555327334-6d52c4f8a702?w=500&h=500&fit=crop' },
    { word: 'Plane', emoji: '✈️', category: 'vehicles', image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=500&h=500&fit=crop' },
    { word: 'Flower', emoji: '🌸', category: 'nature', image: 'https://images.unsplash.com/photo-1592042616246-8d9a8f583e8a?w=500&h=500&fit=crop' },
    { word: 'Tree', emoji: '🌳', category: 'nature', image: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=500&h=500&fit=crop' },
    { word: 'Star', emoji: '⭐', category: 'nature', image: 'https://images.unsplash.com/photo-1766995596065-590702fcce47?w=500&h=500&fit=crop' },
    { word: 'Moon', emoji: '🌙', category: 'nature', image: 'https://images.unsplash.com/photo-1477005264461-b0e201668d92?w=500&h=500&fit=crop' },
    { word: 'Water', emoji: '💧', category: 'nature', image: 'https://images.unsplash.com/photo-1657368567330-662b92e03dcc?w=500&h=500&fit=crop' },
    { word: 'Milk', emoji: '🥛', category: 'food', image: 'https://images.unsplash.com/photo-1576186726188-c9d70843790f?w=500&h=500&fit=crop' },
    { word: 'Bread', emoji: '🍞', category: 'food', image: 'https://images.unsplash.com/photo-1552056413-b8b5eed0170b?w=500&h=500&fit=crop' },
    { word: 'Rice', emoji: '🍚', category: 'food', image: 'https://images.pexels.com/photos/8956718/pexels-photo-8956718.jpeg?w=500&h=500&fit=crop' },
    { word: 'Banana', emoji: '🍌', category: 'food', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&h=500&fit=crop' },
    { word: 'Cake', emoji: '🎂', category: 'food', image: 'https://images.unsplash.com/photo-1602663491496-73f07481dbea?w=500&h=500&fit=crop' },
    { word: 'Shirt', emoji: '👕', category: 'clothes', image: 'https://images.pexels.com/photos/11671964/pexels-photo-11671964.jpeg?w=500&h=500&fit=crop' },
    { word: 'Shoes', emoji: '👟', category: 'clothes', image: 'https://images.unsplash.com/photo-1552912276-56ef47874741?w=500&h=500&fit=crop' }
];

// ==========================================
// Data: English Body Parts
// ==========================================
const englishBodyParts = [
    { name: 'Head', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
    { name: 'Hair', image: 'https://images.pexels.com/photos/6923558/pexels-photo-6923558.jpeg?w=400&h=400&fit=crop' },
    { name: 'Eye', image: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?w=400&h=400&fit=crop' },
    { name: 'Eyebrow', image: 'https://images.unsplash.com/photo-1592999177797-0f96d5617ed3?w=400&h=400&fit=crop' },
    { name: 'Ear', image: 'https://images.unsplash.com/photo-1634656883281-3a665dd2bb8a?w=400&h=400&fit=crop' },
    { name: 'Nose', image: 'https://images.unsplash.com/photo-1635004468086-a4c2ba6ba428?w=400&h=400&fit=crop' },
    { name: 'Mouth', image: 'https://images.pexels.com/photos/65665/smile-mouth-teeth-laugh-65665.jpeg?w=400&h=400&fit=crop' },
    { name: 'Lips', image: 'https://images.pexels.com/photos/7479536/pexels-photo-7479536.jpeg?w=400&h=400&fit=crop' },
    { name: 'Teeth', image: 'https://images.pexels.com/photos/12474261/pexels-photo-12474261.jpeg?w=400&h=400&fit=crop' },
    { name: 'Cheek', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop' },
    { name: 'Chin', image: 'https://images.unsplash.com/photo-1648210403167-0d9142f7cec5?w=400&h=400&fit=crop' },
    { name: 'Neck', image: 'https://images.pexels.com/photos/2734173/pexels-photo-2734173.jpeg?w=400&h=400&fit=crop' },
    { name: 'Shoulder', image: 'https://images.pexels.com/photos/8093085/pexels-photo-8093085.jpeg?w=400&h=400&fit=crop' },
    { name: 'Arm', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=400&fit=crop' },
    { name: 'Elbow', image: 'https://images.pexels.com/photos/8626074/pexels-photo-8626074.jpeg?w=400&h=400&fit=crop' },
    { name: 'Hand', image: 'https://images.unsplash.com/photo-1447619297994-b829cc1ab44a?w=400&h=400&fit=crop' },
    { name: 'Finger', image: 'https://images.pexels.com/photos/9017408/pexels-photo-9017408.jpeg?w=400&h=400&fit=crop' },
    { name: 'Tummy', image: 'https://images.pexels.com/photos/5846883/pexels-photo-5846883.jpeg?w=400&h=400&fit=crop' },
    { name: 'Leg', image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=400&fit=crop' },
    { name: 'Knee', image: 'https://images.unsplash.com/photo-1626623936480-15fd56a295f8?w=400&h=400&fit=crop' },
    { name: 'Foot', image: 'https://images.unsplash.com/photo-1637662722004-68be528ef359?w=400&h=400&fit=crop' },
    { name: 'Toe', image: 'https://images.unsplash.com/photo-1504751692041-39fb8c56d189?w=400&h=400&fit=crop' }
];

// Real full-body photo with tappable labels pointing to the major parts.
// top/left are percentages within the image, so they track correctly at
// any container width (phone, tablet, etc). `side` picks which margin
// the label pill sits in.
const englishBodyDiagram = {
    image: 'https://images.pexels.com/photos/5560007/pexels-photo-5560007.jpeg?w=800&h=1200&fit=crop',
    labels: [
        { name: 'Hair', top: 5, left: 50, side: 'left' },
        { name: 'Eye', top: 15, left: 44, side: 'left' },
        { name: 'Ear', top: 19, left: 60, side: 'right' },
        { name: 'Mouth', top: 24, left: 48, side: 'left' },
        { name: 'Shoulder', top: 29, left: 33, side: 'left' },
        { name: 'Tummy', top: 40, left: 50, side: 'right' },
        { name: 'Arm', top: 45, left: 30, side: 'left' },
        { name: 'Hand', top: 50, left: 47, side: 'right' },
        { name: 'Leg', top: 70, left: 45, side: 'left' },
        { name: 'Foot', top: 93, left: 43, side: 'right' }
    ]
};

// ==========================================
// Data: English Animals
// ==========================================
const englishAnimals = [
    { name: 'Lion', emoji: '🦁', sound: 'Roar!', image: 'https://images.unsplash.com/photo-1618641662184-bafefb91a542?w=500&h=500&fit=crop' },
    { name: 'Tiger', emoji: '🐯', sound: 'Roar!', image: 'https://images.unsplash.com/photo-1686648420191-3a4d35073fd6?w=500&h=500&fit=crop' },
    { name: 'Elephant', emoji: '🐘', sound: 'Trumpet!', image: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=500&h=500&fit=crop' },
    { name: 'Monkey', emoji: '🐒', sound: 'Ooh ooh!', image: 'https://images.unsplash.com/photo-1554457945-ba5df6648602?w=500&h=500&fit=crop' },
    { name: 'Dog', emoji: '🐕', sound: 'Woof woof!', image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=500&h=500&fit=crop' },
    { name: 'Cat', emoji: '🐱', sound: 'Meow!', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&h=500&fit=crop' },
    { name: 'Cow', emoji: '🐄', sound: 'Moo!', image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=500&h=500&fit=crop' },
    { name: 'Horse', emoji: '🐴', sound: 'Neigh!', image: 'https://images.unsplash.com/photo-1562163170-4a023d7c99e7?w=500&h=500&fit=crop' },
    { name: 'Sheep', emoji: '🐑', sound: 'Baa!', image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=500&h=500&fit=crop' },
    { name: 'Pig', emoji: '🐷', sound: 'Oink!', image: 'https://images.unsplash.com/photo-1587213128862-80345e23a71a?w=500&h=500&fit=crop' },
    { name: 'Duck', emoji: '🦆', sound: 'Quack!', image: 'https://images.unsplash.com/photo-1521730365094-d6978fa2ac8d?w=500&h=500&fit=crop' },
    { name: 'Chicken', emoji: '🐔', sound: 'Cluck!', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500&h=500&fit=crop' },
    { name: 'Bird', emoji: '🐦', sound: 'Tweet!', image: 'https://images.unsplash.com/photo-1574068468026-2d19b85e69bf?w=500&h=500&fit=crop' },
    { name: 'Fish', emoji: '🐟', sound: 'Blub!', image: 'https://images.unsplash.com/photo-1625369708811-65ebfc5ca632?w=500&h=500&fit=crop' },
    { name: 'Frog', emoji: '🐸', sound: 'Ribbit!', image: 'https://images.unsplash.com/photo-1545006398-2cf47cd87b90?w=500&h=500&fit=crop' },
    { name: 'Bear', emoji: '🐻', sound: 'Growl!', image: 'https://images.unsplash.com/photo-1611504262166-fa362a217f5c?w=500&h=500&fit=crop' },
    { name: 'Rabbit', emoji: '🐰', sound: 'Squeak!', image: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?w=500&h=500&fit=crop' },
    { name: 'Giraffe', emoji: '🦒', sound: 'Hum!', image: 'https://images.unsplash.com/photo-1554490828-442467b562dd?w=500&h=500&fit=crop' },
    { name: 'Zebra', emoji: '🦓', sound: 'Bark!', image: 'https://images.unsplash.com/photo-1526319238109-524eecb9b913?w=500&h=500&fit=crop' },
    { name: 'Peacock', emoji: '🦚', sound: 'Scream!', image: 'https://images.unsplash.com/photo-1554658506-487b008909d1?w=500&h=500&fit=crop' }
];

// ==========================================
// Data: Hindi Varnamala (Vowels + Consonants)
// ==========================================
const hindiVarnamala = [
    // Vowels (स्वर)
    { letter: 'अ', word: 'अनार', wordMeaning: 'Pomegranate', emoji: '🍎', type: 'vowel', image: 'https://images.unsplash.com/photo-1574709755254-fcd942d09d5a?w=500&h=500&fit=crop' },
    { letter: 'आ', word: 'आम', wordMeaning: 'Mango', emoji: '🥭', type: 'vowel', image: 'https://images.pexels.com/photos/36579504/pexels-photo-36579504.jpeg?w=500&h=500&fit=crop' },
    { letter: 'इ', word: 'इमली', wordMeaning: 'Tamarind', emoji: '🌿', type: 'vowel', image: 'https://images.unsplash.com/photo-1765292745873-8cb43eeefa77?w=500&h=500&fit=crop' },
    { letter: 'ई', word: 'ईख', wordMeaning: 'Sugarcane', emoji: '🎋', type: 'vowel', image: 'https://images.pexels.com/photos/37753396/pexels-photo-37753396.jpeg?w=500&h=500&fit=crop' },
    { letter: 'उ', word: 'उल्लू', wordMeaning: 'Owl', emoji: '🦉', type: 'vowel', image: 'https://images.unsplash.com/photo-1553264701-d138db4fd5d4?w=500&h=500&fit=crop' },
    { letter: 'ऊ', word: 'ऊन', wordMeaning: 'Wool', emoji: '🧶', type: 'vowel', image: 'https://images.unsplash.com/photo-1517490970599-197965fbcef4?w=500&h=500&fit=crop' },
    { letter: 'ए', word: 'एड़ी', wordMeaning: 'Heel', emoji: '🦶', type: 'vowel', image: 'https://images.pexels.com/photos/7886226/pexels-photo-7886226.jpeg?w=500&h=500&fit=crop' },
    { letter: 'ऐ', word: 'ऐनक', wordMeaning: 'Glasses', emoji: '👓', type: 'vowel', image: 'https://images.unsplash.com/photo-1614715838608-dd527c46231d?w=500&h=500&fit=crop' },
    { letter: 'ओ', word: 'ओखली', wordMeaning: 'Mortar', emoji: '🥣', type: 'vowel', image: 'https://images.unsplash.com/photo-1492552296703-4ec0a2fb3715?w=500&h=500&fit=crop' },
    { letter: 'औ', word: 'औरत', wordMeaning: 'Woman', emoji: '👩', type: 'vowel', image: 'https://images.unsplash.com/photo-1463335361701-e90f4c5045d0?w=500&h=500&fit=crop' },
    { letter: 'अं', word: 'अंगूर', wordMeaning: 'Grapes', emoji: '🍇', type: 'vowel', image: 'https://images.unsplash.com/photo-1698703428304-5ea0e245e266?w=500&h=500&fit=crop' },
    { letter: 'अः', word: 'अः', wordMeaning: 'Sound', emoji: '🔊', type: 'vowel' },
    // Consonants (व्यंजन)
    { letter: 'क', word: 'कमल', wordMeaning: 'Lotus', emoji: '🪷', type: 'consonant', image: 'https://images.unsplash.com/photo-1538998073820-4dfa76300194?w=500&h=500&fit=crop' },
    { letter: 'ख', word: 'खरगोश', wordMeaning: 'Rabbit', emoji: '🐰', type: 'consonant', image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&h=500&fit=crop' },
    { letter: 'ग', word: 'गाय', wordMeaning: 'Cow', emoji: '🐄', type: 'consonant', image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=500&h=500&fit=crop' },
    { letter: 'घ', word: 'घड़ी', wordMeaning: 'Clock', emoji: '⏰', type: 'consonant', image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&h=500&fit=crop' },
    { letter: 'च', word: 'चम्मच', wordMeaning: 'Spoon', emoji: '🥄', type: 'consonant', image: 'https://images.unsplash.com/photo-1619367300933-376d8c5cd5f9?w=500&h=500&fit=crop' },
    { letter: 'छ', word: 'छाता', wordMeaning: 'Umbrella', emoji: '☂️', type: 'consonant', image: 'https://images.unsplash.com/photo-1539443303960-a90a4e7ecc97?w=500&h=500&fit=crop' },
    { letter: 'ज', word: 'जहाज़', wordMeaning: 'Ship', emoji: '🚢', type: 'consonant', image: 'https://images.unsplash.com/photo-1552207802-77bcb0d13122?w=500&h=500&fit=crop' },
    { letter: 'झ', word: 'झंडा', wordMeaning: 'Flag', emoji: '🚩', type: 'consonant', image: 'https://images.pexels.com/photos/6476047/pexels-photo-6476047.jpeg?w=500&h=500&fit=crop' },
    { letter: 'ट', word: 'टमाटर', wordMeaning: 'Tomato', emoji: '🍅', type: 'consonant', image: 'https://images.pexels.com/photos/33749230/pexels-photo-33749230.jpeg?w=500&h=500&fit=crop' },
    { letter: 'ठ', word: 'ठठेरा', wordMeaning: 'Tinsmith', emoji: '🔨', type: 'consonant', image: 'https://images.pexels.com/photos/11566773/pexels-photo-11566773.jpeg?w=500&h=500&fit=crop' },
    { letter: 'ड', word: 'डमरू', wordMeaning: 'Drum', emoji: '🪘', type: 'consonant', image: 'https://images.pexels.com/photos/35631778/pexels-photo-35631778.jpeg?w=500&h=500&fit=crop' },
    { letter: 'ढ', word: 'ढोल', wordMeaning: 'Drum', emoji: '🥁', type: 'consonant', image: 'https://images.pexels.com/photos/32652559/pexels-photo-32652559.jpeg?w=500&h=500&fit=crop' },
    { letter: 'त', word: 'तरबूज़', wordMeaning: 'Watermelon', emoji: '🍉', type: 'consonant', image: 'https://images.unsplash.com/photo-1581074817932-af423ba4566e?w=500&h=500&fit=crop' },
    { letter: 'थ', word: 'थाली', wordMeaning: 'Plate', emoji: '🍽️', type: 'consonant', image: 'https://images.pexels.com/photos/8148149/pexels-photo-8148149.jpeg?w=500&h=500&fit=crop' },
    { letter: 'द', word: 'दीया', wordMeaning: 'Lamp', emoji: '🪔', type: 'consonant', image: 'https://images.pexels.com/photos/13689170/pexels-photo-13689170.jpeg?w=500&h=500&fit=crop' },
    { letter: 'ध', word: 'धनुष', wordMeaning: 'Bow', emoji: '🏹', type: 'consonant', image: 'https://images.pexels.com/photos/34610755/pexels-photo-34610755.jpeg?w=500&h=500&fit=crop' },
    { letter: 'न', word: 'नल', wordMeaning: 'Tap', emoji: '🚰', type: 'consonant', image: 'https://images.pexels.com/photos/36215888/pexels-photo-36215888.jpeg?w=500&h=500&fit=crop' },
    { letter: 'प', word: 'पतंग', wordMeaning: 'Kite', emoji: '🪁', type: 'consonant', image: 'https://images.unsplash.com/photo-1666626238358-24d592bd5e18?w=500&h=500&fit=crop' },
    { letter: 'फ', word: 'फूल', wordMeaning: 'Flower', emoji: '🌸', type: 'consonant', image: 'https://images.unsplash.com/photo-1592042616246-8d9a8f583e8a?w=500&h=500&fit=crop' },
    { letter: 'ब', word: 'बत्तख़', wordMeaning: 'Duck', emoji: '🦆', type: 'consonant', image: 'https://images.unsplash.com/photo-1521730365094-d6978fa2ac8d?w=500&h=500&fit=crop' },
    { letter: 'भ', word: 'भालू', wordMeaning: 'Bear', emoji: '🐻', type: 'consonant', image: 'https://images.unsplash.com/photo-1611504262166-fa362a217f5c?w=500&h=500&fit=crop' },
    { letter: 'म', word: 'मछली', wordMeaning: 'Fish', emoji: '🐟', type: 'consonant', image: 'https://images.unsplash.com/photo-1712672117537-0ab4f26d1e7c?w=500&h=500&fit=crop' },
    { letter: 'य', word: 'याक', wordMeaning: 'Yak', emoji: '🦬', type: 'consonant', image: 'https://images.unsplash.com/photo-1741259114170-a8b20c755c58?w=500&h=500&fit=crop' },
    { letter: 'र', word: 'रथ', wordMeaning: 'Chariot', emoji: '🏎️', type: 'consonant', image: 'https://images.pexels.com/photos/39362306/pexels-photo-39362306.jpeg?w=500&h=500&fit=crop' },
    { letter: 'ल', word: 'लड्डू', wordMeaning: 'Sweet', emoji: '🍬', type: 'consonant', image: 'https://images.pexels.com/photos/8659010/pexels-photo-8659010.jpeg?w=500&h=500&fit=crop' },
    { letter: 'व', word: 'वायलिन', wordMeaning: 'Violin', emoji: '🎻', type: 'consonant', image: 'https://images.pexels.com/photos/5855909/pexels-photo-5855909.jpeg?w=500&h=500&fit=crop' },
    { letter: 'श', word: 'शेर', wordMeaning: 'Lion', emoji: '🦁', type: 'consonant', image: 'https://images.unsplash.com/photo-1618641662184-bafefb91a542?w=500&h=500&fit=crop' },
    { letter: 'ष', word: 'षट्कोण', wordMeaning: 'Hexagon', emoji: '⬡', type: 'consonant', image: 'https://images.pexels.com/photos/12391587/pexels-photo-12391587.jpeg?w=500&h=500&fit=crop' },
    { letter: 'स', word: 'सेब', wordMeaning: 'Apple', emoji: '🍎', type: 'consonant', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&h=500&fit=crop' },
    { letter: 'ह', word: 'हाथी', wordMeaning: 'Elephant', emoji: '🐘', type: 'consonant', image: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=500&h=500&fit=crop' }
];

// ==========================================
// Data: Hindi Words
// ==========================================
const hindiWordsData = [
    { word: 'माँ', meaning: 'Mother', emoji: '👩', image: 'https://images.pexels.com/photos/4589461/pexels-photo-4589461.jpeg?w=500&h=500&fit=crop' },
    { word: 'पापा', meaning: 'Father', emoji: '👨', image: 'https://images.pexels.com/photos/105952/pexels-photo-105952.jpeg?w=500&h=500&fit=crop' },
    { word: 'दादी', meaning: 'Grandmother', emoji: '👵', image: 'https://images.pexels.com/photos/19527158/pexels-photo-19527158.jpeg?w=500&h=500&fit=crop' },
    { word: 'दादा', meaning: 'Grandfather', emoji: '👴', image: 'https://images.pexels.com/photos/38544128/pexels-photo-38544128.jpeg?w=500&h=500&fit=crop' },
    { word: 'पानी', meaning: 'Water', emoji: '💧', image: 'https://images.unsplash.com/photo-1657368567330-662b92e03dcc?w=500&h=500&fit=crop' },
    { word: 'दूध', meaning: 'Milk', emoji: '🥛', image: 'https://images.unsplash.com/photo-1576186726188-c9d70843790f?w=500&h=500&fit=crop' },
    { word: 'रोटी', meaning: 'Bread', emoji: '🫓', image: 'https://images.pexels.com/photos/12427834/pexels-photo-12427834.jpeg?w=500&h=500&fit=crop' },
    { word: 'चावल', meaning: 'Rice', emoji: '🍚', image: 'https://images.pexels.com/photos/8956718/pexels-photo-8956718.jpeg?w=500&h=500&fit=crop' },
    { word: 'फल', meaning: 'Fruit', emoji: '🍎', image: 'https://images.pexels.com/photos/10821202/pexels-photo-10821202.jpeg?w=500&h=500&fit=crop' },
    { word: 'सब्ज़ी', meaning: 'Vegetable', emoji: '🥬', image: 'https://images.pexels.com/photos/5033529/pexels-photo-5033529.jpeg?w=500&h=500&fit=crop' },
    { word: 'घर', meaning: 'Home', emoji: '🏠', image: 'https://images.pexels.com/photos/226407/pexels-photo-226407.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop' },
    { word: 'स्कूल', meaning: 'School', emoji: '🏫', image: 'https://images.pexels.com/photos/8500630/pexels-photo-8500630.jpeg?w=500&h=500&fit=crop' },
    { word: 'किताब', meaning: 'Book', emoji: '📚', image: 'https://images.unsplash.com/photo-1660924198796-e14938ba4516?w=500&h=500&fit=crop' },
    { word: 'कलम', meaning: 'Pen', emoji: '🖊️', image: 'https://images.pexels.com/photos/29091634/pexels-photo-29091634.jpeg?w=500&h=500&fit=crop' },
    { word: 'गेंद', meaning: 'Ball', emoji: '⚽', image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=500&fit=crop' },
    { word: 'गुड़िया', meaning: 'Doll', emoji: '🎎', image: 'https://images.pexels.com/photos/38286876/pexels-photo-38286876.jpeg?w=500&h=500&fit=crop' },
    { word: 'सूरज', meaning: 'Sun', emoji: '☀️', image: 'https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?w=500&h=500&fit=crop' },
    { word: 'चाँद', meaning: 'Moon', emoji: '🌙', image: 'https://images.unsplash.com/photo-1477005264461-b0e201668d92?w=500&h=500&fit=crop' },
    { word: 'तारे', meaning: 'Stars', emoji: '⭐', image: 'https://images.unsplash.com/photo-1766995596065-590702fcce47?w=500&h=500&fit=crop' },
    { word: 'बारिश', meaning: 'Rain', emoji: '🌧️', image: 'https://images.pexels.com/photos/5135437/pexels-photo-5135437.jpeg?w=500&h=500&fit=crop' }
];

// ==========================================
// Data: Hindi Body Parts
// ==========================================
const hindiBodyParts = [
    { name: 'सिर', english: 'Head', emoji: '👤', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
    { name: 'बाल', english: 'Hair', emoji: '💇', image: 'https://images.pexels.com/photos/6923558/pexels-photo-6923558.jpeg?w=400&h=400&fit=crop' },
    { name: 'आँखें', english: 'Eyes', emoji: '👀', image: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?w=400&h=400&fit=crop' },
    { name: 'नाक', english: 'Nose', emoji: '👃', image: 'https://images.unsplash.com/photo-1635004468086-a4c2ba6ba428?w=400&h=400&fit=crop' },
    { name: 'मुँह', english: 'Mouth', emoji: '👄', image: 'https://images.pexels.com/photos/65665/smile-mouth-teeth-laugh-65665.jpeg?w=400&h=400&fit=crop' },
    { name: 'कान', english: 'Ears', emoji: '👂', image: 'https://images.unsplash.com/photo-1634656883281-3a665dd2bb8a?w=400&h=400&fit=crop' },
    { name: 'गर्दन', english: 'Neck', emoji: '👤', image: 'https://images.pexels.com/photos/2734173/pexels-photo-2734173.jpeg?w=400&h=400&fit=crop' },
    { name: 'कंधे', english: 'Shoulders', emoji: '👤', image: 'https://images.pexels.com/photos/8093085/pexels-photo-8093085.jpeg?w=400&h=400&fit=crop' },
    { name: 'बाज़ू', english: 'Arms', emoji: '💪', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=400&fit=crop' },
    { name: 'हाथ', english: 'Hands', emoji: '🤚', image: 'https://images.unsplash.com/photo-1447619297994-b829cc1ab44a?w=400&h=400&fit=crop' },
    { name: 'उँगलियाँ', english: 'Fingers', emoji: '🖐️', image: 'https://images.pexels.com/photos/9017408/pexels-photo-9017408.jpeg?w=400&h=400&fit=crop' },
    { name: 'छाती', english: 'Chest', emoji: '👤', image: 'https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg?w=400&h=400&fit=crop' },
    { name: 'पेट', english: 'Tummy', emoji: '👤', image: 'https://images.pexels.com/photos/5846883/pexels-photo-5846883.jpeg?w=400&h=400&fit=crop' },
    { name: 'टांगें', english: 'Legs', emoji: '🦵', image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=400&fit=crop' },
    { name: 'घुटने', english: 'Knees', emoji: '🦵', image: 'https://images.unsplash.com/photo-1626623936480-15fd56a295f8?w=400&h=400&fit=crop' },
    { name: 'पैर', english: 'Feet', emoji: '🦶', image: 'https://images.unsplash.com/photo-1637662722004-68be528ef359?w=400&h=400&fit=crop' },
    { name: 'पैर की उँगलियाँ', english: 'Toes', emoji: '🦶', image: 'https://images.unsplash.com/photo-1504751692041-39fb8c56d189?w=400&h=400&fit=crop' }
];

// Real full-body photo with tappable Hindi labels — same photo and layout
// as the English diagram, just relabeled.
const hindiBodyDiagram = {
    image: 'https://images.pexels.com/photos/5560007/pexels-photo-5560007.jpeg?w=800&h=1200&fit=crop',
    labels: [
        { name: 'बाल', top: 5, left: 50, side: 'left' },
        { name: 'आँखें', top: 15, left: 44, side: 'left' },
        { name: 'कान', top: 19, left: 60, side: 'right' },
        { name: 'मुँह', top: 24, left: 48, side: 'left' },
        { name: 'कंधे', top: 29, left: 33, side: 'left' },
        { name: 'पेट', top: 40, left: 50, side: 'right' },
        { name: 'बाज़ू', top: 45, left: 30, side: 'left' },
        { name: 'हाथ', top: 50, left: 47, side: 'right' },
        { name: 'टांगें', top: 70, left: 45, side: 'left' },
        { name: 'पैर', top: 93, left: 43, side: 'right' }
    ]
};

// ==========================================
// Data: Hindi Animals
// ==========================================
const hindiAnimals = [
    { name: 'शेर', english: 'Lion', emoji: '🦁', image: 'https://images.unsplash.com/photo-1618641662184-bafefb91a542?w=500&h=500&fit=crop' },
    { name: 'बाघ', english: 'Tiger', emoji: '🐯', image: 'https://images.unsplash.com/photo-1686648420191-3a4d35073fd6?w=500&h=500&fit=crop' },
    { name: 'हाथी', english: 'Elephant', emoji: '🐘', image: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=500&h=500&fit=crop' },
    { name: 'बंदर', english: 'Monkey', emoji: '🐒', image: 'https://images.unsplash.com/photo-1554457945-ba5df6648602?w=500&h=500&fit=crop' },
    { name: 'कुत्ता', english: 'Dog', emoji: '🐕', image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=500&h=500&fit=crop' },
    { name: 'बिल्ली', english: 'Cat', emoji: '🐱', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&h=500&fit=crop' },
    { name: 'गाय', english: 'Cow', emoji: '🐄', image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=500&h=500&fit=crop' },
    { name: 'घोड़ा', english: 'Horse', emoji: '🐴', image: 'https://images.unsplash.com/photo-1562163170-4a023d7c99e7?w=500&h=500&fit=crop' },
    { name: 'भेड़', english: 'Sheep', emoji: '🐑', image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=500&h=500&fit=crop' },
    { name: 'सूअर', english: 'Pig', emoji: '🐷', image: 'https://images.unsplash.com/photo-1587213128862-80345e23a71a?w=500&h=500&fit=crop' },
    { name: 'बत्तख़', english: 'Duck', emoji: '🦆', image: 'https://images.unsplash.com/photo-1521730365094-d6978fa2ac8d?w=500&h=500&fit=crop' },
    { name: 'मुर्गी', english: 'Chicken', emoji: '🐔', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500&h=500&fit=crop' },
    { name: 'चिड़िया', english: 'Bird', emoji: '🐦', image: 'https://images.unsplash.com/photo-1574068468026-2d19b85e69bf?w=500&h=500&fit=crop' },
    { name: 'मछली', english: 'Fish', emoji: '🐟', image: 'https://images.unsplash.com/photo-1625369708811-65ebfc5ca632?w=500&h=500&fit=crop' },
    { name: 'मेंढक', english: 'Frog', emoji: '🐸', image: 'https://images.unsplash.com/photo-1545006398-2cf47cd87b90?w=500&h=500&fit=crop' },
    { name: 'भालू', english: 'Bear', emoji: '🐻', image: 'https://images.unsplash.com/photo-1611504262166-fa362a217f5c?w=500&h=500&fit=crop' },
    { name: 'खरगोश', english: 'Rabbit', emoji: '🐰', image: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?w=500&h=500&fit=crop' },
    { name: 'जिराफ़', english: 'Giraffe', emoji: '🦒', image: 'https://images.unsplash.com/photo-1554490828-442467b562dd?w=500&h=500&fit=crop' },
    { name: 'ज़ेबरा', english: 'Zebra', emoji: '🦓', image: 'https://images.unsplash.com/photo-1526319238109-524eecb9b913?w=500&h=500&fit=crop' },
    { name: 'मोर', english: 'Peacock', emoji: '🦚', image: 'https://images.unsplash.com/photo-1554658506-487b008909d1?w=500&h=500&fit=crop' }
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
    
    // Find best Hindi voice. Prefer Google's network voice by name, then any
    // other network voice (usually higher-quality neural synthesis with more
    // accurate schwa handling), then fall back to a local voice — putting
    // "Lekha" (macOS's built-in Hindi voice) last since it's known to
    // mispronounce word-final vowels (e.g. "आम" -> "aama" instead of "aam").
    const hindiVoices = voices.filter(v => v.lang.startsWith('hi'));

    bestHindiVoice =
        hindiVoices.find(v => v.name.includes('Google हिन्दी')) ||
        hindiVoices.find(v => !v.localService) ||
        hindiVoices.find(v => v.name.includes('Lekha')) ||
        hindiVoices[0];
    
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

// Speech-only pronunciation fixes (never shown on screen — only fed to the
// speech engine). Devanagari consonants carry an implicit "a" sound, and
// spoken Hindi normally drops that final vowel at the end of a word (e.g.
// "आम" is said "aam", not "aam-a"), but many TTS voices don't apply that
// rule and read the word letter-by-literal-letter. Appending a halant (्)
// to the last consonant tells the speech engine to drop it. This is NOT a
// blanket rule — plenty of common words genuinely keep the final vowel
// (कमल is "kamal", नल is "nal", मेंढक is "mendhak") — so only words verified
// to actually drop it are listed here.
const hindiSpeechOverrides = {
    'अंगूर': 'अंगूर्', 'अनार': 'अनार्', 'आम': 'आम्', 'ईख': 'ईख्', 'ऊन': 'ऊन्',
    'किताब': 'किताब्', 'खरगोश': 'खरगोश्', 'गाय': 'गाय्', 'गेंद': 'गेंद्',
    'घर': 'घर्', 'चम्मच': 'चम्मच्', 'चाँद': 'चाँद्', 'जहाज़': 'जहाज़्',
    'टमाटर': 'टमाटर्', 'ढोल': 'ढोल्', 'तरबूज़': 'तरबूज़्', 'दूध': 'दूध्',
    'धनुष': 'धनुष्', 'पतंग': 'पतंग्', 'फूल': 'फूल्', 'बत्तख़': 'बत्तख़्',
    'बारिश': 'बारिश्', 'याक': 'याक्', 'रथ': 'रथ्', 'वायलिन': 'वायलिन्',
    'शेर': 'शेर्', 'सूरज': 'सूरज्', 'सेब': 'सेब्', 'स्कूल': 'स्कूल्',
    'षट्कोण': 'षट्कोण्',
    'कान': 'कान्', 'जिराफ़': 'जिराफ़्', 'नाक': 'नाक्', 'पेट': 'पेट्',
    'पैर': 'पैर्', 'बाघ': 'बाघ्', 'बाल': 'बाल्', 'भेड़': 'भेड़्',
    'मुँह': 'मुँह्', 'मोर': 'मोर्', 'सिर': 'सिर्', 'सूअर': 'सूअर्', 'हाथ': 'हाथ्'
};

function hindiSpeechText(text) {
    let corrected = text;
    for (const word in hindiSpeechOverrides) {
        corrected = corrected.split(word).join(hindiSpeechOverrides[word]);
    }
    return corrected;
}

function speakHindi(text) {
    const speechText = hindiSpeechText(text);
    // Ensure voices are loaded
    if (!voicesLoaded) {
        loadVoices().then(() => {
            speak(speechText, bestHindiVoice?.lang || 'hi-IN', bestHindiVoice);
        });
    } else {
        speak(speechText, bestHindiVoice?.lang || 'hi-IN', bestHindiVoice);
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

// Renders a real photo when `image` is available, falling back to the emoji
// (also used if the photo fails to load, e.g. offline).
function renderFlashcardVisual(image, emoji, altText, emojiStyle) {
    const styleAttr = emojiStyle ? ` style=\\'${emojiStyle}\\'` : '';
    if (image) {
        return `<img src="${image}" alt="${altText}" class="flashcard-photo" onerror="this.outerHTML='<div class=\\'flashcard-image\\'${styleAttr}>${emoji}</div>'">`;
    }
    return `<div class="flashcard-image"${emojiStyle ? ` style="${emojiStyle}"` : ''}>${emoji}</div>`;
}

function renderAlphabets() {
    const container = document.getElementById('alphabets-container');
    const dotsContainer = document.getElementById('alphabets-dots');
    
    container.innerHTML = alphabetsData.map((item, index) => `
        <div class="flashcard" data-index="${index}" onclick="handleAlphabetTap(${index})">
            <div class="flashcard-letter" style="background: linear-gradient(135deg, hsl(${index * 14}, 70%, 50%), hsl(${index * 14 + 30}, 70%, 60%)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                ${item.letter}
            </div>
            ${renderFlashcardVisual(item.image, item.emoji, item.word)}
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
            ${renderFlashcardVisual(item.image, item.emoji, item.word, 'font-size: 6rem;')}
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

// Renders the leader-line + label pill pointing from a diagram dot to
// the margin, using only percentage coordinates so it scales with the image.
function renderBodyDiagramLabel(label, speakFn = 'speakBodyPart') {
    const lineLeft = label.side === 'left' ? 12 : label.left;
    const lineWidth = label.side === 'left' ? (label.left - 12) : (88 - label.left);
    const pillTop = `top: ${label.top}%;`;
    return `
        <div class="body-label-line" style="${pillTop} left: ${lineLeft}%; width: ${lineWidth}%;"></div>
        <div class="body-label-dot" style="${pillTop} left: ${label.left}%;" onclick="${speakFn}('${label.name}')"></div>
        <div class="body-label-pill side-${label.side}" style="${pillTop}" onclick="${speakFn}('${label.name}')">${label.name}</div>
    `;
}

function renderEnglishBodyParts() {
    const figureContainer = document.getElementById('english-body-figure');
    const cardsContainer = document.getElementById('english-body-cards');

    // Real full-body photo with tappable labels pointing to each part
    figureContainer.innerHTML = `
        <h3 style="margin-bottom: 15px; color: #666;">👆 Tap a label to hear it!</h3>
        <div class="body-diagram">
            <img src="${englishBodyDiagram.image}" alt="Full body">
            ${englishBodyDiagram.labels.map(renderBodyDiagramLabel).join('')}
        </div>
    `;

    // Real close-up photo for each individual body part
    cardsContainer.innerHTML = englishBodyParts.map((part, index) => `
        <div class="body-card" onclick="handleEnglishBodyPartTap(${index})">
            <img src="${part.image}" alt="${part.name}" class="body-card-image" onerror="this.parentElement.innerHTML='<div class=\\'body-card-name\\'>${part.name}</div>'">
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
            ${renderFlashcardVisual(item.image, item.emoji, item.name, 'font-size: 7rem;')}
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
            ${renderFlashcardVisual(item.image, item.emoji, item.word)}
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
            ${renderFlashcardVisual(item.image, item.emoji, item.word, 'font-size: 6rem;')}
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

    // Real full-body photo with tappable Hindi labels pointing to each part
    figureContainer.innerHTML = `
        <h3 style="margin-bottom: 15px; color: #666;">👆 शरीर के अंग सुनने के लिए छुएँ!</h3>
        <div class="body-diagram">
            <img src="${hindiBodyDiagram.image}" alt="Full body">
            ${hindiBodyDiagram.labels.map(label => renderBodyDiagramLabel(label, 'speakHindiBodyPart')).join('')}
        </div>
    `;

    // Real close-up photo for each individual body part (falls back to the
    // emoji if a part has no photo yet, or if the photo fails to load)
    cardsContainer.innerHTML = hindiBodyParts.map((part, index) => `
        <div class="body-card" onclick="handleHindiBodyPartTap(${index})">
            ${part.image
                ? `<img src="${part.image}" alt="${part.name}" class="body-card-image" onerror="this.outerHTML='<div class=\\'body-card-icon\\'>${part.emoji}</div>'">`
                : `<div class="body-card-icon">${part.emoji}</div>`}
            <div class="body-card-name">${part.name}</div>
        </div>
    `).join('');
}

function speakHindiBodyPart(name) {
    speakHindi(name);
    if (Math.random() < 0.3) {
        setTimeout(showReward, 800);
    }
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
            ${renderFlashcardVisual(item.image, item.emoji, item.name, 'font-size: 7rem;')}
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
            <div class="tap-hint"><span class="tap-icon">👆</span> Tap to hear</div>
        </div>
    `).join('');
    
    renderDots(dotsContainer, numbersData.length, 'numbers');
    setupSwipeNavigation(container, 'numbers');
}

function handleNumberTap(index) {
    const item = numbersData[index];

    speakEnglish(item.word);

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
