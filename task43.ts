function makeGreats(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
  }
  
  const originalMagicianNames: string[] = ["David Copperfield", "Houdini", "Derren Brown", "David Blaine"];
  
  const greatMagicianNames: string[] = makeGreats([...originalMagicianNames]);
  
  function showMagician(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
  showMagician(originalMagicianNames);
  
  showMagician(greatMagicianNames);
  