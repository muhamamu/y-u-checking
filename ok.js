function keepVowels(input) {
    const vowels = 'aeiouAEIOU';
    const result = input
        .split('')
        .filter(char => vowels.includes(char))
        .join('');
    console.log(result);
}

keepVowels('brochacho ');
keepVowels('niggatron on the counter');