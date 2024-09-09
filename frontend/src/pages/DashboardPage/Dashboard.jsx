import NavBar2 from "../../components/Dashboard/NavBar2";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const respone = await axios.get('http://localhost:5000/token');
      setToken(respone.data.accessToken);
      const decoded = jwtDecode(respone.data.accessToken); 
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.respone) {
        navigate.push('http://localhost:5173/login');
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const respone = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${respone.data.accessToken}`;
        setToken(respone.data.accessToken);
        const decoded = jwtDecode(respone.data.accessToken); 
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsers = async () => {
    const respone = await axiosJWT.get('http://localhost:5000/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(respone.data);
  };

  return (
    <div>
      <NavBar2 />
      <div className="syarat-ketentuan-page">
        <div className="syarat-ketentuan min-vh-100">
          <Container>
            <Row>
              <Col>
                <h1 className="fw-bold text-center mb-2">Welcome : {name}</h1>
                <button onClick={getUsers} className="button is-info text-center mb-2">
                  Get Users
                </button>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
              </Col>
            </Row>
            <Row className="text-center pt-5">
              <Col>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, similique?</p>
              </Col>
            </Row>
            <Row className="py-3">
              <Col>
                <h4 className="fw-bold">Lorem, ipsum dolor.</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
