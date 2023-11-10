function showMagicians(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
  const magicianNames: string[] = ["Dynamo", "Houdini", "Doug Henning", "Max Maven"];
  
  showMagicians(magicianNames);
  