        //my first js code
        console.log('Hello world');

        //let name = 'Mosh';
        console.log(name);
        // nicht reservierte schlüsselwörter
        // ausdrucksvolle namen
    s    // nicht anfangen mit einer nummer (1name)
        // no space or hypen
        // je nach situation sensibel

       // let firstName = 'Mosh';
        lastName = 'Hamedani';

        let interestRate = 0.3;
        interestRate = 1;
        console.log(interestRate);

        //let name = 'Mosh'; //string literal
        //let age = '30'; // number literal
        let isApproved = true; //= false; // boolean literal
        let firstName = undefined;
        let lastName = null;
        //let selectedColor = 'Red';
        let selectedColor = null;

        //Null = cealr value of variable
        let name = 'Mosh';
        let age = 30;
        let person = {
            name: 'Mosh',
            age: 30
        };

        // dot notation
        person.name = 'John';

        // bracket Notation
        let selection = 'name';
        //person['name'] = 'Mary';
        person[selection] = 'Mary';

        console.log(person.name);

        let selectedColors = ['red', 'blue'];
        selectedColors[2] = 1;
        console.log(selectedColors.length);

       // let number = 1;

        function greet(name) {
            console.log('Hello' + name + '' + lastName);
        };

        greet('John', 'Smith');
        //greet('Mary');

        //calculating a value
        function square(number) {
           return number * number;
        }

        //let number = square(2);
        console.log(square(2));
