export function filterSystems(systems, typeToFilter){ 
    const fiatSystems = systems.filter(system => system.attributes.market === typeToFilter);

    return fiatSystems;
}