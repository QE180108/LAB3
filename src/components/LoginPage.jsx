import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Proceed with form submission
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center">Welcome to your expert community</h1>
      </div>
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <Card className="w-full max-w-md p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">SIGN <span className="text-blue-500">IN</span></h2>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input type="text" placeholder="USERNAME" className="w-full text-sm uppercase" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

              <div className="mb-4">
                <Input type="password" placeholder="PASSWORD" className="w-full text-sm uppercase" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              <Button type="submit" className="w-full bg-black text-white mb-4 uppercase">SIGN IN</Button>
            </form>
            <div className="flex justify-between text-sm mt-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" /> Remember me
              </label>
              <a href="#" className="text-blue-500">Forgot password?</a>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm">Don't have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-6 h-6 md:w-8 md:h-8 object-contain cursor-pointer"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"/>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
