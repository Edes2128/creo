import React from 'react'

export default function Form() {

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="form" onSubmit={onSubmit} >
            <div className="inputs flex jc-spaceb">
                <div className="item flex fd-column ai-start">
                    <label htmlFor="#">Name <sup>*</sup> </label>
                    <input type="text" name="" id="" />
                </div>
                <div className="item flex fd-column ai-start">
                    <label htmlFor="#">Phone </label>
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className="inputs flex jc-spaceb">
                <div className="item flex fd-column ai-start">
                    <label htmlFor="#">Email <sup>*</sup> </label>
                    <input type="email" name="" id="" />
                </div>
                <div className="item flex fd-column ai-start">
                    <label htmlFor="#">Subject </label>
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className="message flex fd-column ai-start">
                <label htmlFor="#">Message</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </div>
            <button type="submit" className="fw-regular" >Send</button>
        </form>
    )
}
