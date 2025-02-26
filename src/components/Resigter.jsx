import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
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
    <div className="flex h-screen items-center justify-center bg-white">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">SIGN UP</h2>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4 flex items-center border border-gray-300 p-2 rounded-md">
              <Mail className="text-gray-500 mr-2" />
              <Input type="email" placeholder="EMAIL ADDRESS" className="w-full border-none focus:ring-0" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            {/* Password Input */}
            <div className="mb-4 flex items-center border border-gray-300 p-2 rounded-md">
              <Lock className="text-gray-500 mr-2" />
              <Input type="password" placeholder="PASSWORD" className="w-full border-none focus:ring-0" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

            {/* Confirm Password Input */}
            <div className="mb-4 flex items-center border border-gray-300 p-2 rounded-md">
              <Lock className="text-gray-500 mr-2" />
              <Input type="password" placeholder="CONFIRM PASSWORD" className="w-full border-none focus:ring-0" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

            {/* Register Button */}
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">REGISTER</Button>
          </form>
          {/* Login Link */}
          <div className="text-center mt-4 text-sm">
            Already have an account? <Link to="/" className="text-black font-semibold">Log in</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
