import React from 'react'
import { Tilt } from '@jdion/tilt-react'

const MenuLeft = () => {
    return (
        <div className='overflow-hidden w-2/3 h-full px-32 py-14 relative bottom-[10%]'>
            <Tilt className='relative h-full w-full flex items-center justify-center'>
                <img className='absolute scale-[0.97] opacity-20 h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" />
                <img className='absolute scale-[0.94] opacity-50 h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" />
                <img className='absolute scale-[0.91] opacity-70 h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" />
                <img className='absolute opacity-50 h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" />
            </Tilt>
        </div>
    )
}

export default MenuLeft