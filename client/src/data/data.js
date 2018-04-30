var helmets = [
    {
        id : 1,
        name : 'Turban of Divination',
        health : 1530,
        attack : 990,
        defense: 1008,
        magic : 1224
    }
];

var links = [
    {
        id : 1,
        name : 'Turban of Divination',
        links : [
            {
                n : 1,
                type : "magic",
                link: "Prophecy Gloves",
                linkid: 23,
                value: 20
            },
            {
                n : 2,
                type : "defense",
                link: "Savage Shaman Pendant",
                linkid: 23,
                value: 20
            },{
                n : 3,
                type : "magic",
                link: "Soulsucker Armor",
                linkid: 23,
                value: 21
            },{
                n : 4,
                type : "defense",
                link: "orb",
                linkid: null,
                value: 20
            },{
                n : 5,
                type : "magic",
                link: "orb",
                linkid: null,
                value: 21
            }
        ]
    }
];

export default { helmets, links };