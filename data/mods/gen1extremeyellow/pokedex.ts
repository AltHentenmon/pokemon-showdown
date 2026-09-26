export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	missingno: {
		inherit: true,
		baseStats: { hp: 33, atk: 136, def: 0, spa: 6, spd: 6, spe: 29 },
	},
	bulbasaur: {
		inherit: true,
		baseStats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
	},
	ivysaur: {
		inherit: true,
		baseStats: { hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60 },
	},
	venusaur: {
		inherit: true,
		evos: ["venusaurmega"],
		baseStats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
	},
    venusaurmega: {
		baseSpecies: "Venusaur",
		isNonstandard: null,
		baseStats: { hp: 80, atk: 100, def: 123, spa: 122, spd: 122, spe: 80 },
		gen: 1,
	},
	charmander: {
		inherit: true,
		baseStats: { hp: 39, atk: 52, def: 43, spa: 50, spd: 50, spe: 65 },
	},
	charmeleon: {
		inherit: true,
		baseStats: { hp: 58, atk: 64, def: 58, spa: 65, spd: 65, spe: 80 },
	},
	charizard: {
		inherit: true,
		evos: ["charizardmegax", "charizardmegay"],
		baseStats: { hp: 78, atk: 84, def: 78, spa: 85, spd: 85, spe: 100 },
	},
    charizardmegax: {
		baseSpecies: "Charizard",
		isNonstandard: null,
		baseStats: { hp: 78, atk: 130, def: 111, spa: 85, spd: 85, spe: 100 },
		gen: 1,
	},
    charizardmegay: {
		baseSpecies: "Charizard",
		isNonstandard: null,
		baseStats: { hp: 78, atk: 104, def: 78, spa: 159, spd: 159, spe: 100 },
		gen: 1,
	},
	squirtle: {
		inherit: true,
		baseStats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 50, spe: 43 },
	},
	wartortle: {
		inherit: true,
		baseStats: { hp: 59, atk: 63, def: 80, spa: 65, spd: 65, spe: 58 },
	},
	blastoise: {
		inherit: true,
		evos: ["blastoisemega"],
		baseStats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 85, spe: 78 },
	},
    blastoisemega: {
		baseSpecies: "Blastoise",
		isNonstandard: null,
		baseStats: { hp: 79, atk: 103, def: 120, spa: 135, spd: 135, spe: 78 },
		gen: 1,
	},
	caterpie: {
		inherit: true,
		baseStats: { hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45 },
	},
	metapod: {
		inherit: true,
		baseStats: { hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30 },
	},
	butterfree: {
		inherit: true,
		baseStats: { hp: 60, atk: 45, def: 50, spa: 90, spd: 90, spe: 70 },
	},
	weedle: {
		inherit: true,
		baseStats: { hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50 },
	},
	kakuna: {
		inherit: true,
		baseStats: { hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35 },
	},
	beedrill: {
		inherit: true,
		evos: ["beedrillmega"],
		baseStats: { hp: 65, atk: 80, def: 40, spa: 45, spd: 45, spe: 75 },
	},
    beedrillmega: {
		inherit: true,
		baseSpecies: "Beedrill",
		isNonstandard: null,
		baseStats: { hp: 65, atk: 150, def: 40, spa: 48, spd: 48, spe: 145 },
		gen: 1,
	},
	pidgey: {
		inherit: true,
		baseStats: { hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56 },
	},
	pidgeotto: {
		inherit: true,
		baseStats: { hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71 },
	},
	pidgeot: {
		inherit: true,
		evos: ["pidgeotmega"],
		baseStats: { hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 91 },
	},
    pidgeotmega: {
		baseSpecies: "Pidgeot",
		isNonstandard: null,
		baseStats: { hp: 83, atk: 80, def: 80, spa: 135, spd: 135, spe: 121 },
		gen: 1,
	},
	rattata: {
		inherit: true,
		baseStats: { hp: 30, atk: 56, def: 35, spa: 25, spd: 25, spe: 72 },
	},
	raticate: {
		inherit: true,
		baseStats: { hp: 55, atk: 81, def: 60, spa: 50, spd: 50, spe: 97 },
	},
	spearow: {
		inherit: true,
		baseStats: { hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70 },
	},
	fearow: {
		inherit: true,
		baseStats: { hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100 },
	},
	ekans: {
		inherit: true,
		baseStats: { hp: 35, atk: 60, def: 44, spa: 40, spd: 40, spe: 55 },
	},
	arbok: {
		inherit: true,
		baseStats: { hp: 60, atk: 85, def: 69, spa: 65, spd: 65, spe: 80 },
	},
    pichu: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 20, atk: 40, def: 15, spa: 35, spd: 35, spe: 60 },
		gen: 1,
	},
	pikachu: {
		inherit: true,
		baseStats: { hp: 35, atk: 55, def: 30, spa: 50, spd: 50, spe: 90 },
	},
	raichu: {
		inherit: true,
		evos: ["raichumegax", "raichumegay"],
		baseStats: { hp: 60, atk: 90, def: 55, spa: 90, spd: 90, spe: 100 },
	},
    raichumegax: {
		baseSpecies: "Raichu",
		isNonstandard: null,
		baseStats: { hp: 60, atk: 135, def: 95, spa: 95, spd: 95, spe: 110 },
		gen: 1,
	},
    raichumegay: {
		baseSpecies: "Raichu",
		isNonstandard: null,
		baseStats: { hp: 60, atk: 100, def: 55, spa: 160, spd: 160, spe: 130 },
		gen: 1,
	},
	sandshrew: {
		inherit: true,
		baseStats: { hp: 50, atk: 75, def: 85, spa: 30, spd: 30, spe: 40 },
	},
	sandslash: {
		inherit: true,
		baseStats: { hp: 75, atk: 100, def: 110, spa: 55, spd: 55, spe: 65 },
	},
	nidoranf: {
		inherit: true,
		baseStats: { hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41 },
	},
	nidorina: {
		inherit: true,
		baseStats: { hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56 },
	},
	nidoqueen: {
		inherit: true,
		baseStats: { hp: 90, atk: 82, def: 87, spa: 75, spd: 75, spe: 76 },
	},
	nidoranm: {
		inherit: true,
		baseStats: { hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50 },
	},
	nidorino: {
		inherit: true,
		baseStats: { hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65 },
	},
	nidoking: {
		inherit: true,
		baseStats: { hp: 81, atk: 92, def: 77, spa: 75, spd: 75, spe: 85 },
	},
    cleffa: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 50, atk: 25, def: 28, spa: 45, spd: 45, spe: 15 },
		gen: 1,
	},
	clefairy: {
		inherit: true,
		baseStats: { hp: 70, atk: 45, def: 48, spa: 60, spd: 60, spe: 35 },
	},
	clefable: {
		inherit: true,
		evos: ["clefablemega"],
		baseStats: { hp: 95, atk: 70, def: 73, spa: 85, spd: 85, spe: 60 },
	},
    clefablemega: {
		baseSpecies: "Clefable",
		isNonstandard: null,
		baseStats: { hp: 95, atk: 80, def: 93, spa: 135, spd: 135, spe: 70 },
		gen: 1,
	},
	vulpix: {
		inherit: true,
		baseStats: { hp: 38, atk: 41, def: 40, spa: 65, spd: 65, spe: 65 },
	},
	ninetales: {
		inherit: true,
		baseStats: { hp: 73, atk: 76, def: 75, spa: 100, spd: 100, spe: 100 },
	},
    igglybuff: {
		inherit: true,
		baseStats: { hp: 90, atk: 30, def: 15, spa: 20, spd: 20, spe: 15 },
		gen: 1,
	},
	jigglypuff: {
		inherit: true,
		baseStats: { hp: 115, atk: 45, def: 20, spa: 25, spd: 25, spe: 20 },
	},
	wigglytuff: {
		inherit: true,
		baseStats: { hp: 140, atk: 70, def: 45, spa: 68, spd: 68, spe: 45 },
	},
	zubat: {
		inherit: true,
		baseStats: { hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 55 },
	},
	golbat: {
		inherit: true,
		baseStats: { hp: 75, atk: 80, def: 70, spa: 75, spd: 75, spe: 90 },
	},
    crobat: {
		inherit: true,
		baseStats: { hp: 85, atk: 90, def: 80, spa: 80, spd: 80, spe: 130 },
		gen: 1,
	},
	oddish: {
		inherit: true,
		baseStats: { hp: 45, atk: 50, def: 55, spa: 75, spd: 75, spe: 30 },
	},
	gloom: {
		inherit: true,
		baseStats: { hp: 60, atk: 65, def: 70, spa: 85, spd: 85, spe: 40 },
	},
	vileplume: {
		inherit: true,
		baseStats: { hp: 75, atk: 80, def: 85, spa: 100, spd: 100, spe: 50 },
	},
    bellossom: {
		inherit: true,
		baseStats: { hp: 75, atk: 80, def: 95, spa: 90, spd: 90, spe: 50 },
		gen: 1,
	},
	paras: {
		inherit: true,
		baseStats: { hp: 35, atk: 70, def: 55, spa: 55, spd: 55, spe: 25 },
	},
	parasect: {
		inherit: true,
		baseStats: { hp: 60, atk: 95, def: 80, spa: 80, spd: 80, spe: 30 },
	},
	venonat: {
		inherit: true,
		baseStats: { hp: 60, atk: 55, def: 50, spa: 40, spd: 40, spe: 45 },
	},
	venomoth: {
		inherit: true,
		baseStats: { hp: 70, atk: 65, def: 60, spa: 90, spd: 90, spe: 90 },
	},
	diglett: {
		inherit: true,
		baseStats: { hp: 10, atk: 55, def: 25, spa: 45, spd: 45, spe: 95 },
	},
	dugtrio: {
		inherit: true,
		baseStats: { hp: 35, atk: 80, def: 50, spa: 70, spd: 70, spe: 120 },
	},
	meowth: {
		inherit: true,
		baseStats: { hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90 },
	},
	persian: {
		inherit: true,
		baseStats: { hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115 },
	},
	psyduck: {
		inherit: true,
		baseStats: { hp: 50, atk: 52, def: 48, spa: 50, spd: 50, spe: 55 },
	},
	golduck: {
		inherit: true,
		baseStats: { hp: 80, atk: 82, def: 78, spa: 80, spd: 80, spe: 85 },
	},
	mankey: {
		inherit: true,
		baseStats: { hp: 40, atk: 80, def: 35, spa: 35, spd: 35, spe: 70 },
	},
	primeape: {
		inherit: true,
		baseStats: { hp: 65, atk: 105, def: 60, spa: 60, spd: 60, spe: 95 },
	},
    annihilape: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 110, atk: 115, def: 80, spa: 70, spd: 70, spe: 90 },
		gen: 1,
	},
	growlithe: {
		inherit: true,
		baseStats: { hp: 55, atk: 70, def: 45, spa: 50, spd: 50, spe: 60 },
	},
	arcanine: {
		inherit: true,
		baseStats: { hp: 90, atk: 110, def: 80, spa: 80, spd: 80, spe: 95 },
	},
	poliwag: {
		inherit: true,
		baseStats: { hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90 },
	},
	poliwhirl: {
		inherit: true,
		baseStats: { hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90 },
	},
	poliwrath: {
		inherit: true,
		baseStats: { hp: 90, atk: 85, def: 95, spa: 70, spd: 70, spe: 70 },
	},
    politoed: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 90, atk: 75, def: 75, spa: 90, spd: 90, spe: 70 },
		gen: 1,
	},
	abra: {
		inherit: true,
		baseStats: { hp: 25, atk: 20, def: 15, spa: 105, spd: 105, spe: 90 },
	},
	kadabra: {
		inherit: true,
		baseStats: { hp: 40, atk: 35, def: 30, spa: 120, spd: 120, spe: 105 },
	},
	alakazam: {
		inherit: true,
		evos: ["alakazammega"],
		baseStats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 135, spe: 120 },
	},
    alakazammega: {
		inherit: true,
		baseSpecies: "Alakazam",
		isNonstandard: null,
		baseStats: { hp: 55, atk: 50, def: 65, spa: 175, spd: 175, spe: 150 },
		gen: 1,
	},
	machop: {
		inherit: true,
		baseStats: { hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35 },
	},
	machoke: {
		inherit: true,
		baseStats: { hp: 80, atk: 100, def: 70, spa: 50, spd: 50, spe: 45 },
	},
	machamp: {
		inherit: true,
		baseStats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 65, spe: 55 },
	},
	bellsprout: {
		inherit: true,
		baseStats: { hp: 50, atk: 75, def: 35, spa: 70, spd: 70, spe: 40 },
	},
	weepinbell: {
		inherit: true,
		baseStats: { hp: 65, atk: 90, def: 50, spa: 85, spd: 85, spe: 55 },
	},
	victreebel: {
		inherit: true,
		evos: ["victreebelmega"],
		baseStats: { hp: 80, atk: 105, def: 65, spa: 100, spd: 100, spe: 70 },
	},
    victreebelmega: {
		baseSpecies: "Victreebel",
		isNonstandard: null,
		baseStats: { hp: 80, atk: 125, def: 85, spa: 135, spd: 135, spe: 70 },
		gen: 1,
	},
	tentacool: {
		inherit: true,
		baseStats: { hp: 40, atk: 40, def: 35, spa: 100, spd: 100, spe: 70 },
	},
	tentacruel: {
		inherit: true,
		baseStats: { hp: 80, atk: 70, def: 65, spa: 120, spd: 120, spe: 100 },
	},
	geodude: {
		inherit: true,
		baseStats: { hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 },
	},
	graveler: {
		inherit: true,
		baseStats: { hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35 },
	},
	golem: {
		inherit: true,
		baseStats: { hp: 80, atk: 110, def: 130, spa: 55, spd: 55, spe: 45 },
	},
	ponyta: {
		inherit: true,
		baseStats: { hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90 },
	},
	rapidash: {
		inherit: true,
		baseStats: { hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105 },
	},
	slowpoke: {
		inherit: true,
		baseStats: { hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15 },
	},
	slowbro: {
		inherit: true,
		evos: ["megaslowbro"],
		baseStats: { hp: 95, atk: 75, def: 110, spa: 80, spd: 80, spe: 30 },
	},
    slowbromega: {
		inherit: true,
		baseSpecies: "Slowbro",
		isNonstandard: null,
		baseStats: { hp: 95, atk: 75, def: 180, spa: 105, spd: 105, spe: 30 },
		gen: 1,
	},
    slowking: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 95, atk: 75, def: 80, spa: 105, spd: 105, spe: 30 },
		gen: 1,
	},
	magnemite: {
		inherit: true,
		baseStats: { hp: 25, atk: 35, def: 70, spa: 95, spd: 95, spe: 45 },
	},
	magneton: {
		inherit: true,
		baseStats: { hp: 50, atk: 60, def: 95, spa: 120, spd: 120, spe: 70 },
	},
    magnezone: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 70, atk: 70, def: 115, spa: 130, spd: 130, spe: 60 },
		gen: 1,
	},
	farfetchd: {
		inherit: true,
		baseStats: { hp: 52, atk: 95, def: 55, spa: 58, spd: 58, spe: 60 },
	},
	doduo: {
		inherit: true,
		baseStats: { hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75 },
	},
	dodrio: {
		inherit: true,
		baseStats: { hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 110 },
	},
	seel: {
		inherit: true,
		baseStats: { hp: 65, atk: 45, def: 55, spa: 70, spd: 70, spe: 45 },
	},
	dewgong: {
		inherit: true,
		baseStats: { hp: 90, atk: 70, def: 80, spa: 95, spd: 95, spe: 70 },
	},
	grimer: {
		inherit: true,
		baseStats: { hp: 80, atk: 80, def: 50, spa: 40, spd: 40, spe: 25 },
	},
	muk: {
		inherit: true,
		baseStats: { hp: 105, atk: 105, def: 75, spa: 65, spd: 65, spe: 50 },
	},
	shellder: {
		inherit: true,
		baseStats: { hp: 30, atk: 65, def: 100, spa: 45, spd: 45, spe: 40 },
	},
	cloyster: {
		inherit: true,
		baseStats: { hp: 50, atk: 95, def: 180, spa: 85, spd: 85, spe: 70 },
	},
	gastly: {
		inherit: true,
		baseStats: { hp: 30, atk: 35, def: 30, spa: 100, spd: 100, spe: 80 },
	},
	haunter: {
		inherit: true,
		baseStats: { hp: 45, atk: 50, def: 45, spa: 115, spd: 115, spe: 95 },
	},
	gengar: {
		inherit: true,
		evos: ["gengarmega"],
		baseStats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 130, spe: 110 },
	},
    gengarmega: {
		baseSpecies: "Gengar",
		isNonstandard: null,
		baseStats: { hp: 60, atk: 65, def: 80, spa: 170, spd: 170, spe: 130 },
		gen: 1,
	},
	onix: {
		inherit: true,
		baseStats: { hp: 35, atk: 45, def: 160, spa: 30, spd: 30, spe: 70 },
	},
    steelix: {
		inherit: true,
		evos: ["steelixmega"],
		isNonstandard: null,
		baseStats: { hp: 75, atk: 85, def: 200, spa: 65, spd: 65, spe: 30 },
		gen: 1,
	},
    steelixmega: {
		baseSpecies: "Steelix",
		isNonstandard: null,
		baseStats: { hp: 75, atk: 125, def: 230, spa: 75, spd: 75, spe: 30 },
		gen: 1,
	},
	drowzee: {
		inherit: true,
		baseStats: { hp: 60, atk: 48, def: 45, spa: 90, spd: 90, spe: 42 },
	},
	hypno: {
		inherit: true,
		baseStats: { hp: 85, atk: 73, def: 70, spa: 115, spd: 115, spe: 67 },
	},
	krabby: {
		inherit: true,
		baseStats: { hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50 },
	},
	kingler: {
		inherit: true,
		baseStats: { hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 },
	},
	voltorb: {
		inherit: true,
		baseStats: { hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100 },
	},
	electrode: {
		inherit: true,
		baseStats: { hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 140 },
	},
	exeggcute: {
		inherit: true,
		baseStats: { hp: 60, atk: 40, def: 80, spa: 60, spd: 60, spe: 40 },
	},
	exeggutor: {
		inherit: true,
		baseStats: { hp: 95, atk: 95, def: 85, spa: 125, spd: 125, spe: 55 },
	},
	cubone: {
		inherit: true,
		baseStats: { hp: 50, atk: 50, def: 95, spa: 40, spd: 40, spe: 35 },
	},
	marowak: {
		inherit: true,
		baseStats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 50, spe: 45 },
	},
    tyrogue: {
        inherit: true,
		isNonstandard: null,
        baseStats: { hp: 35, atk: 35, def: 35, spa: 35, spd: 35, spe: 35 },
		gen: 1,
    },
	hitmonlee: {
		inherit: true,
		baseStats: { hp: 50, atk: 120, def: 53, spa: 35, spd: 35, spe: 87 },
	},
	hitmonchan: {
		inherit: true,
		baseStats: { hp: 50, atk: 105, def: 79, spa: 35, spd: 35, spe: 76 },
	},
    hitmontop: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 50, atk: 95, def: 95, spa: 35, spd: 35, spe: 70 },
		gen: 1,
	},
	lickitung: {
		inherit: true,
		baseStats: { hp: 90, atk: 55, def: 75, spa: 60, spd: 60, spe: 30 },
	},
    lickilicky: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 110, atk: 85, def: 95, spa: 80, spd: 60, spe: 30 },
		gen: 1,
	},
	koffing: {
		inherit: true,
		baseStats: { hp: 40, atk: 65, def: 95, spa: 60, spd: 60, spe: 35 },
	},
	weezing: {
		inherit: true,
		baseStats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 85, spe: 60 },
	},
	rhyhorn: {
		inherit: true,
		baseStats: { hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25 },
	},
	rhydon: {
		inherit: true,
		baseStats: { hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40 },
	},
    rhyperior: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 115, atk: 140, def: 130, spa: 55, spd: 55, spe: 40 },
		gen: 1,
	},
    happiny: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 100, atk: 5, def: 5, spa: 65, spd: 65, spe: 30 },
		gen: 1,
	},
	chansey: {
		inherit: true,
		baseStats: { hp: 250, atk: 5, def: 5, spa: 105, spd: 105, spe: 50 },
	},
    blissey: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 255, atk: 10, def: 10, spa: 135, spd: 135, spe: 55 },
		gen: 1,
	},
	tangela: {
		inherit: true,
		baseStats: { hp: 65, atk: 55, def: 115, spa: 100, spd: 100, spe: 60 },
	},
    tangrowth: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 100, atk: 100, def: 125, spa: 110, spd: 110, spe: 50 },
		gen: 1,
	},
	kangaskhan: {
		inherit: true,
		evos: ["kangaskhanmega"],
		baseStats: { hp: 105, atk: 95, def: 80, spa: 40, spd: 40, spe: 90 },
	},
	kangaskhanmega: {
		baseSpecies: "Kangaskhan",
		isNonstandard: null,
		baseStats: { hp: 105, atk: 125, def: 100, spa: 80, spd: 80, spe: 100 },
		gen: 1,
	},
	horsea: {
		inherit: true,
		baseStats: { hp: 30, atk: 40, def: 70, spa: 70, spd: 70, spe: 60 },
	},
	seadra: {
		inherit: true,
		baseStats: { hp: 55, atk: 65, def: 95, spa: 95, spd: 95, spe: 85 },
	},
	kingdra: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 85 },
		gen: 1,
	},
	goldeen: {
		inherit: true,
		baseStats: { hp: 45, atk: 67, def: 60, spa: 50, spd: 50, spe: 63 },
	},
	seaking: {
		inherit: true,
		baseStats: { hp: 80, atk: 92, def: 65, spa: 80, spd: 80, spe: 68 },
	},
	staryu: {
		inherit: true,
		baseStats: { hp: 30, atk: 45, def: 55, spa: 70, spd: 70, spe: 85 },
	},
	starmie: {
		inherit: true,
		baseStats: { hp: 60, atk: 75, def: 85, spa: 100, spd: 100, spe: 115 },
	},
	starmiemega: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 60, atk: 140, def: 105, spa: 130, spd: 130, spe: 120 },
		gen: 1,
	},
	mimejr: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 20, atk: 25, def: 45, spa: 70, spd: 70, spe: 60 },
		gen: 1,
	},
	mrmime: {
		inherit: true,
		baseStats: { hp: 40, atk: 45, def: 65, spa: 100, spd: 100, spe: 90 },
	},
	scyther: {
		inherit: true,
		baseStats: { hp: 70, atk: 110, def: 80, spa: 55, spd: 55, spe: 105 },
	},
	scizor: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 70, atk: 130, def: 100, spa: 68, spd: 68, spe: 65 },
		gen: 1,
	},
	scizormega: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 70, atk: 150, def: 140, spa: 83, spd: 83, spe: 75 },
		gen: 1,
	},
	kleavor: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 70, atk: 135, def: 95, spa: 70, spd: 70, spe: 85 },
		gen: 1,
	},
	smoochum: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 45, atk: 30, def: 15, spa: 65, spd: 65, spe: 65 },
		gen: 1,
	},
	jynx: {
		inherit: true,
		baseStats: { hp: 65, atk: 50, def: 35, spa: 95, spd: 95, spe: 95 },
	},
	elekid: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 45, atk: 63, def: 37, spa: 55, spd: 55, spe: 95 },
		gen: 1,
	},
	electabuzz: {
		inherit: true,
		baseStats: { hp: 65, atk: 83, def: 57, spa: 85, spd: 85, spe: 105 },
	},
	electivire: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 75, atk: 123, def: 67, spa: 90, spd: 90, spe: 95 },
		gen: 1,
	},
	magby: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 45, atk: 75, def: 37, spa: 55, spd: 55, spe: 83 },
		gen: 1,
	},
	magmar: {
		inherit: true,
		baseStats: { hp: 65, atk: 95, def: 57, spa: 85, spd: 85, spe: 93 },
	},
	magmortar: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 75, atk: 95, def: 67, spa: 125, spd: 125, spe: 83 },
		gen: 1,
	},
	pinsir: {
		inherit: true,
		baseStats: { hp: 65, atk: 125, def: 100, spa: 55, spd: 55, spe: 85 },
	},
	pinsirmega: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 65, atk: 155, def: 120, spa: 78, spd: 78, spe: 105 },
		gen: 1,
	},
	tauros: {
		inherit: true,
		baseStats: { hp: 75, atk: 100, def: 95, spa: 70, spd: 70, spe: 110 },
	},
	magikarp: {
		inherit: true,
		baseStats: { hp: 20, atk: 10, def: 55, spa: 20, spd: 20, spe: 80 },
	},
	gyarados: {
		inherit: true,
		baseStats: { hp: 95, atk: 125, def: 79, spa: 100, spd: 100, spe: 81 },
	},
	gyaradosmega: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 95, atk: 155, def: 109, spa: 130, spd: 130, spe: 81 },
		gen: 1,
	},
	lapras: {
		inherit: true,
		baseStats: { hp: 130, atk: 85, def: 80, spa: 95, spd: 95, spe: 60 },
	},
	ditto: {
		inherit: true,
		baseStats: { hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48 },
	},
	eevee: {
		inherit: true,
		baseStats: { hp: 55, atk: 55, def: 50, spa: 65, spd: 65, spe: 55 },
	},
	vaporeon: {
		inherit: true,
		baseStats: { hp: 130, atk: 65, def: 60, spa: 110, spd: 110, spe: 65 },
	},
	jolteon: {
		inherit: true,
		baseStats: { hp: 65, atk: 65, def: 60, spa: 110, spd: 110, spe: 130 },
	},
	flareon: {
		inherit: true,
		baseStats: { hp: 65, atk: 130, def: 60, spa: 110, spd: 110, spe: 65 },
	},
	espeon: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 65, atk: 65, def: 60, spa: 130, spd: 130, spe: 110 },
		gen: 1,
	},
	umbreon: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 95, atk: 65, def: 110, spa: 130, spd: 130, spe: 65 },
		gen: 1,
	},
	leafeon: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 65, atk: 110, def: 130, spa: 65, spd: 65, spe: 95 },
		gen: 1,
	},
	glaceon: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 65, atk: 60, def: 110, spa: 130, spd: 130, spe: 65 },
		gen: 1,
	},
	sylveon: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 95, atk: 65, def: 65, spa: 130, spd: 130, spe: 60 },
		gen: 1,
	},
	porygon: {
		inherit: true,
		baseStats: { hp: 65, atk: 60, def: 70, spa: 75, spd: 75, spe: 40 },
	},
	porygon2: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 85, atk: 80, def: 90, spa: 105, spd: 105, spe: 60 },
		gen: 1,
	},
	porygonz: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 85, atk: 80, def: 70, spa: 135, spd: 135, spe: 90 },
		gen: 1,
	},
	omanyte: {
		inherit: true,
		baseStats: { hp: 35, atk: 40, def: 100, spa: 90, spd: 90, spe: 35 },
	},
	omastar: {
		inherit: true,
		baseStats: { hp: 70, atk: 60, def: 125, spa: 115, spd: 115, spe: 55 },
	},
	kabuto: {
		inherit: true,
		baseStats: { hp: 30, atk: 80, def: 90, spa: 45, spd: 45, spe: 55 },
	},
	kabutops: {
		inherit: true,
		baseStats: { hp: 60, atk: 115, def: 105, spa: 70, spd: 70, spe: 80 },
	},
	aerodactyl: {
		inherit: true,
		baseStats: { hp: 80, atk: 105, def: 65, spa: 60, spd: 60, spe: 130 },
	},
	aerodactylmega: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 80, atk: 135, def: 85, spa: 70, spd: 70, spe: 150 },
		gen: 1,
	},
	munchlax: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 135, atk: 85, def: 40, spa: 40, spd: 40, spe: 5 },
		gen: 1,
	},
	snorlax: {
		inherit: true,
		baseStats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 65, spe: 30 },
	},
	articuno: {
		inherit: true,
		baseStats: { hp: 90, atk: 85, def: 100, spa: 125, spd: 125, spe: 85 },
	},
	zapdos: {
		inherit: true,
		baseStats: { hp: 90, atk: 90, def: 85, spa: 125, spd: 125, spe: 100 },
	},
	moltres: {
		inherit: true,
		baseStats: { hp: 90, atk: 100, def: 90, spa: 125, spd: 125, spe: 90 },
	},
	dratini: {
		inherit: true,
		baseStats: { hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50 },
	},
	dragonair: {
		inherit: true,
		baseStats: { hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70 },
	},
	dragonite: {
		inherit: true,
		baseStats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
	},
	dragonitemega: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 91, atk: 124, def: 115, spa: 145, spd: 145, spe: 100 },
		gen: 1,
	},
	mewtwoarmored: {
		types: ['Psychic', 'Steel'],
		isNonstandard: null,
		gen: 1,
		name: "Mewtwo-Armored",
		heightm: 2.2,
		weightkg: 152,
		color: "Gray",
		baseStats: { hp: 106, atk: 90, def: 110, spa: 90, spd: 90, spe: 130 },
	},
	mewtwo: {
		inherit: true,
		baseStats: { hp: 106, atk: 110, def: 90, spa: 154, spd: 154, spe: 130 },
	},
	mewtwomegax: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 106, atk: 190, def: 100, spa: 154, spd: 154, spe: 130 },
		gen: 1,
	},
	mewtwomegay: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 106, atk: 150, def: 70, spa: 194, spd: 194, spe: 140 },
		gen: 1,
	},
	mew: {
		inherit: true,
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
	},
	meltan: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 46, atk: 65, def: 65, spa: 55, spd: 55, spe: 34 },
		gen: 1,
	},
	melmetal: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 135, atk: 143, def: 143, spa: 80, spd: 80, spe: 34 },
		gen: 1,
	},
	venustoise: {
		types: ['Grass', 'Water'],
		isNonstandard: null,
		name: "Venustoise",
		heightm: 2.6,
		gen: 1,
		weightkg: 136.1,
		color: "Blue",
		baseStats: { hp: 105, atk: 109, def: 131, spa: 131, spd: 131, spe: 104 },
	},
	thufizer: {
		types: ['Flying'],
		isNonstandard: null,
		name: "ThuFiZer",
		heightm: 2.5,
		gen: 1,
		weightkg: 168,
		color: "Blue",
		baseStats: { hp: 105, atk: 116, def: 116, spa: 145, spd: 145, spe: 116 }, 
	},
	zygardemega: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 216, atk: 70, def: 91, spa: 216, spd: 216, spe: 100 },
		gen: 1,
	},
	necrozmaultra: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 97, atk: 167, def: 97, spa: 167, spd: 167, spe: 129 },
		gen: 1,
	},
	rayquazamega: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 105, atk: 180, def: 100, spa: 180, spd: 180, spe: 115 },
		gen: 1,
	},
	eternatuseternamax: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 255, atk: 115, def: 250, spa: 250, spd: 250, spe: 130 },
		gen: 1,
	},
	arceus: {
		inherit: true,
		isNonstandard: null,
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		gen: 1,
	},
	bluesdad: {
		types: ['Normal'],
		isNonstandard: null,
		name: "Blue's Dad",
		heightm: 1.7,
		gen: 1,
		weightkg: 65.0,
		color: "Gray",
		baseStats: { hp: 150, atk: 1, def: 150, spa: 255, spd: 255, spe: 255 },
	},
	bluesmom: {
		types: ['Normal'],
		isNonstandard: null,
		name: "Blue's Mom",
		heightm: 1.6,
		gen: 1,
		weightkg: 55.0,
		color: "Gray",
		baseStats: { hp: 150, atk: 1, def: 150, spa: 255, spd: 255, spe: 255 },
	},
	dad: {
		types: ['Normal'],
		isNonstandard: null,
		name: "Dad",
		heightm: 1.8,
		gen: 1,
		weightkg: 70.0,
		color: "Gray",
		baseStats: { hp: 150, atk: 1, def: 150, spa: 255, spd: 255, spe: 255 },
	},
};
