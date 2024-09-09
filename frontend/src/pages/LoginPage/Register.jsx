import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword
      });
      navigate('/login'); 
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm border-light">
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Register</h5>
                <form onSubmit={Register}>
                  {msg && <div className="alert alert-danger">{msg}</div>}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      placeholder="Name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="email" 
                      placeholder="Email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      placeholder="*****" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confPassword" className="form-label">Confirm Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="confPassword" 
                      placeholder="*****" 
                      value={confPassword} 
                      onChange={(e) => setConfPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
