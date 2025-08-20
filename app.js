const offices = [
  { name: 'USA-CA-Bakersfield', address: 'Bakersfield, CA' },
  { name: 'USA-CA-Santa Ana', address: 'Santa Ana, CA' },
  { name: 'USA-CA-Antioch', address: 'Antioch, CA' },
  { name: 'USA-OR-Portland', address: 'Portland, OR' },
  { name: 'USA-AZ-Phoenix', address: 'Phoenix, AZ' },
  { name: 'USA-LA-Baton Rouge', address: 'Baton Rouge, LA' },
  { name: 'USA-AL-Pelham', address: 'Pelham, AL' },
  { name: 'USA-OH-Brecksville', address: 'Brecksville, OH' },
  { name: 'USA-VA-Roanoke', address: 'Roanoke, VA' },
  { name: 'USA-MA-Newburyport', address: 'Newburyport, MA' },
  { name: 'USA-PA-Bethlehem', address: 'Bethlehem, PA' },
  { name: 'USA-PA-Pittsburgh', address: 'Pittsburgh, PA' },
  { name: 'USA-WA-Auburn', address: 'Auburn, WA' },
  { name: 'USA-IL-Elk Grove Village', address: 'Elk Grove Village, IL' },
  { name: 'USA-IL-Wauconda', address: 'Wauconda, IL' },
  { name: 'USA-TX-Deer Park', address: 'Deerwood Glen Dr, Deer Park, TX' },
  { name: 'USA-TX-New Braunfels', address: 'New Braunfels, TX' },
  { name: 'USA-WA-Bellingham', address: 'Bellingham, WA' },
  { name: 'USA-CO-Denver', address: 'Denver, CO' },
  { name: 'USA-MI-Mt Pleasant', address: 'Mt Pleasant, MI' },
  { name: 'USA-MI-Royal Oak', address: 'Royal Oak, MI' },
  { name: 'USA-FL-Plant City', address: 'Plant City, FL' },
  { name: 'USA-UT-Spanish Fork', address: 'Spanish Fork, UT' },
  { name: 'USA-TX-Carrollton', address: 'Carrollton, TX' },
];

document.getElementById('find-office').addEventListener('click', () => {
  const inputAddress = document.getElementById('address').value.trim();
  if (!inputAddress) {
    alert('Please enter an address.');
    return;
  }

  const service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [inputAddress],
      destinations: offices.map((o) => o.address),
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
    },
    (response, status) => {
      if (status !== 'OK') {
        document.getElementById('results').innerText = `Error: ${status}`;
        return;
      }

      const results = response.rows[0].elements;

      // Build array of valid distances
      let validDistances = [];
      for (let i = 0; i < results.length; i++) {
        if (results[i].status === 'OK') {
          validDistances.push({
            index: i,
            distanceValue: results[i].distance.value,
            distanceText: results[i].distance.text,
            durationText: results[i].duration.text,
          });
        }
      }

      // Sort and get top 3
      validDistances.sort((a, b) => a.distanceValue - b.distanceValue);
      let top3 = validDistances.slice(0, 3);

      if (top3.length === 0) {
        document.getElementById('results').innerText =
          'No valid results found.';
        return;
      }

      // Display results
      let output = 'Closest Montrose Offices:\n\n';
      top3.forEach((entry, rank) => {
        const office = offices[entry.index];
        output += `${rank + 1}. ${office.name}\nDistance: ${
          entry.distanceText
        }, Time: ${entry.durationText}\n\n`;
      });

      document.getElementById('results').innerText = output;
    }
  );
});