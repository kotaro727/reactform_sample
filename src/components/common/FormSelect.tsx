import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { RegistrationFormData } from '@/schemas/registrationForm';

interface Option {
    value: number | string;
    label: string;
}

interface FormSelectProps {
    id: keyof RegistrationFormData;
    label: string;
    options: Option[];
    placeholder?: string;
    error?: string;
    register: UseFormRegister<RegistrationFormData>;
}

const FormSelect: FC<FormSelectProps> = ({
    id,
    label,
    options,
    placeholder = '選択してください',
    error,
    register
}) => {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <select
                id={id}
                {...register(id)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}
        </div>
    );
};

export default FormSelect; 