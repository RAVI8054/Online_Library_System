 const Books = [
    {
        id: 1,
        title: "The Interenet Book",
        author: "Douglas E. Comer",
        years: "22 August 2018",
        pages: 371,
        category: "computersInternet",
        ratings: 4.4,
        coverImage: "https://m.media-amazon.com/images/I/613YX7Iw5EL._SY342_.jpg",
        description: "The Internet Book, Fifth Edition explains how computers communicate, what the Internet is, how the Internet works, and what services the Internet offers. It is designed for readers who do not have a strong technical background ― early chapters clearly explain the terminology and concepts needed to understand all the services."
    },
    {
        id: 2,
        title: "Make Epic Money",
        author: "Ankur Warikoo",
        years: "29 January 2024",
        pages: 340,
        category: "computersInternet",
        ratings: 4.7,
        coverImage: "https://m.media-amazon.com/images/I/41ydkBasr3L._SY445_SX342_.jpg",
        description: "In his groundbreaking book Do Epic Shit, Warikoo dropped this truth bomb: ‘Three relationships determine our life's course - time, money, and ourselves.’ Now, in his third book, Make Epic Money, he dives deep into the complex world of money to provide you with the ultimate personal-finance blueprint..."
    },
    {
        id: 3,
        title: "HOOKED",
        author: "Nir Eyal",
        years: "November 2014",
        pages: 256,
        category: "computersInternet",
        ratings: 4.5,
        coverImage: "https://m.media-amazon.com/images/I/81L8JOVXJtL._SY342_.jpg",
        description: "'A must-read for everyone who cares about driving customer engagement' Eric Ries... Nir Eyal reveals how successful companies create products people can't put down - and how you can too"
    },
    {
        id: 4,
        title: "Master Python Programming",
        author: "ModernMind Publications",
        years: "12 March 2024",
        pages: 238,
        category: "computersInternet",
        ratings: 4.2,
        coverImage: "https://m.media-amazon.com/images/I/81NaaRyDncL._SY342_.jpg",
        description: "Imagine if there was a guide that not only taught you Python but also simplified it into a 7-day journey and provided hands-on projects to hone your skills."
    },
    {
        id: 5,
        title: "Digital Minimalism",
        author: "Cal Newport",
        years: "1 January 2020",
        pages: 304,
        category: "computersInternet",
        ratings: 4.6,
        coverImage: "https://m.media-amazon.com/images/I/61xdhZU7FlL._SY342_.jpg",
        description: "In this timely book, professor Cal Newport shows us how to pair back digital distractions and live a more meaningful life with less technology."
    },
    {
        id: 6,
        title: "Never Let Me Go",
        author: "Kazuo Ishiguro",
        years: "8 July 2020",
        pages: 304,
        category: "sciencefiction",
        ratings: 4.3,
        coverImage: "https://m.media-amazon.com/images/I/71K0eikl7wL._SY342_.jpg",
        description: "In one of the most memorable novels of recent years, Kazuo Ishiguro imagines the lives of a group of students growing up in a darkly skewered version of contemporary England."
    },
    {
        id: 7,
        title: "Before the Coffee Gets Cold",
        author: "Toshikazu Kawaguchi",
        years: "15 March 2023",
        pages: 224,
        category: "sciencefiction",
        ratings: 4.3,
        coverImage: "https://m.media-amazon.com/images/I/410Cp9Io3IL._SY445_SX342_.jpg",
        description: "In a small back alley in Tokyo, there is a cafe which has been serving carefully brewed coffee for more than one hundred years. But this coffee shop offers its customers a unique experience: the chance to travel back in time."
    },
    {
        id: 8,
        title: "Destination Moon",
        author: "HERGE",
        years: "1 January 2013",
        pages: 64,
        category: "sciencefiction",
        ratings: 4.8,
        coverImage: "https://m.media-amazon.com/images/I/81YkYEqcUwL._SY342_.jpg",
        description: "Hergé’s classic comic book creation Tintin... discovers that Professor Calculus is building a space rocket..."
    },
    {
        id: 9,
        title: "1984",
        author: "Orwell, George",
        years: "4 September 2018",
        pages: 250,
        category: "sciencefiction",
        ratings: 4.5,
        coverImage: "https://m.media-amazon.com/images/I/81bHQlJVuIL._SY342_.jpg",
        description: "1984, published in 1949, is a dystopian and satirical novel. It revolves around Winston Smith..."
    },
    {
        id: 10,
        title: "Mickey7",
        author: "Edward Ashton",
        years: "18 December 2019",
        pages: 311,
        category: "sciencefiction",
        ratings: 4.2,
        coverImage: "https://m.media-amazon.com/images/I/81V8UhTDYVL._SY342_.jpg",
        description: "Mickey7 is an Expendable: a disposable employee on a human expedition sent to colonize the ice world Niflheim..."
    },
    {
        id: 11,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        years: "8 December 2025",
        pages: 345,
        category: "actionadventure",
        ratings: 4.7,
        coverImage: "https://m.media-amazon.com/images/I/81m9fP+LIPL._SY466_.jpg",
        description: "Harry Potter has never even heard of Hogwarts when the letters start dropping..."
    },
    {
        id: 12,
        title: "The Hidden Hindu",
        author: "Akshat Gupta",
        years: "1 January 2021",
        pages: 256,
        category: "actionadventure",
        ratings: 4.5,
        coverImage: "https://m.media-amazon.com/images/I/81ZI8RyyynL._SY342_.jpg",
        description: "Prithvi, a twenty-one-year-old, is searching for a mysterious middle-aged aghori (Shiva devotee), Om Shastri..."
    },
    {
        id: 13,
        title: "The Naga Warriors",
        author: "Akshat Gupta",
        years: "27 May 2024",
        pages: 256,
        category: "actionadventure",
        ratings: 4.6,
        coverImage: "https://m.media-amazon.com/images/I/71MoS+oeovL._SY342_.jpg",
        description: "To prepare for the future, our ancestors created the Naga sadhus―a clan of warriors for the protection of Dharma..."
    },
    {
        id: 14,
        title: "The 6:20 Man",
        author: "David Baldacci",
        years: "12 July 2022",
        pages: 420,
        category: "actionadventure",
        ratings: 4.2,
        coverImage: "https://m.media-amazon.com/images/I/81BfK6Tl3EL._SY342_.jpg",
        description: "Every day without fail, Travis Devine puts on a cheap suit, grabs his faux-leather briefcase..."
    },
    {
        id: 15,
        title: "The Book Thief",
        author: "Markus Zusak",
        years: "8 March 2016",
        pages: 250,
        category: "actionadventure",
        ratings: 4.6,
        coverImage: "https://m.media-amazon.com/images/I/71Ge374aXuL._SY342_.jpg",
        description: "1939. Nazi Germany. The country is holding its breath. Death has never been busier..."
    },
    {
        id: 16,
        title: "Panchali: The Game of Dice",
        author: "Sankha Banerjee Sibaji Bandyopadhyay",
        years: "1 January 2022",
        pages: 244,
        category: "comics",
        ratings: 4.6,
        coverImage: "https://m.media-amazon.com/images/I/91Vm3Fv5Q1L._SY342_.jpg",
        description: "Impelled by elemental forces of death, destruction and creation, Panchali, with electrifying visuals cinematically construed, reaches its climax: two consecutive games of dice. Marred by deceit, treachery and trickery, and fuelled by obsession, passion and rage, the gambling episode provides the preface to the coming, all-consuming Mahabharata war."
    },
    {
        id: 17,
        title: "Avengers/Captain America",
        author: "Jason Aaron",
        years: "5 May 2018",
        pages: 24,
        category: "comics",
        ratings: 3.8,
        coverImage: "https://m.media-amazon.com/images/I/91GN7Bww3sL._SY342_.jpg",
        description: "Free Comic Book Day 2018 is your perfect chance to dive into the Marvel Universe! With a story from Jason Aaron and art by Sara Pichelli, Marvel's FCBD title debuting this May features stories that set the stage for an epic new direction for the Avengers in the Marvel Universe. Plus, a Captain America story from Ta-Nehisi Coates and Leinil Francis Yu leading into their upcoming Captain America series!"
    },
    {
        id: 18,
        title: "Spider-Man/Venom",
        author: "Donny Cates",
        years: "22 July 2020",
        pages: 25,
        category: "comics",
        ratings: 4.5,
        coverImage: "https://m.media-amazon.com/images/I/91BTZdo8jIL._SY342_.jpg",
        description: "Two exciting tales connected to the coming major storylines in Venom, Amazing Spider-Man and Black Cat from top creators Donny Cates, Ryan Stegman, Jed MacKay, Patrick Gleason and more!"
    },
    {
        id: 19,
        title: "CHACHA CHAUDHARY AND FLYING SCORPIO",
        author: "PRAN KUMAR SHARMA",
        years: "8 June 2017",
        pages: 47,
        category: "comics",
        ratings: 4.6,
        coverImage: "https://m.media-amazon.com/images/I/81gIK2p3UJL._SY342_.jpg",
        description: "Once cartoonist Pran struck upon an idea of a wise oldman who solves problems with his sharp intellect. Thus CHACHA CHAUDHARY was born in 1971.Tall and robust SABU, who is an inhabitant of planet Jupiter, gave Chaudhary an ideal company. A combination of wisdom and strength was formed to tackle any difficult task. It is said that 'Chacha Chaudhary's brain works faster than a computer'. Though both fight the criminals and tricksters, each episode ends with a touch of humour. The duo perform in lighter vein."
    },
    {
        id: 20,
        title: "Hulk",
        author: "Jason Aaron",
        years: "18 August 2021",
        pages: 21,
        category: "comics",
        ratings: 3.7,
        coverImage: "https://m.media-amazon.com/images/I/9172XF9PGML._SY342_.jpg",
        description: "In a land beyond time, a shining tower stands, deploying its operatives across the Multiverse to hold against the encroaching darkness! Who is the mysterious Avenger Prime, and how will his advent impact on the past, the present, and the very future of the mighty Avengers? Plus, Donny Cates and Ryan Ottley present a story that leads into their upcoming run on HULK."
    }
];

export default Books;