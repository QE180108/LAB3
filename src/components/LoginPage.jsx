import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center">Welcome to your expert community</h1>
      </div>
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <Card className="w-full max-w-md p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">SIGN <span className="text-blue-500">IN</span></h2>
          <CardContent>
            <div className="mb-4">
              <Input type="text" placeholder="USERNAME" className="w-full text-sm uppercase" />
            </div>
            <div className="mb-4">
              <Input type="password" placeholder="PASSWORD" className="w-full text-sm uppercase" />
            </div>
            <Button className="w-full bg-black text-white mb-4 uppercase">SIGN IN</Button>
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
              {/* <img src="google-icon.png" alt="Google" className="w-8 h-8 cursor-pointer" />
              <img src="facebook-icon.png" alt="Facebook" className="w-8 h-8 cursor-pointer" />
              <img src="x-icon.png" alt="X" className="w-8 h-8 cursor-pointer" /> */}
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
