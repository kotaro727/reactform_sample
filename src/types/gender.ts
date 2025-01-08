export type gender = {
    0: 'male';
    1: 'female';
    2: 'other';
    3: 'prefer-not-to-say';
}

export type genderKey = keyof gender;
export type genderValue = gender[genderKey]; 