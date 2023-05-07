function simp(num) {
    if (num <= 1 || num > 1000) {
        console.log('Данные неверны');
        return;
    }

    let simp = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            simp = false;
            break;
        }
    }

    if (simp) {
        console.log(`${num} - простое число`);
    } else {
        console.log(`${num} - не является простым числом`);
    }
}

simp(7); // 7 - простое число
simp(10); // 10 - не является простым числом
simp(0); // Данные неверны