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
        const species = this.dex.species.get(set.species);
        const errors: string[] = [];

        const isExtremeYellow = format.id === 'gen1extremeyellow';

        // ============================
        // SPECIES LEGALITY
        // ============================
        if (!isExtremeYellow) {
            if (species.gen > 1 && !species.isNonstandard) {
                errors.push(`${species.name} is not available in this format.`);
            }
        }

        // ============================
        // MOVE LEGALITY
        // ============================
        const learnset =
            this.dex.species.getLearnsetData(species.id)?.learnset || {};

        for (const moveName of set.moves) {
            const move = this.dex.moves.get(moveName);

            // Direct learnset
            if (learnset[move.id]) continue;

            // Mega fallback to base species learnset
            if (species.baseSpecies) {
                const baseId = this.toID(species.baseSpecies);

                const baseLearnset =
                    this.dex.species.getLearnsetData(baseId)?.learnset || {};

                if (baseLearnset[move.id]) continue;
            }

            errors.push(`${species.name} cannot learn ${move.name}.`);
        }

        return errors;
    },

    // ============================
    // TEAM VALIDATION (MEGA CLAUSE)
    // ============================
    onValidateTeam(team, format) {
        const isExtremeYellow = format.id === 'gen1extremeyellow';

        let megaCount = 0;

        for (const set of team) {
            const species = this.dex.species.get(set.species);

            const isMega =
                !!species.isMega ||
                species.forme?.includes('Mega') ||
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
        // Reserved for future mechanics
    },

    // ============================
    // INIT PATCHES
    // ============================
    init() {
        // ============================
        // POKÉDEX FIXES
        // ============================
        for (const id in this.data.Pokedex) {
            const species = this.modData('Pokedex', id);
            if (!species) continue;

            // Make everything standard
            species.isNonstandard = null;
            species.gen = 1;

            // Default tier fallback
            if (!species.tier) species.tier = 'OU';

            // ============================
            // MEGA FIXES
            // ============================
            if (
                species.isMega ||
                species.forme?.includes('Mega') ||
                species.name.includes('Mega')
            ) {
                // Store base species ID for learnsets BEFORE overwriting baseSpecies
                const originalBaseSpecies = species.baseSpecies;

                // Prevent in-battle transformation behavior & sever form dependency
                species.battleOnly = undefined;
                species.baseSpecies = species.name;

                delete species.requiredItem;
                delete species.requiredMove;

                // Copy learnset from base species if needed
                if (originalBaseSpecies) {
                    const baseId = this.toID(originalBaseSpecies);

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