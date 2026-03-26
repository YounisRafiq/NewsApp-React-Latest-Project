import React from 'react'
import loading from './loading.gif.gif'

const Spinner = () => {
    return (
      <div>
        <div className="container text-center my-3">
<img rel="noreferrer" style={{width:"80px"}} className='text-center' src={loading} alt="Loading" />
        </div>
      </div>
    )
  }
export default Spinner;