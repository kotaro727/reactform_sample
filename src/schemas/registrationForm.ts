import * as yup from "yup";
import { genderKey } from "@/types/gender";
import type { InferType } from "yup";

export const registrationFormSchema = yup.object({
    username: yup.string()
        .required('ユーザー名は必須です'),
    zipcode: yup.string()
        .matches(/^\d{7}$/, '郵便番号は7桁の数字で入力してください'),
    gender: yup.mixed<genderKey>()
        .oneOf([0, 1, 2, 3] as const, '正しい性別を選択してください'),
    isAgreed: yup.boolean()
        .oneOf([true], '利用規約に同意する必要があります')
}).required();

export type RegistrationFormData = InferType<typeof registrationFormSchema>;