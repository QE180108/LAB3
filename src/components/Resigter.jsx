import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

const Register = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">SIGN UP</h2>
        <CardContent>
          {/* Email Input */}
          <div className="mb-4 flex items-center border border-gray-300 p-2 rounded-md">
            <Mail className="text-gray-500 mr-2" />
            <Input type="email" placeholder="EMAIL ADDRESS" className="w-full border-none focus:ring-0" />
          </div>

          {/* Password Input */}
          <div className="mb-4 flex items-center border border-gray-300 p-2 rounded-md">
            <Lock className="text-gray-500 mr-2" />
            <Input type="password" placeholder="PASSWORD" className="w-full border-none focus:ring-0" />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4 flex items-center border border-gray-300 p-2 rounded-md">
            <Lock className="text-gray-500 mr-2" />
            <Input type="password" placeholder="CONFIRM PASSWORD" className="w-full border-none focus:ring-0" />
          </div>

          {/* Register Button */}
          <Button className="w-full bg-black text-white hover:bg-gray-800">REGISTER</Button>

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
