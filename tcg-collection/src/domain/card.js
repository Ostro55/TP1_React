export let RARITIES = Object.freeze({
    COMMON: "commune",
    UNCOMMON: "peu-commune",
    RARE: "rare",
    SUPER_RARE: "ultra-rare"
})

export let SETS = Object.freeze({
    BASE: "Set de base",
    JUNGLE: "Jungle",
    FOSSIL: "Fossile"
})

export default class Card {

    constructor(id, name, set, rarity, price, quantity) {
        this.id = id;
        this.name = name;
        this.set = set;
        this.rarity = rarity;
        this.price = price;
        this.quantity = quantity;
    }
}

export let SAMPLE_CARDS = Object.freeze([
    new Card(1, "Dracaufeu", SETS.BASE, RARITIES.SUPER_RARE, 48.9, 1),
    new Card(2, "Tortank", SETS.BASE, RARITIES.RARE, 12.5, 2),
    new Card(3, "Pikachu", SETS.BASE, RARITIES.COMMON, 0.3, 4),
    new Card(4, "Ronflex", SETS.JUNGLE, RARITIES.SUPER_RARE, 35, 1),
    new Card(5, "Pyroli", SETS.JUNGLE, RARITIES.RARE, 18.75, 1),
    new Card(6, "Persian", SETS.JUNGLE, RARITIES.UNCOMMON, 1.2, 3),
    new Card(7, "Ptera", SETS.FOSSIL, RARITIES.RARE, 9.9, 0),
    new Card(8, "Amonistar", SETS.FOSSIL, RARITIES.UNCOMMON, 0.8, 2),
])

export function parseRarity(value) {
    return RARITIES[value];
}

export function isRare(card) {
    return card.rarity === RARITIES.RARE || card.rarity === RARITIES.SUPER_RARE;
}

export let nbFormat = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });
export function formatPrice(price) {
    return nbFormat.format(price);
}

export function copyCount(cards) {
    return cards.reduce((acc, card) => acc + card.quantity, 0);
}

export function collectionValue(cards) {
    return cards.reduce((acc, card) => acc + card.price * card.quantity, 0);
}