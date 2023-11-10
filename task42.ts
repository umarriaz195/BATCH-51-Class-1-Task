function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
  }
  
 
  const magicianNamess: string[] = ["Dynamo", "Houdini", "Doug Henning", "Max Maven"];
  

  const greatMagicians: string[] = makeGreat(magicianNamess);
  

  function showMagicianss(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
showMagicianss(greatMagicians);
  