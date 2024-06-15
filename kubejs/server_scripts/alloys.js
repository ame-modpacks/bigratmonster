ServerEvents.recipes((event) => {
    event.shapeless(
        Item.of("silentcompat:sculk_alloy_ingot"),
        [
            "apotheosis:warden_tendril",
            "minecraft:echo_shard",
            "2x mekanism:ingot_refined_obsidian"
        ]
    )

    event.shapeless(
        Item.of("silentcompat:crystalline_alloy"),
        [
            "2x enderio:ender_crystal",
            "2x mekanism:ingot_refined_glowstone"
        ]
    )

    event.shapeless(
        Item.of("silentcompat:capsid_alloy"),
        [
            "2x minecraft:diamond",
            "2x thermal_expansion:enderium_alloy"
        ]
    )
})
