
const LoginPage = () => {
  return (


        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-dekstop">
                        <form action="" className="box">
                            <div className="field mt-5">
                                <label  className="label">Email or Username</label>
                                <div className="controls">
                                    <input type="text" className="input" placeholder="Username" />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label  className="label">Password</label>
                                <div className="controls">
                                    <input type="password" className="input" placeholder="*****" />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <button className="button is-succes is-full-width">Login</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
)
}

export default LoginPage