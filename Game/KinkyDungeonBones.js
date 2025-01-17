"use strict";

let KinkyDungeonBones = {

};

let KDPatronAdventurers = [
];

let KDPatronCustomEnemies = new Map([
	["Wolfgirl", [
		{name: "Miny", color: "#9c2a70", prisoner: false, free: true, customPlayLine: "", customIntro: "You should join my pack!", customSprite: ""},
		{name: "Sivasa", color: "#8888ff", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Alexandra", color: "#6241e1", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Nekora", color: "#42a459", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Emeia", color: "#00A7FF", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Dana", color: "#4444ff", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Yami", color: "#88ff88", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Animi", color: "#ff9999", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Ladica", color: "#44ff44", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "FlameTail", color: "#ff5555", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Nobu", color: "#00FFFF", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Moranql", color: "#ff5555", prisoner: true, free: false, customPlayLine: "", customIntro: "0x0", customSprite: ""},
		{name: "Harumi", color: "#F223D4", prisoner: true, free: true, customPlayLine: "", customIntro: "This is an uncivilized place, I have some things to give you...", customSprite: ""},
	],
	],
	["WolfgirlPet", [
		{name: "Demetria", color: "#c9d4fd", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Arii", color: "#ff88ff", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Aleiza", color: "#32d8ff", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Dana", color: "#000B77", prisoner: true, free: true, customPlayLine: "", customIntro: "*stands there... MENACINGLY*", customSprite: ""},
	],
	],
	["Nurse", [
		{name: "Rena", color: "#a452ff", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Str Nurse", color: "#ffffff", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Fableite", color: "#999999", prisoner: false, free: true, customPlayLine: "", customIntro: "Care for an Examination?", customSprite: ""},
	],
	],
	["ElementalLatex", [
		{name: "Samsy", color: "#2f847f", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Dragon", [
		{name: "Garss", color: "#ff8888", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Conjurer", [
		{name: "Stela", color: "#9c2767", prisoner: false, free: true, customPlayLine: "Selly", customIntro: "I am Stela. But to you, sweetie? Call me Mistress.", customSprite: "Selly",
			pets: {
				"Frog": [
					{name: "Parov", color: "#781d4f", prisoner: false, free: true, customPlayLine: "", customIntro: "Glorp glorpy glorp.", customSprite: "Parov"},
				]
			},
		},
		{name: "Sariel", color: "#aa88ff", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: "",
			pets: {
				"Frog": [
					{name: "Fred", color: "#88ff88", prisoner: false, free: true, customPlayLine: "", customIntro: "Glorp glorpy glorp.", customSprite: ""},
				]
			},
		},
		{name: "Kathy", color: "#aaff88", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: "",
			pets: {
				"Frog": [
					{name: "Fred", color: "#88ff88", prisoner: false, free: true, customPlayLine: "", customIntro: "Glorp glorpy glorp.", customSprite: ""},
				]
			},
		},
		{name: "Luna", color: "#ffaa88", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: "",
			pets: {
				"Frog": [
					{name: "Fred", color: "#88ff88", prisoner: false, free: true, customPlayLine: "", customIntro: "Glorp glorpy glorp.", customSprite: ""},
				]
			},
		},
	],
	],
	["DragonShadow", [
		{name: "Gwen", color: "#7b43ef", prisoner: false, free: true, customPlayLine: "DragonShadowGwen", customIntro: "", customSprite: ""},
	],
	],
	["Adventurer_Brat_Fighter", [
		{name: "Rook", color: "#ff5555", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: "Rook"},
	],
	],
	["DragonLeaderDuelist", [
		{name: "Kaitlyn", color: "#ff5555", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["NinjaStalker", [
		{name: "Alisa", color: "#575699", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: "Alisa"},
	],
	],
	["Ninja", [
		{name: "Alisa", color: "#575699", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: "Alisa"},
	],
	],
	["SlimeAdv", [
		{name: "Rena", color: "#C8C8FF", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Rappy The Toy", color: "#C759FF", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Yolana", color: "#92e8c0", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["SmallSlime", [
		{name: "TY", color: "#ff5555", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["WitchRope", [
		{name: "Kamikaze roper", color: "#ffae70", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["MaidforceStalker", [
		{name: "Chandra", color: "#340000", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["ApprenticeSlime", [
		{name: "Gabrielle", color: "#ffff00", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Alchemist", [
		{name: "Morgan", color: "#6241e1", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Myth", color: "#22ffff", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Dressmaker", [
		{name: "A Lazy Dressmaker", color: "#fad6ff", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Alice", color: "#ee99ee", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Maidforce", [
		{name: "Ester", color: "#97edca", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Rest", color: "#999999", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Rika Mercury", color: "#92e8e5", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Maidlinmo", color: "#ff5555", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "April", color: "#4444ff", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Aika", color: "#be52e6", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Kiera", color: "#310051", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["MaidforceHead", [
		{name: "FrostLunar", color: "#0055ff", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["WitchFlame", [
		{name: "Myrtrice", color: "#d30000", prisoner: false, free: true, customPlayLine: "", customIntro: "All creatures are made to bow to me.", customSprite: "Myrtrice"},
	],
	],
	["WitchSlime", [
		{name: "Kathy Narlato", color: "#4e3da9", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Claire", color: "#55ff55", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["WitchWater", [
		{name: "Marine", color: "#4fa4b8", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["ElementalEarth", [
		{name: "Entombment", color: "#ffae70", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["BanditPet", [
		{name: "Liz", color: "#d480bb", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Jinxy", color: "#7d27a5", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Genna", color: "#42bfe8", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["ElfRanger", [
		{name: "Valeria", color: "#ebaaf4", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Elf", [
		{name: "Ferahla", color: "#44ff44", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Dollsmith", [
		{name: "Kiera", color: "#310051", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
]);


let KDPatronsSpecial = {
	"Anonymous ": 2,
	"cyberjoel": 2,
	"finn ": 2,
	"Samantha Lear": 2,
	"Private ": 2,
	"Chet Vargas": 2,
	"Siegfried Kübler": 2,
	"Song": 2,
	"The-Fisher-King": 2,
	"Churro": 2,
	"Laioken ": 2,
	"Dex♪ ": 1,
	"Anthony Royle": 1,
	"Shogo ": 1,
	"Gamefan ": 1,
	"Blox ": 1,
	"Jerome Peterson": 1,
	"selly-grim ": 1,
	"Alexis Octavia": 1,
	"Noxgarm ": 1,
	"Slacker": 1,
	"Hellgete ": 1,
	"Flame ": 1,
	"WATA ": 1,
	"FrenzyFlame": 1,
	"Kieraakari ": 1,
	"Loudest_Quiet_Person": 1,
	"Rest": 1,
	"atetete ": 1,
	"Mechio ": 1,
	"Dazman1234 ": 1,
	"Thefabulousglaceon": 1,
	"Rika": 1,
	"0xA4C1B842": 1,
	"LukeB ": 1,
	"devan ": 1,
	"Physicsphail": 1,
	"Miro": 1,
	"Loony ": 1,
	"WhiteSniper": 1,
	"Thatguu": 1,
	"Somprad ": 1,
	"Geng114514 ": 1,
	"John  Toenniessen": 1,
	"Cat Hawke": 1,
	"Míša": 1,
	"RNFRaptor ": 1,
	"Diablo200": 1,
	"Cerb ": 1,
	"isaiah lewis": 1,
	"Mellenia": 1,
	"LordFabricator": 1,
	"Zero K": 1,
	"Dakra ": 1,
	"Victor ": 1,
	"damit damit": 1,
	"nnm711 ": 1,
	"Dragokahn": 1,
	"Meekohi": 1,
	"Phoenix ": 1,
	"zipidyzap ": 1,
	"Cera": 1,
	"CuvyanTaylor ": 1,
	"anton allison": 1,
	"Shrimpy ": 1,
	"Tatsuya Shiba": 1,
	"Snekus ": 1,
	"nuzzels": 1,
	"Minescence ": 1,
	"HanQing Zhao": 1,
	"James Kirkman": 1,
	"OTKTamashii ": 1,
	"darklink11 ": 1,
	"Hannes": 1,
	"Arentios ": 1,
	"Nymjii": 1,
	"Linex": 1,
	"Mister Mythe": 1,
	"CMDR Salen": 1,
	"bl ah": 1,
	"Salmon": 1,
	"Trinan": 1,
	"sqrt10pi": 1,
	"hopefast ": 1,
	"jeepk36": 1,
	"Shakymunch": 1,
	"Samsy": 1,
	"Pyros51 ": 1,
	"Aussie895": 1,
	"Hungvipbcsok": 1,
	"hideki hirose": 1,
	"Girador ": 1,
	"Traynfreek ": 1,
	"GRASS": 1,
	"Heavy Blues": 1,
	"Pyron ": 1,
	"Kritsanapong Jarutatpimol": 1,
	"Hanqing Zhao": 1,
	"Yagami Yami": 1,
	"Wossa ": 1,
	"FlameTail": 1,
	"火披薩 水": 1,
	"Sewdah nim": 1,
	"Crimson": 1,
	"X27": 1,
	"Nyarlato": 1,
	"Nightkin": 1,
	"Sylicix": 1,
	"Null Fame": 1,
	"AdventCirno ": 1,
	"Sera The Crocsune": 1,
	"Masaki Hara": 1,
	"Eric Rothman": 1,
	"영승 박": 1,
	"Claire Stephens": 1,
	"koch ": 1,
	"Joecoolzx": 1,
	"森 韩": 1,
	"ComradeArmtyom ": 1,
	"Hjake2 ": 1,
	"Chen yu": 1,
	"Sinohisaki": 1,
	"linlizheng ": 1,
	"john1304": 1,
	"Zora": 1,
	"suddys ": 1,
	"Robert Gomez": 1,
	"亦斌 陳": 1,
	"Feltenix": 1,
	"Aika ": 1,
	"sCaREaGle": 1,
	"Mike Salot": 1,
	"Roger Gamer": 1,
};

let KDPatrons = [
	"Anonymous",
	"cyberjoel",
	"finn",
	"Samantha Lea",
	"Private",
	"Chet Varga",
	"Siegfried Küble",
	"Son",
	"The-Fisher-Kin",
	"Churr",
	"Laioken",
	"Dex♪",
	"Anthony Royl",
	"Shogo",
	"Gamefan",
	"Blox",
	"Jerome Peterso",
	"selly-grim",
	"Alexis Octavi",
	"Noxgarm",
	"Slacke",
	"Hellgete",
	"Flame",
	"WATA",
	"FrenzyFlam",
	"Kieraakari",
	"Loudest_Quiet_Perso",
	"Res",
	"atetete",
	"Mechio",
	"Dazman1234",
	"Thefabulousglaceo",
	"Rik",
	"0xA4C1B84",
	"LukeB",
	"devan",
	"Physicsphai",
	"Mir",
	"Loony",
	"WhiteSnipe",
	"Thatgu",
	"Somprad",
	"Geng114514",
	"John  Toenniesse",
	"Cat Hawk",
	"Míš",
	"RNFRaptor",
	"Diablo20",
	"Cerb",
	"isaiah lewi",
	"Melleni",
	"LordFabricato",
	"Zero ",
	"Dakra",
	"Victor",
	"damit dami",
	"nnm711",
	"Dragokah",
	"Meekoh",
	"Phoenix",
	"zipidyzap",
	"Cer",
	"CuvyanTaylor",
	"anton alliso",
	"Shrimpy",
	"Tatsuya Shib",
	"Snekus",
	"nuzzel",
	"Minescence",
	"HanQing Zha",
	"James Kirkma",
	"OTKTamashii",
	"darklink11",
	"Hanne",
	"Arentios",
	"Nymji",
	"Line",
	"Mister Myth",
	"CMDR Sale",
	"bl a",
	"Salmo",
	"Trina",
	"sqrt10p",
	"hopefast",
	"jeepk3",
	"Shakymunc",
	"Sams",
	"Pyros51",
	"Aussie89",
	"Hungvipbcso",
	"hideki hiros",
	"Girador",
	"Traynfreek",
	"GRAS",
	"Heavy Blue",
	"Pyron",
	"Kritsanapong Jarutatpimo",
	"Hanqing Zha",
	"Yagami Yam",
	"Wossa",
	"FlameTai",
	"火披薩 ",
	"Sewdah ni",
	"Crimso",
	"X2",
	"Nyarlat",
	"Nightki",
	"Sylici",
	"Null Fam",
	"AdventCirno",
	"Sera The Crocsun",
	"Masaki Har",
	"Eric Rothma",
	"영승 ",
	"Claire Stephen",
	"koch",
	"Joecoolz",
	"森 ",
	"ComradeArmtyom",
	"Hjake2",
	"Chen y",
	"Sinohisak",
	"linlizheng",
	"john130",
	"Zor",
	"suddys",
	"Robert Gome",
	"亦斌 ",
	"Felteni",
	"Aika",
	"sCaREaGl",
	"Mike Salo",
	"Roger Game",
	"playjoue",
	"CorruptNightmar",
	"James Mc",
	"Rustfal",
	"mebs",
	"Knocksinn",
	"Lazulill",
	"nubbs99",
	"werty989898",
	"John Haversha",
	"Ron Lsr",
	"Vikingberserke",
	"NDW",
	"SaiZar",
	"Rei Huan",
	"Karel Novotn",
	"Lele",
	"逗比 ",
	"ML",
	"Jose Garci",
	"john holme",
	"The_rogue",
	"And",
	"ItsYahboi",
	"ShinFeni",
	"Travis Frazie",
	"Tom Gree",
	"Calum Wrigh",
	"Rangeronfir",
	"Robert Beardsle",
	"treemen55",
	"Mikhail Petrovi",
	"daniel curti",
	"Tyson Batte",
	"Shensh",
	"Arkus8",
	"FrostLuna",
	"Mark IC",
	"Sydney Shackelfor",
	"Clair",
	"Ibford",
	"ぱっち 嘘",
	"Draco Redbol",
	"Frank Zhan",
	"yan men",
	"RL_272",
	"PRAYMAY",
	"米 ",
	"hSXZM",
	"Jeff Caud",
	"ui",
	"Anim",
	"lzzzzzz",
	"Zhenyu Gu",
	"Tob",
	"Alex Kli",
	"hanha",
	"Ravebunny069",
	"SilentNobush",
	"laysakuya",
	"塵狐",
	"PWMRM",
	"Violet EverGardne",
	"2561333707",
	"Daniel Krus",
	"Delta Ros",
	"HeDead",
	"ViniJones",
	"Micheal Clea",
	"AkenoRe",
	"tsang",
	"kamil",
	"91林先",
	"1 ",
	"Abruptle",
	"Akaci",
	"Alvareoniu",
	"ank ",
	"Benne",
	"Bullethell",
	"Cailin Laun",
	"Cameron Knowle",
	"Carlos Estev",
	"CCCgud",
	"Chris Barne",
	"Cicer",
	"Cicero Kingson",
	"CLUBT",
	"David J. Quand",
	"DeadMaster216",
	"death14",
	"DeltaCode",
	"Doidoxy",
	"ez06358",
	"FD Ho",
	"FigelNarage",
	"goddislikem",
	"Goodca",
	"Hannichib",
	"Hologram Knigh",
	"JamesWang",
	"Johanne",
	"Jun ",
	"Kikaiman",
	"kiriharuk",
	"KombatWombat",
	"KrowM",
	"KTBDG",
	"Leo Cli",
	"Lin",
	"Lowezar",
	"lugual-lupe",
	"lushichuanshu",
	"Matatus Gratoru",
	"McBuglefiners7",
	"Melody",
	"Meow327",
	"Mike Watt",
	"Min",
	"niwakaame",
	"Noe",
	"Nokona9",
	"PlatiS",
	"Regenal",
	"Reizi=Tigerfis",
	"Renzo",
	"Roy",
	"Salvador Mel",
	"Shova",
	"siro0v",
	"Smog47",
	"Sper",
	"Star",
	"suoluoke",
	"Swave",
	"TheRemenan",
	"Tony Johnso",
	"TotallyNotADuck",
	"usndee",
	"Var",
	"Wolfman",
	"yan yan",
	"Zhangwei",
	"リあЯЙКШЖДェロычゥク",
	"伩 ",
	"八格野",
	"家華 ",
	"杨勇 ",
	"禹天 ",
	"霞晖灬",
];

/**
 *
 * @param {enemy} Enemy
 * @param {entity} e
 * @param {number} chanceBoost
 * @returns {any}
 */
function KDProcessCustomPatron(Enemy, e, chanceBoost) {
	let chance = 0.05 + (chanceBoost || 0); // Lower chance if 'subordinate'
	if (!e.CustomName && KDPatronCustomEnemies.get(Enemy.name) && KDRandom() < chance) {
		let customs = KDPatronCustomEnemies.get(Enemy.name).filter((element) => {
			return (element.prisoner && KDEnemyHasFlag(e, "imprisoned")) || (element.free && !KDEnemyHasFlag(e, "imprisoned"));
		});
		if (customs.length > 0) {
			let custom = customs[Math.floor(customs.length * KDRandom())];
			e.CustomName = custom.name;
			e.CustomNameColor = custom.color;
			e.CustomSprite = custom.customSprite;
			if (custom.customPlayLine) {
				e.playLine = custom.customPlayLine;
			}
			if (custom.customIntro) {
				e.intro = custom.customIntro;
			}
			return custom;
		}
	}
	return undefined;
}


/**
 *
 * @param {any[]} pets
 * @param {entity} e
 * @param {number} index
 * @returns {any}
 */
function KDProcessCustomPatronPet(pets, e, index) {
	if (pets) {
		let customs = pets[e.Enemy.name];
		if (customs?.length > 0 && index < customs.length) {
			let custom = customs[index];
			e.CustomName = custom.name;
			e.CustomNameColor = custom.color;
			e.CustomSprite = custom.customSprite;
			if (custom.customPlayLine) {
				e.playLine = custom.customPlayLine;
			}
			if (custom.customIntro) {
				e.intro = custom.customIntro;
			}
			return custom;
		}
	}
	return undefined;
}