import React from 'react'
import Button from './Button';

interface TestProps {
  title: string;
  word: string;
  variants: string[];
}

const Test: React.FC<TestProps> = ({ title, word, variants }) => {
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="font-bold text-3xl">
        {word}
      </p>
      <p className="">
        To'g'ri tarjimani toping
      </p>
      <div className='flex flex-col gap-4'>
        {variants.map((el, index) => {
          return <Button key={index} className='bg-blue-500 w-fit rounded-md text-white hover:bg-blue-400'>
            {el}
          </Button>
        })}
      </div>
    </>
  )
}

export default Test
