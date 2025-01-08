import { FC, SyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationFormSchema, RegistrationFormData } from "../schemas/registrationForm";

const RegistrationForm: FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<RegistrationFormData>({
        resolver: yupResolver(registrationFormSchema),
        defaultValues: {
            username: '',
            isAgreed: false
        }
    });

    const onSubmit = (data: RegistrationFormData) => {
        console.log(data);
    }

    const onReset = (e: SyntheticEvent) => {
        e.stopPropagation();
        reset();
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        id="username"
                        {...register('username')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm">{errors.username.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                        Zipcode
                    </label>
                    <input
                        id="zipcode"
                        {...register('zipcode')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.zipcode && (
                        <p className="text-red-500 text-sm">{errors.zipcode.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Gender
                    </label>
                    <select
                        id="gender"
                        {...register('gender')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select gender</option>
                        <option value={0}>Male</option>
                        <option value={1}>Female</option>
                        <option value={2}>Other</option>
                        <option value={3}>Prefer not to say</option>
                    </select>
                    {errors.gender && (
                        <p className="text-red-500 text-sm">{errors.gender.message}</p>
                    )}
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        id="isAgreed"
                        type="checkbox"
                        {...register('isAgreed')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isAgreed" className="text-sm text-gray-700">
                        I agree to terms
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
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;