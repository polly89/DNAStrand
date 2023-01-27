const DNAStrand = (dna) => {
    let pattern = {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G'
    }

    return dna.replace(/A|T|G|C/g, function(str){ // g is a global modifier in the regex, it allows you to replace all
      return pattern[str];  //object bracket notation
    });
}

console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));
