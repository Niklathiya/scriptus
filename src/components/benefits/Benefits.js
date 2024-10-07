import React from 'react'
import "./benefits.css"
import { Payment, Return, Contact } from '../../image'

const Benefits = () => {
    const benefitdata = [
        {
            image: Payment,
            heading: "Payment Method",
            detail: "We offer flexible payment options, to make easier."
        },
        {
            image: Return,
            heading: "Return policy",
            detail: "You can return a product within 30 days."
        },
        {
            image: Contact,
            heading: "Customer Support",
            detail: "Our customer support is 24/7."
        },
    ]

  return (
    <section className='benefit-wrapper'>
      <div className='custom-container'>
        <h2 className='font-color-dark'>Benefits for your expediency</h2>
        <div className='benefit-badge-container'>
            {benefitdata.map((benefit, index) => {
                return (
                    <>
                        <div>
                            <div key={index} className={`benefit-image-wrapper color-${index}`}>
                                <div className='benefit-image-box'>
                                    <img src={benefit.image} alt={benefit.heading}/>
                                </div>
                            </div>
                            <h3 className='font-color-dark'>{benefit.heading}</h3>
                            <p className='font-color-dark'>{benefit.detail}</p>
                        </div>
                    </>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
