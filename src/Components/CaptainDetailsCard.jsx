import React from 'react'
import { CheckCircle, MapPin } from 'lucide-react'

const CaptainDetailsCard = () => {
    const profileItems = [
        { label: "profile photo", subtext: "download the document", checked: true },
        { label: "photo of Driving license - front", subtext: "download the document", checked: true },
        { label: "photo of Driving license - back", subtext: "download the document", checked: true },
        { label: "photo of national ID - front", subtext: "download the document", checked: true },
        { label: "photo of national ID - back", subtext: "download the document", checked: true },
        { label: "Number Of Car", subtext: "123456", checked: true },
        { label: "Model Of Car", subtext: "KIA", checked: true },
        { label: "Driving license", subtext: "123456", checked: true },
        { label: "Color Of The Car", subtext: "black", checked: true },
    ]
    return (
        <>
            <div className="bg-gray-100 p-6 rounded-3xl shadow-lg max-w-md mx-auto">
                <div className="flex flex-col items-center mb-6">
                    <img
                        src="/placeholder.svg?height=96&width=96"
                        alt="Mohamed Haggag"
                        className="w-24 h-24 rounded-full mb-2"
                    />
                    <h2 className="text-xl font-semibold">Mohamed Haggag</h2>
                    <div className="flex items-center text-red-500">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">Nasr el, cairo</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {profileItems.map((item, index) => (
                        <div key={index} className="flex justify-between bg-white p-3 rounded-lg">
                            {/* <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{item.label}</span>
              {item.checked && <CheckCircle size={20} className="text-blue-500" />}
            </div>
            <span className="text-xs text-gray-400 mt-1">{item.subtext}</span> */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">{item.label}</span>
                                {item.checked && <CheckCircle size={20} className="text-blue-500" />}
                            </div>
                            <span className="text-xs text-gray-400 mt-1">{item.subtext}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CaptainDetailsCard