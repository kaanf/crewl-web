import React from 'react'

interface CustomerCardProps {
    customer: string;
    quote: string; 
    title: string;
    backgroundColor: string;
}

const CustomerCard = ({ customer, quote, title, backgroundColor }: CustomerCardProps) => {
    const cardStyle = {
        backgroundColor: backgroundColor
    };

    return (
        <div className="flex flex-col justify-between w-full h-full p-12"
            style={cardStyle}>
            <span className="text-xs uppercase tracking-widest">{customer}</span>
            <p className="font-mono py-8 text-xs">&quot; {quote} &quot;</p>
            <p className="text-xs font-mono">&mdash; {title}</p>
        </div>
  )
}

export default CustomerCard