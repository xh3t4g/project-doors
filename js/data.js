const doors = [];

for (let i = 1; i <= 97; i++) {
    const num = String(i).padStart(3, "0");
    doors.push ({
        img: `assets/images/${num}.jpg`
    })
}

