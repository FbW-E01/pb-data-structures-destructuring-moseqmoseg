/// 1
let fruit, vegetable, food;
[fruit, vegetable, food] = ["banana", "cucumber", ["bread", "cakes", "pizza"]];

console.log(fruit);
console.log(vegetable);
console.log(food);

/// 2

let objeto = { Tito: "werewolf", Michael: "Peter Pan", Prince: "Zombie" };

const { Tito, Michael, Prince } = objeto;
console.log(Tito);
console.log(Michael);
console.log(Prince);

/// 3

const Artist = {
    Type: "band",
    Name: "Phoenix",
    Origin: "French",
    Genre: "Indie Rock",
    Hit: "1901",
    Musicians: 4,
};

function ArtistData(Object) {
    const { Name, Origin, Genre, Hit, Musicians, Type } = Object; {
        console.log(
            `${Name} is a ${Origin} ${Type} that plays ${Genre}. The ${Type} is composed of ${Musicians} ${Origin} musicians and their biggest hit is the song "${Hit}. `
        );
    }
}

ArtistData(Artist);