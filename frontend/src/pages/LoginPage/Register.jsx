import { useState } from "react"
const Register = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confpassword, setConfPassword] = useState('')
    
    const Register = (e) => {
        e.preventDefault
    }

    return (
    
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
          <div className="hero-body">
              <div className="container">
                  <div className="columns is-centered">
                      <div className="column is-4-dekstop">
                          <form onSubmit={ Register } action="" className="box">
                              <div className="field mt-5">
                                  <label  className="label">Name</label>
                                  <div className="controls">
                                      <input value={name} onChange={(e)=> setName(e.target.value)} type="text" className="input" placeholder="Name" />
                                  </div>
                              </div>
                              
                              <div className="field mt-5">
                                  <label  className="label">Email</label>
                                  <div className="controls">
                                      <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" className="input" placeholder="Email" />
                                  </div>
                              </div>

                              <div className="field mt-5">
                                  <label  className="label">Password</label>
                                  <div className="controls">
                                      <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className="input" placeholder="*****" />
                                  </div>
                              </div>
                              <div className="field mt-5">
                                  <label  className="label">Confirm Password</label>
                                  <div className="controls">
                                      <input value={confpassword} onChange={(e)=> setConfPassword(e.target.value)} type="password" className="input" placeholder="*****" />
                                  </div>
                              </div>
                              <div className="field mt-5">
                                  <button className="button is-succes is-full-width">Register</button>
                              </div>
                              
                          </form>
                      </div>
                  </div>
                  
              </div>
          </div>
      </section>
  )
  }
  
  export default Register