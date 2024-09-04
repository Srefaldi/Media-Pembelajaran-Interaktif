import { useState } from 'react'
import { Link } from 'react-router-dom'

function RegisterPage() {
    // const [values, setValues] = useState({
    //     name : ''
    // })
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Login</h2>
            <form>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type="text" placeholder='Masukan Nama' name="name" className='form-control rounded-0' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type="password" placeholder='Masukan password' name="password" className='form-control rounded-0' />
                </div>
                <button type='submit' className='btn btn-succes w-100 rounded-0'>Login</button>
                <p>Lorem, ipsum dolor.</p>
                <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Daftar</Link>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage
