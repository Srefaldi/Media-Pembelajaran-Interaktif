import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'; // Perbaiki cara impor axios

function RegisterPage() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/register', values)
            .then(res => console.log(res))
            .catch(err => console.log(err)); 
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Daftar</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type="text" placeholder='Masukan Nama' name="name" onChange={e => setValues({ ...values, name: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type="email" placeholder='Masukan email' name="email" onChange={e => setValues({ ...values, email: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type="password" placeholder='Masukan password' name="password" onChange={e => setValues({ ...values, password: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Daftar</button>
                    <p>Lorem, ipsum dolor.</p>
                    <Link to="/Login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
