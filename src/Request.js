import React, { useState } from 'react';
import './Request.css';
import DatePicker from 'react-date-picker';
function Request() {
    const [value, onChange] = useState(new Date());
    return (
        <div className='request-order'>
            <form>
                <div className='form-group'>
                    <label className='request-title'>Title</label>:
                    <input type="text" name="name" className='request-data short' />
                    
                </div>
                <div className='form-group'>
                    <label className='request-title'>Description</label>:
                    <input type="text" name="name" className='request-data description' />
                

                </div>
                <div className='form-group multi-group'>
                    <div>
                        <label className='request-title'>Qty</label>:
                        <input type="number" name="name" className='request-data short2' />
                    </div>
                    <div>
                        <label className='request-title'>Location</label>:
                        <input type="text" name="name" className='request-data short2' />
                    </div>


                </div>
                <div className='form-group'>
                    <label className='request-title'>Best Before</label>:
                    <div>
                    <DatePicker onChange={onChange} value={value} />
                    </div>
                </div>
                <div className='btn-group'>
                    <button className='btn btn-accept'>Donate</button>
                </div>
            </form>
        </div>
    );
}
export default Request;