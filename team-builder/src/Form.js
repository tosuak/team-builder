import React from 'react'

export default function FormData(props) {
const { values, update, submit } = props;

const onChange = evt => {
    const { name, value } = evt.target;
    update(name, value);
}

const onSubmit = evt => {
    evt.preventDefault();
    submit();
}

return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form-group inputs'>
        <label>First Name 
            <input 
                name='firstName'
                type='text'
                placeholder='Enter your First Name'
                maxLength='30'
                value={values.firstName}
                onChange={onChange}
            />
        </label>

        <label>Last Name 
            <input 
                name='lastName'
                type='text'
                placeholder='Enter your Last Name'
                maxLength='30'
                value={values.lastName}
                onChange={onChange}
            />
        </label>

        <label>E-mail
            <input 
                name='email'
                type='email'
                placeholder='Enter your E-mail'
                value={values.email}
                onChange={onChange}
            />
        </label>

        <label>Role
            <select name='role' onChange={onChange}>
                <option value=''>-- Select a Role --</option>
                <option value='Backend'>Backend Engineer</option>
                <option value='Frontend'>Frontend Engineer</option>
                <option value='Fullstack'>Fullstack Engineer</option>
                <option value='Designer'>Web Designer</option>
                <option value='Professor'>Professor</option>
                <option value='Student'>Student</option>
            </select>
        </label>
        <div className='submit'>
            <button>SUBMIT</button>
        </div>
        </div>
    </form>

)


};