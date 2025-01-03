import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptios, SelectTravelesList } from '@/constants/Options';
import { chatSession } from '@/service/AiModel';
import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { toast } from 'sonner';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
} from "@/components/ui/dialog"

const Index = () => {
    const [place, setPlace] = useState();
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState([]);
    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }
    useEffect(() => {
        console.log(formData)
    }, [formData])

    const OnGenerateTrip = async () => {

        const user = localStorage.getItem('user')
        if (!user) {
            setOpen(true);
            return;
        }
        if (formData?.noOfDays > 5 && formData?.location || !formData?.budget || !formData?.people) {
            toast("Please fill all details.")

            return;
        }
        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', formData?.location?.label)
            .replace('{totalDays}', formData?.noOfDays)
            .replace('{traveler}', formData?.people)
            .replace('{budget}', formData.budget)
            .replace('{totalDays}', formData?.noOfDays)

        //  console.log(FINAL_PROMPT)

        const result = await chatSession.sendMessage(FINAL_PROMPT)

        console.log(result?.response?.text())
    }
    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>Tell us your travel preferences🏕️🌴</h2>
            <p className='mt-3 text-grey-500 text-xl'>Just provide some basic information , and our trip planner will generate a customized itineary based on your preferences</p>
            <div className='mt-20 flex flex-col gap-10'>
                <div>
                    <h2 className='text-xl my-3 font-medium'>What is destination of choice?</h2>
                    <GooglePlacesAutocomplete
                        apiKey='AIzaSyCyNPGCa7svWqGkeTUbOjazEFy1AaTb8z4'
                        selectProps={{
                            place,
                            onChange: (v) => {
                                setPlace(v);
                                // console.log(v)
                                handleInputChange('location', v)
                            }
                        }}
                    />
                </div>
                <div>
                    <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip</h2>
                    <input onChange={(e) => handleInputChange('noOfDays', e.target.value)} placeholder={'Ex.3'} type='number' />
                </div>
            </div>
            <div>
                <h2 className='text-xl my-3 font-medium'>What is your Budegt?</h2>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    {SelectBudgetOptios.map((ele, index) => (
                        <div onClick={() => handleInputChange('budget', ele.title)} key={index} className={`p-4 rounded-lg hover:shadow-lg cursor-pointer
                ${formData?.budget == ele.title && ' shadow-lg border-black'}
                `}>
                            <h2 className='text-4xl'>{ele.icon}</h2>
                            <h2 className='font-bold text-lg'>{ele.title}</h2>
                            <h2 className='text-sm text-grey-500'>{ele.desc}</h2>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with on your next adventure?</h2>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        {SelectTravelesList.map((ele, index) => (
                            <div onClick={() => handleInputChange('people', ele.peole)} key={index} className={`p-4 rounded-lg hover:shadow-lg cursor-pointer 
                ${formData?.people == ele.peole && ' shadow-lg border-black'}
                `}>

                                <h2 className='text-4xl'>{ele.icon}</h2>
                                <h2 className='font-bold text-lg'>{ele.title}</h2>
                                <h2 className='text-sm text-grey-500'>{ele.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='my-10 justify-end flex'>
                <Button onClick={OnGenerateTrip} >Generate Trip</Button>
            </div>
            <Dialog open={open}>
                <DialogContent>
                    <DialogHeader>
                        
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers..
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default Index