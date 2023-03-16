const personalData = {
    'name': 'Mohamed Fazil',
    'age': '24',
    'email': 'fazilmm860@gmail.com',
    'address': [
        {
            'type': 'residence',
            'street': '9/88 silk street',
            'city': 'Kozhikode',
            'state': 'Kerala',
            'zip': '673001'
        },
        {
            'type': 'work',
            'street': '911/88 Abc street',
            'city': 'Kozhikode',
            'state': 'Kerala',
            'zip': '673033'
        },
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
for (let phone of personalData.phone_number) {
    console.log(`${phone.type}:${phone.number}`);
}
for (let address of personalData.address) {
    console.log(`${address.type}: ${address.zip}`);
}