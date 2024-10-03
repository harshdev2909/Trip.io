import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SelectBudgetOptios, SelectTravelesList } from '@/constants/Options';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

const Index = () => {
    const[place,setPlace] =useState();

    const[formData,setFormData] = useState([]);
    const handleInputChange =(name,value)=>{
       setFormData({
        ...formField,
        [name]:value
       })
    }
    useEffect(()=>{
        console.log(formData)
    },[formData])
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
        <h2 className='font-bold text-3xl'>Tell us your travel preferences🏕️🌴</h2>
        <p className='mt-3 text-grey-500 text-xl'>Just provide some basic information , and our trip planner will generate a customized itineary based on your preferences</p>
        <div className='mt-20 flex flex-col gap-10'>
            <div>
                <h2 className='text-xl my-3 font-medium'>What is destination of choice?</h2>
                <GooglePlacesAutocomplete
                apiKey=''
                selectProps={{
                    place,
                    onChange:(v)=>{setPlace(v); handleInputChange('location',v)}
                }}
                />
            </div>
            <div>
            <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip</h2>
                <Input placeholder={'Ex.3'} type='number' />
            </div>
        </div>
        <div>
        <h2 className='text-xl my-3 font-medium'>What is your Budegt?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptios.map((ele,index)=>(
                <div key={index} className='p-4 rounded-lg hover:shadow-lg cursor-pointer shadow-lg'>
                    <h2 className='text-4xl'>{ele.icon}</h2>
                    <h2 className='font-bold text-lg'>{ele.title}</h2>
                    <h2 className='text-sm text-grey-500'>{ele.desc}</h2>
                </div>
            ))}
        </div>
        <div>
        <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with on your next adventure?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectTravelesList.map((ele,index)=>(
                <div key={index} className='p-4 rounded-lg hover:shadow-lg cursor-pointer shadow-lg'>
                    <h2 className='text-4xl'>{ele.icon}</h2>
                    <h2 className='font-bold text-lg'>{ele.title}</h2>
                    <h2 className='text-sm text-grey-500'>{ele.desc}</h2>
                </div>
            ))}
        </div>
        </div>
        </div>
                <div className='my-10 justify-end flex'>
        <Button >Generate Trip</Button>
                </div>
    </div>
  )
}

export default Index