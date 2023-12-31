import React from 'react'

function Form(){
    return(
        <div className='app-form'>
            <div className='form-item'>
                <input type='text' placeholder='Tambah Kegiatan'>
                </input>
            </div>
            <div className='form-item'>
                <button>
                    + Add Task
                </button>
            </div>

        </div>
    )
}

export default Form