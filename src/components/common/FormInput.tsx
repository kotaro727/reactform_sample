import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { RegistrationFormData } from '@/schemas/registrationForm';

interface FormInputProps {
    id: keyof RegistrationFormData;
    label: string;
    type?: string;
    error?: string;
    register: UseFormRegister<RegistrationFormData>;
}

const FormInput: FC<FormInputProps> = ({ id, label, type = 'text', error, register }) => {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                id={id}
                type={type}
                {...register(id)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}
        </div>
    );
};

export default FormInput; 