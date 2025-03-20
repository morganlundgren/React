export const generateTimeSlots = () => {
	const startHour = 6;
	const endHour = 20;
	const interval = 15;
	let slots = [];
  
	for (let hour = startHour; hour < endHour; hour++) {
	  for (let minutes = 0; minutes < 60; minutes += interval) {
		let timeString = `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
		slots.push(timeString);
	  }
	}
	return slots;
  };
  