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

for (let key in personalData) {
    console.log(`${key}:${JSON.stringify(personalData[key])}`);
}


/* In this , I define a constant 'personolData' the contains the sample JSON data. Then we use
a for-in loop to loop through each property in the 'personalData' object. for each property ,we 
log the property key and its value using 'JSON.stringify()' to convert the value to a string for 
logging purpose. */