 const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
 const epics =  epic.reduce((total , current) => total +=current + " ")
 console.log(epics)