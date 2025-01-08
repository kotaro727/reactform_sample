import { FC, SyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationFormSchema, RegistrationFormData } from "@/schemas/registrationForm";
import FormInput from '@/components/common/FormInput';
import FormSelect from '@/components/common/FormSelect';

const RegistrationForm: FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<RegistrationFormData>({
        resolver: yupResolver(registrationFormSchema),
        defaultValues: {
            username: '',
            isAgreed: false
        }
    });

    const onSubmit = (data: RegistrationFormData) => {
        alert(data);
    }

    const onReset = (e: SyntheticEvent) => {
        e.stopPropagation();
        reset();
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">登録フォーム</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <FormInput
                    id="username"
                    label="ユーザー名"
                    register={register}
                    error={errors.username?.message}
                />
                <FormInput
                    id="zipcode"
                    label="郵便番号"
                    register={register}
                    error={errors.zipcode?.message}
                />
                <FormSelect
                    id="gender"
                    label="性別"
                    options={[
                        { value: 0, label: '男性' },
                        { value: 1, label: '女性' },
                        { value: 2, label: 'その他' },
                        { value: 3, label: '回答しない' }
                    ]}
                    placeholder="性別を選択"
                    register={register}
                    error={errors.gender?.message}
                />

                <div className="flex items-center space-x-2">
                    <input
                        id="isAgreed"
                        type="checkbox"
                        {...register('isAgreed')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isAgreed" className="text-sm text-gray-700">
                        利用規約に同意する
                    </label>
                </div>
                {errors.isAgreed && (
                    <p className="text-red-500 text-sm">{errors.isAgreed.message}</p>
                )}

                <div className="flex space-x-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        送信
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;