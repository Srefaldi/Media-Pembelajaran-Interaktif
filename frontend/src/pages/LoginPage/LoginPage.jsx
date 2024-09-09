import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      });
      navigate('/dashboard'); 
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
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-light">
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Login</h5>
                <form onSubmit={Auth}>
                  {msg && <div className="alert alert-danger">{msg}</div>}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email or Username</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="email" 
                      placeholder="Username" 
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
                  <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
