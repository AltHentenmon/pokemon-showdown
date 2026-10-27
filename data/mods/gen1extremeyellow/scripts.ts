export const Scripts: ModdedBattleScriptsData = {
    inherit: 'gen1',
    gen: 1,

    getCategory(move) {
        return move.category;
    },

    // ============================
    // TEAM VALIDATION
    // ============================
    onValidateSet(set, format) {
        if (!set.species) {
            return [`The Pokémon field cannot be empty.`];
        }

        const species = this.dex.species.get(set.species);
        const errors: string[] = [];

        const isExtremeYellow = format.id === 'gen1extremeyellow';

        // ============================
        // SPECIES EXISTENCE
        // ============================
        if (!species.exists) {
            return [`The Pokémon "${set.species}" does not exist.`];
        }

        // ============================
        // SPECIES LEGALITY
        // ============================
        if (!isExtremeYellow && species.gen > 1) {
            errors.push(`${species.name} is not available in this format.`);
        }

        // ============================
        // MOVE LEGALITY
        // ============================
        const learnset =
            this.dex.species.getLearnsetData(species.id)?.learnset || {};

        let baseLearnset: { [moveid: string]: any } = {};

        if (species.baseSpecies && species.baseSpecies !== species.name) {
            const baseId = this.toID(species.baseSpecies);
            baseLearnset =
                this.dex.species.getLearnsetData(baseId)?.learnset || {};
        }

        for (const moveName of set.moves) {
            const move = this.dex.moves.get(moveName);

            if (!move.exists) {
                errors.push(`${species.name} cannot learn ${moveName}.`);
                continue;
            }

            if (learnset[move.id] || baseLearnset[move.id]) continue;

            errors.push(`${species.name} cannot learn ${move.name}.`);
        }

        return errors;
    },

    // ============================
    // TEAM VALIDATION: MEGA CLAUSE
    // ============================
    onValidateTeam(team, format) {
        const isExtremeYellow = format.id === 'gen1extremeyellow';
        let megaCount = 0;

        for (const set of team) {
            if (!set.species) continue;
            const species = this.dex.species.get(set.species);

            if (!species.exists) continue;

            const isMega =
                !!species.isMega ||
                !!species.forme?.includes('Mega') ||
                species.name.includes('Mega');

            if (isMega) megaCount++;

            if (isMega && !isExtremeYellow) {
                return [
                    `${species.name} is only allowed in Extreme Yellow.`,
                ];
            }
        }

        if (isExtremeYellow && megaCount > 1) {
            return [
                'You may only use one Mega Pokémon per team in Extreme Yellow.',
            ];
        }
    },

    // ============================
    // SWITCH IN
    // ============================
    onSwitchIn(pokemon) {
        // Reserved for future mechanics.
    },

    // ============================
    // INIT PATCHES
    // ============================
    init() {
        // ============================
        // POKEDEX & ALIAS FIXES
        // ============================
        for (const id in this.data.Pokedex) {
            const species = this.modData('Pokedex', id);
            if (!species) continue;

            species.isNonstandard = null;
            species.gen = 1;

            if (!species.tier) species.tier = 'OU';

            // ============================
            // MEGA FIXES & AUTO-ALIASING
            // ============================
            if (species.isMega || species.forme?.includes('Mega') || species.name.includes('Mega')) {
                species.battleOnly = undefined;
                species.requiredItem = undefined;
                species.requiredMove = undefined;

                // Automatically generate aliases so variations like "Charizard X" or "Victreebel-Mega" resolve properly
                const baseId = this.toID(species.baseSpecies);
                if (baseId) {
                    const formeName = species.name.replace(species.baseSpecies, '').toLowerCase().replace(/[^a-z0-9]/g, '');
                    const shorthandId = `${baseId}${formeName}`;
                    
                    if (!this.data.Aliases[shorthandId]) {
                        this.data.Aliases[shorthandId] = id;
                    }
                }

                // Ensure Mega learnsets exist independently.
                const baseSpeciesName = species.baseSpecies;
                if (baseSpeciesName) {
                    const baseLearnset =
                        this.data.Learnsets[baseId]?.learnset;

                    if (baseLearnset && !this.data.Learnsets[id]) {
                        this.modData('Learnsets', id, {
                            learnset: { ...baseLearnset },
                        });
                    }
                }
            }
        }

        // ============================
        // MOVE FIXES
        // ============================
        for (const id in this.data.Moves) {
            const move = this.modData('Moves', id);
            if (!move) continue;

            move.isNonstandard = null;
            move.gen = 1;
        }

        // ============================
        // ITEM FIXES
        // ============================
        for (const id in this.data.Items) {
            const item = this.modData('Items', id);
            if (!item) continue;

            item.isNonstandard = null;
            item.gen = 1;
        }
    },
};