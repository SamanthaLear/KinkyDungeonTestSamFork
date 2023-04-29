let CharacterAppearancePreviousEmoticon = null;

/**
 * Resets the character to it's default appearance
 */
function CharacterAppearanceSetDefault(C: Character): void {
	C.Appearance = [];
	C.Pose = [];
}

/**
 * Removes all items that can be removed, making the character naked. Checks for a blocking of CosPlayItem removal.
 */
function CharacterAppearanceNaked(C: Character): void {
	for (let A = C.Appearance.length - 1; A >= 0; A--)
		if (!C.Appearance[A].Model?.Protected)
			C.Appearance.splice(A, 1);
}

/**
 * Sets an item in the character appearance
 * @param C - The character whose appearance should be changed
 * @param Group - The name of the corresponding groupr for the item
 * @param ItemAsset - The asset collection of the item to be changed
 * @param NewColor - The new color (as "#xxyyzz" hex value) for that item
 * @param DifficultyFactor - The difficulty, on top of the base asset difficulty, that should be assigned
 * to the item
 * @param ItemMemberNumber- The member number of the player adding the item - defaults to -1
 * @param Refresh - Determines, wether the character should be redrawn after the item change
 */
function CharacterAppearanceSetItem(C: Character, Group: string, ItemAsset: any, NewColor: string | string[], DifficultyFactor: number = 0, ItemMemberNumber: number = -1, Refresh: boolean = true): void {}


/**
 * Serialises a character's appearance into an abbreviated string for backup purposes
 * @param C - The character whose appearance should be serialised
 * @returns A serialised version of the character's current appearance
 */
function CharacterAppearanceStringify(C: Character): string {
	return AppearanceItemStringify(C.Appearance);
}

function AppearanceItemStringify(Item: any[]): string {
	for (let r of Item) {
		if (r.Model?.Filters) r.Filters = r.Model.Filters;
	}
	return JSON.stringify(Item, (key, value) => {
		if (key === "Asset") {
			return value.Group.Family + "/" + value.Group.Name + "/" + value.Name;
		}
		if (key === "Model") {
			return value.Name;
		}
		return value;
	});
}

/**
 * Restores a character's appearance from a serialised string generated by CharacterAppearanceStringify
 * @param C - The character whose appearance should be restored
 * @param backup - The serialised appearance to restore
 */
function CharacterAppearanceRestore(C: Character, backup: string): void {
	C.Appearance = AppearanceItemParse(backup);
}

function AppearanceItemParse(stringified: string): any[] {
	let ret = JSON.parse(stringified, (key, value) => {
		if (key === "Model") {
			return JSON.parse(JSON.stringify(ModelDefs[value]));
		}
		return value;
	});
	for (let r of ret) {
		if (r.Filters && r.Model) r.Model.Filters = r.Filters;
	}
	return ret;
}


function AppearanceCleanup(C: Character) {
	for (let A = 0; A < C.Appearance.length; A++) {
		if (!C.Appearance[A].Model) {
			C.Appearance.splice(A, 1);
			A -= 1;
		}
	}
}