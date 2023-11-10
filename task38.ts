function describeCity(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  describeCity("Islamabad", "Pakistan");
  describeCity("California", "USA");
  describeCity("Tokyo"); 
  