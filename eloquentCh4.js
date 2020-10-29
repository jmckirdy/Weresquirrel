var journal = ['carrots', 'pizza', 'beer', 'nuts'];

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

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

for (let event of journalEvents(journal)) {
    console.log(event + ":", phi(tableFor(event, journal)));
}

// console.log(journalEvents([journal]));



