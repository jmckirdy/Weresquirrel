let journal = [76, 9, 4, 1, false]

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

function phi(table) {
    return( (table[3] * table[0]) - (table[2] * table[1])) /
    Math.sqrt( 
        (table[2] + table[3]) * 
        (table[0] + table[1]) * 
        (table[1] + table[3]) * 
        (table[0] + table[2]))
}

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] +=1;
    }
    return table;
}

console.log(tableFor(['pizza', journal]));



