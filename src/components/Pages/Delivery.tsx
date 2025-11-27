import { useContext } from "react"
import { ThemeContext } from "../ECommerceThemeButton/ECommerceThemeButton"
import { themeConfig } from "../../Contexts/theme"
import { useForm } from 'react-hook-form'

export const Delivery = () => {
    const { theme } = useContext(ThemeContext)

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();

    //     alert('Well done! Your product will be shipped!')
    // }
    type FormData = {
        street: string;
        housenumber: string;
        firstandlastname: string;
        phonenumber: string;
    };

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const handleSubmitForm = (data: any) => {
        console.log(data);
        alert('Well done! Your product will be shipped!')
    }

    return (
        <div className="flex items-center justify-center">
            <div className="max-[700px]:w-[375px] h-full mb-10">
                <h1 className={`${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"} font-bold text-[30px] text-center mt-10 mb-4`}>Choose where you want to receive your purchase</h1>

                <form onSubmit={handleSubmit(handleSubmitForm)} className={`w-[700px] max-[700px]:w-[375px]`}>
                    <h3 className={`p-3 text-2xl ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>Dear customer, please fill in the information for shipping</h3>

                    <div className="flex flex-col w-full">
                        <label className={`px-3 ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>ZIP Code</label>
                        <input className={`w-2/5 border px-3 py-3 outline-none mb-5 rounded-[7px] ${theme === 'light' ? "bg-neutral-very-light-grayish-blue border-grayish-blue text-very-dark-blue" : "bg-neutral-very-dark-blue border-neutral-very-dark-grayish-blue text-neutral-very-light-grayish-blue"} `} type="number" name="zip-code" placeholder="E.g.: 0540001" min={0} />
                    </div>
                    <div className="flex">
                        <div className="w-4/6 flex flex-col">
                            <label className={`px-3 ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>Street / avenue</label>
                            <input className={`border mr-5 px-3 py-3 mb-5 rounded-[7px] outline-none ${theme === "light" ? "bg-neutral-very-light-grayish-blue border border-grayish-blue text-very-dark-blue" : "bg-neutral-very-dark-blue border border-neutral-very-dark-grayish-blue text-neutral-very-light-grayish-blue"} ${errors.street ? "border-red-500" : "" }`} id="street" type="text" placeholder="E.g.: Avenue Los Leones"
                                {...register('street', {
                                    required: "Campo obrigatório",
                                })
                                }
                            />
                            {errors.street && <p className="text-red-500 text-sm mt-[-15px] mb-3">{errors.street.message}</p>}
                        </div>
                        <div className="w-2/6 flex flex-col">
                            <label className={`px-3 ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>Number</label>
                            <input className={`mr-5 border px-3 py-3 outline-none mb-5 rounded-[7px] ${theme === 'light' ? "bg-neutral-very-light-grayish-blue border-grayish-blue text-very-dark-blue" : "bg-neutral-very-dark-blue border-neutral-very-dark-grayish-blue text-neutral-very-light-grayish-blue"} ${errors.street ? "border-red-500" : "" } `} type="number" placeholder="E.g.: 4565" min={0} {...register('housenumber', {
                                    required: "Campo obrigatório",
                                })
                                }
                            />
                            {errors.housenumber && <p className="text-red-500 text-sm mt-[-15px] mb-3">{errors.housenumber.message}</p>}
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-3/6 flex flex-col">
                            <label className={`px-3 ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>Neighborhood</label>
                            <input className={`mr-5 px-3 py-3 mb-5 rounded-[7px] outline-none ${theme === "light" ? "bg-neutral-very-light-grayish-blue border border-grayish-blue text-very-dark-blue" : "bg-neutral-very-dark-blue border border-neutral-very-dark-grayish-blue text-neutral-very-light-grayish-blue"}`} type="text" name="neighborhood" placeholder="E.g.: Virginia" />
                        </div>
                        <div className="w-2/6 mr-5">
                            <label className={`px-3 ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>City name</label>
                            <input className={`mr-5 border px-3 py-3 outline-none mb-5 rounded-[7px] ${theme === 'light' ? "bg-neutral-very-light-grayish-blue border-grayish-blue text-very-dark-blue" : "bg-neutral-very-dark-blue border-neutral-very-dark-grayish-blue text-neutral-very-light-grayish-blue"} `} type="text" name="city-name" placeholder="E.g.: AR" />
                        </div>
                        <div className="flex flex-col w-1/6">
                            <label className={`px-3 ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>State</label>
                            <input className={`border px-3 py-3 outline-none mb-5 rounded-[7px] ${theme === 'light' ? "bg-neutral-very-light-grayish-blue border-grayish-blue text-very-dark-blue" : "bg-neutral-very-dark-blue border-neutral-very-dark-grayish-blue text-neutral-very-light-grayish-blue"} `} type="text" name="state" placeholder="E.g.: EUA" />
                        </div>
                    </div>
                    <div>
                        <label className={`px-3 ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>Additional information</label>
                        <textarea className={`w-full border px-3 py-3 outline-none mb-5 rounded-[7px] ${theme === 'light' ? "bg-neutral-very-light-grayish-blue border-grayish-blue text-very-dark-blue" : "bg-neutral-very-dark-blue border-neutral-very-dark-grayish-blue text-neutral-very-light-grayish-blue"} `} name="house-number" rows={5} placeholder="Enter any information that helps locate your address" />

                    </div>

                    <div>
                        <label className={`px-3 ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>Is this your work or your home?</label>
                        <div className="mt-3 flex items-center justify-self-start gap-2 mb-3">
                            <input type="radio" className={`${theme === 'light' ? "bg-neutral-very-light-grayish-blue border-grayish-blue text-very-dark-blue" : "bg-neutral-very-dark-blue border-neutral-very-dark-grayish-blue text-neutral-very-light-grayish-blue"} `} name="where" id="work" />
                            <img className="w-6" src={`${themeConfig[theme].work}`} alt="" />
                            <label htmlFor="work" className={`${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>Work</label>
                        </div>
                        <div className="flex items-center justify-self-start gap-2 mb-5">
                            <input type="radio" className={`${theme === 'light' ? "bg-neutral-very-light-grayish-blue border-grayish-blue text-very-dark-blue" : "bg-neutral-very-dark-blue border-neutral-very-dark-grayish-blue text-neutral-very-light-grayish-blue"} `} name="where" id="home" />
                            <img className="w-6" src={`${themeConfig[theme].home}`} alt="" />
                            <label htmlFor="home" className={`${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>Home</label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className={`font-semibold mb-3 px-3 ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>Contact information</label>

                        <div className="flex flex-col w-full">
                            <label className={`px-3 ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>First and last name</label>
                            <input className={`w-full border px-3 py-3 outline-none mb-5 rounded-[7px] ${theme === 'light' ? "bg-neutral-very-light-grayish-blue border-grayish-blue text-very-dark-blue" : "bg-neutral-very-dark-blue border-neutral-very-dark-grayish-blue text-neutral-very-light-grayish-blue"} ${errors.street ? "border-red-500" : "" }`} type="text"  {...register('firstandlastname', {
                                    required: "Campo obrigatório",
                                })
                                } />
                            {errors.firstandlastname && <p className="text-red-500 text-sm mt-[-15px] mb-3">{errors.firstandlastname.message}</p>}
                        </div>
                        <div className="flex flex-col w-full">
                            <label className={`px-3 ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>Phone number</label>
                            <input className={`w-full border px-3 py-3 outline-none mb-5 rounded-[7px] ${theme === 'light' ? "bg-neutral-very-light-grayish-blue border-grayish-blue text-very-dark-blue" : "bg-neutral-very-dark-blue border-neutral-very-dark-grayish-blue text-neutral-very-light-grayish-blue"} ${errors.street ? "border-red-500" : "" }`} type="number"  placeholder="E.g.: +1 (xxx) xxx-xxxx" min={0} {...register('phonenumber', {
                                    required: "Campo obrigatório",
                                })
                                } />
                            {errors.phonenumber && <p className="text-red-500 text-sm mt-[-15px] mb-3">{errors.phonenumber.message}</p>}
                        </div>
                    </div>


                    <input type="submit" className="cursor-pointer bg-orange hover:bg-pale-orange text-white w-full py-3 rounded-lg font-bold" />
                </form>


            </div>
        </div>

    )
}