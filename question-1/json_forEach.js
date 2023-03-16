const personalData = {
    'name': 'Mohamed Fazil',
    'age': '24',
    'email': 'fazilmm860@gmail.com',
    'address': [
        {
            'street': '9/88 silk street',
            'city': 'Kozhikode',
            'state': 'Kerala',
            'zip': '673001'
        }
    ],

    'phone_number': [
        {
            'type': 'home',
            'number': '+91 77365 38040'
        },
        {
            'type': 'work',
            'number': '+91 80860 90680'
        }
    ]
};
Object.entries(personalData).forEach(([key, value]) => {
    console.log(`${key}:${JSON.stringify(value)}`);
});

/*use the forEach() method to loop through the object
 entries using Object.entries(), and then we log each entry key 
 and its value to the console. */


/* Object.entries() is a built-in method in JavaScript that returns 
 an array of a given object's own enumerable property [key, value] pairs . */
